import React from "react";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-[32px]">
      <div className="flex flex-col md:flex-row items-start w-full md:mx-auto md:px-4">
        {/* Company Details */}
        <div className="w-full md:w-1/2">
          {/* <div className="text-4xl mb-4 font-audiowide">at digital</div> */}
          <img src={logo} alt="" />
          <div className="sm:w-2/3 w-full font-sans">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </div>
        </div>

        {/* Our Technologies */}
        <div className="flex flex-col sm:flex-row md:w-1/2 w-full md:mt-0 mt-10 md:gap-0 gap-4">
          <div className="w-1/2">
            <h3 className="text-xl font-semibold mb-1 md:whitespace-normal whitespace-nowrap">
              Our Technologies
            </h3>
            <ul className="space-y-2 text-sm">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="sm:mt-0 mt-10">
            <h3 className="text-xl font-semibold mb-2">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 md:w-3/5 mx-auto">
        <hr />
      </div>
      <div className="flex items-center justify-center mt-2 text-sm">
        <div className="px-2">Privacy Policy</div>
        <div>|</div>
        <div className="px-2">Terms & Conditions</div>
      </div>
    </footer>
  );
};

export default Footer;
