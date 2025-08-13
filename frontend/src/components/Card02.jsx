import React from "react";
import cardImage from "../assets/card2_image.png";
import Button from "./Button";

const Card02 = () => {
  return (
    <div className="md:mt-15 flex my-4 flex-col sm:flex-row-reverse items-center bg-white overflow-hidden max-w-4xl mx-auto px-[32px]">
      <img
        src={cardImage}
        alt="Card Image"
        className="w-full sm:w-1/3 h-full object-cover  "
      />
      <div className="pt-6  flex flex-col sm:block text-center sm:text-left items-center sm:items-start ">
        <div className="md:text-xl text-lg text-primary font-bold mb-2">
          Digital Strategy Consulting
        </div>
        <p className="text-sm ">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <Button name="LEARN MORE" />
      </div>
    </div>
  );
};

export default Card02;
