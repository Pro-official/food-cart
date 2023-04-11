import Image from "next/image";
import React from "react";

const AboutComp = ({ img, alt }) => {
  const bgImage =
    "https://cdn.cmsfly.com/63ee134969c752004dc4ac3f/frame-1000007309-pviwNl.png";
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="hero bg-cover bg-center relative"
    >
      <div className="container px-6 py-16 w-full mx-auto lg:max-w-6xl my-16">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-md">
              <h2
                style={{ lineHeight: "60px" }}
                className="text-4xl font-semibold mb-5 text-[#0E0A00] lg:text-5xl"
              >
                We are serving since 2015
              </h2>

              <p className="mb-5 text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>

              <button className="w-full mt-6 text-lg tracking-wider text-black  transition-colors duration-300 transform border-2 border-black py-5 px-8 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image src={img} alt={alt} width={500} height={450} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComp;
