import Hero from "./Hero";
import AboutComp from "./About";

const heroProps = {
  img: "https://cdn.cmsfly.com/63ee134969c752004dc4ac3f/image-0d5YiD.png",
  title: "HUNGRY?",
  desc: "TRY OUT OUT FINEST FOOD",
  btnText: "Order Now",
  source: "Home",
};

const Featured = () => {
  return (
    <>
      <Hero heroProps={heroProps} />
      <AboutComp
        img={
          "https://cdn.cmsfly.com/6425ab84673ce0001fdd7210/screenshot_1-CIrOQs.png"
        }
        alt={"Some random foods"}
      />
    </>
  );
};

export default Featured;
