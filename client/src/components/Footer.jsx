import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="text-black pt-8 px-6 md:px-16 lg:px-24 xl:px-32 bg-[#F0E491]">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <h2 alt="logo" className="h-8 md:h-9 text-3xl text-black"  >Nomadiq</h2>
          <p className="max-w-80 mt-3">
          Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="#">
              <img src={assets.facebook_logo} alt="" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={assets.instagram_logo} alt="" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={assets.twitter_logo} alt="" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={assets.gmail_logo} alt="" className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-base font-medium text-black">Quick Links</h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Browse Cars</a>
            </li>
            <li>
              <a href="#">List Your Car</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800">Resources</h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()} <a href="/">CarRental</a>. All rights
          reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
