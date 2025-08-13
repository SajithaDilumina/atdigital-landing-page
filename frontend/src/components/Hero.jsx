import React from "react";
import heroImage from "../assets/hero.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section
        className="relative md:h-[700px] h-[448px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div
          className="absolute bottom-0 mb-[32px] ml-[40px] z-10 md:flex hidden items-center justify-center h-[306px] text-white p-8 max-w-lg "
          style={{
            background: "linear-gradient(75deg, #4dca79, #1cbddd)",
          }}
        >
          <div>
            <div className="mt-4 font-[700] text-4xl md:text-4xl max-w-2xl mx-auto">
              We Crush Your Competitors, Goals, And Sales Records - Without The
              B.S.
            </div>
            <Button name="Get free consultation" />
          </div>
        </div>
      </section>
      <section
        className="md:hidden block text-white p-4  px-[32px]"
        style={{
          background: "linear-gradient(75deg, #4dca79, #1cbddd)",
        }}
      >
        <div>
          <div className="mt-4 font-semibold text-4xl max-w-2xl break-words">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </div>
          <Button name="Get free consultation" />
        </div>
      </section>
    </>
  );
};

export default Hero;
