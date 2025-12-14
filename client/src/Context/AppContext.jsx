import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

// base URL from env
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:3000";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [cars, setCars] = useState([]);

  // helper: set axios Authorization header consistently
  const setAuthHeader = (tok) => {
    if (tok) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${tok}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  // fetch current user from server (requires Authorization header)
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/data");
      if (data.success) {
        setUser(data.user);
        setIsOwner(data.user.role === "owner");
      } else {
        // no need to toast here; just clear auth
        setUser(null);
        setIsOwner(false);
      }
    } catch (error) {
      // if token invalid or expired, clear stored token
      console.log("fetchUser error:", error.response?.data || error.message);
      setToken(null);
      setUser(null);
      setIsOwner(false);
      localStorage.removeItem("token");
      setAuthHeader(null);
    }
  };

  const fetchCars = async () => {
    try {
      const { data } = await axios.get("/api/user/cars");
      data.success ? setCars(data.cars) : toast.error(data.message);
    } catch (error) {
      console.log("fetchCars error:", error.response?.data || error.message);
    }
  };

  // On app load: read token from localStorage and set axios header
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setAuthHeader(storedToken);
    }
    fetchCars();
  }, []);

  // when token changes, try fetching user data
  useEffect(() => {
    if (token) {
      setAuthHeader(token);
      fetchUser();
    } else {
      // clear user when token removed
      setUser(null);
      setIsOwner(false);
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  // logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsOwner(false);
    setAuthHeader(null);
    toast.success("You have been logged out");
    navigate("/");
  };

  const value = {
    navigate,
    currency,
    axios,
    user,
    setUser,
    token,
    setToken,
    isOwner,
    setIsOwner,
    fetchCars,
    fetchUser,
    showLogin,
    setShowLogin,
    logout,
    cars,
    setCars,
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
