import express from "express";
import protect from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js";
import {
  addCar,
  changeRoleOwner,
  deleteCar,
  getDashboardData,
  getOwnerCars,
  toggleCarAvailability,
  updateUserImage,
} from "../controllers/owner.controller.js";


const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleOwner);

ownerRouter.post("/add-car", protect, upload.single("image"), addCar);

ownerRouter.get("/cars", protect, getOwnerCars);
ownerRouter.post("/toggle-car", protect, toggleCarAvailability);
ownerRouter.post("/delete-car", protect, deleteCar);
ownerRouter.get("/dashboard", protect, getDashboardData);

ownerRouter.post("/update-image", protect,upload.single("image"), protect, updateUserImage);
export default ownerRouter;
