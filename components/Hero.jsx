import React from "react";
import Navbar from "./Navbar";

const Hero = ({ heroProps }) => {
  const { img, title, desc, btnText, source } = heroProps;
  return (
    <div
      className={`hero ${
        source ? "min-h-screen" : "min-h-fit"
      } bg-cover bg-center relative`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <Navbar />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          {/* {
                !source 
            } */}
          <h1 className={`mb-6 text-8xl tracking-wider ${!source && "py-52"}`}>
            {title}
          </h1>
          {desc && <p className="mb-6 text-xl leading-8">{desc}</p>}
          {btnText && (
            <button className="btn px-10 pt-6 pb-12 bg-[#FFC90F]">
              <p className="text-lg text-[#505050]">{btnText}</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
