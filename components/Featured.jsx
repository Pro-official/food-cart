import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./Navbar";

const Featured = () => {
  // const [index, setIndex] = useState(0);
  // const images = [
  //   "/img/featured.png",
  //   "/img/featured2.png",
  //   "/img/featured3.png",
  // ];

  // const handleArrow = (direction) =>{
  //     if(direction==="l"){
  //         setIndex(index !== 0 ? index-1 : 2)
  //     }
  //     if(direction==="r"){
  //         setIndex(index !== 2 ? index+1 : 0)
  //     }
  // }

  return (
    // <div className={styles.container}>
    //   <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
    //     <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
    //   </div>
    //   <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
    //     {images.map((img, i) => (
    //       <div className={styles.imgContainer} key={i}>
    //         <Image src={img} alt="" layout="fill" objectFit="contain" />
    //       </div>
    //     ))}
    //   </div>
    //   <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
    //     <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
    //   </div>
    // </div>
    <>
      <div
        className="hero min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url("https://cdn.cmsfly.com/63ee134969c752004dc4ac3f/image-0d5YiD.png")`,
        }}
      >
        {/* <h1 className="absolute top-0 ">Hey hey hey</h1> */}
        <Navbar />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-6 text-8xl tracking-wider">HUNGRY?</h1>
            <p className="mb-6 text-xl leading-8">TRY OUT OUR FINEST FOOD</p>
            <button className="btn px-10 pt-6 pb-12 bg-[#FFC90F]">
              <p className="text-lg text-[#505050]">Order Now</p>
            </button>
          </div>
        </div>

        {/* ********************** */}
      </div>

      <section className="bg-white w-full mx-auto lg:max-w-6xl my-16">
        <div className="container px-6 py-16 mx-auto">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro beatae error laborum ab amet sunt recusandae? Reiciendis
                  natus perspiciatis optio.
                </p>

                <button className="w-full mt-6 text-lg tracking-wider text-black  transition-colors duration-300 transform border-2 border-black py-5 px-8 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <Image
                src="https://cdn.cmsfly.com/6425ab84673ce0001fdd7210/screenshot_1-CIrOQs.png"
                alt="Some random foods"
                width={500}
                height={450}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
