import React from "react";
import Hero from "../../components/Hero";
import AboutComp from "../../components/About";
import Services from "../../components/Services";
import Video from "../../components/Video";

const heroProps = {
  img: "https://cdn.cmsfly.com/63ee134969c752004dc4ac3f/header-ye9SCR.jpg",
  title: "About Us",
};

const About = () => {
  return (
    <>
      <Hero heroProps={heroProps} />
      <AboutComp
        img={
          "https://cdn.cmsfly.com/6425ab84673ce0001fdd7210/screenshot_2-5pijaH.png"
        }
        alt={"Man prepareing BBQ"}
      />
      <Services />
      <Video />
    </>
  );
};

export default About;
