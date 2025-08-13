import React from "react";
import cardImage from "../assets/card1_image.png";
import Button from "./Button";

const Card01 = () => {
  return (
    <div className="flex my-4 flex-col sm:flex-row items-center bg-white overflow-hidden max-w-4xl mx-auto px-[32px]">
      <img
        src={cardImage}
        alt="Card Image"
        className="w-full sm:w-1/3 h-full object-cover  "
      />
      <div className="pt-6  flex flex-col sm:block text-center sm:text-left items-center sm:items-start ">
        <div className="md:text-xl text-lg text-primary font-bold mb-2">
          Web & Mobile App Development
        </div>
        <p className="text-sm ">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <Button name="LEARN MORE" />
      </div>
    </div>
  );
};

export default Card01;
