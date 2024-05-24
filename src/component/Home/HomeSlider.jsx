import React from "react";
import { Carousel } from "@/clientExports";
import img1 from "@/public/blue.jpg";

import img2 from "@/public/yellow.jpg";
import img3 from "@/public/pink.jpg";
import img4 from "@/public/sale.jpg";

import Image from "next/image";

const HomeSlider = () => {
  return (
    <div className="h-32 md:h-56 lg:h-96 !overflow-hidden w-full md:w-11/12  container mx-auto my-5 !z-0">
      <Carousel
        prevArrow={false}
        nextArrow={false}
        navigation={false}
        autoplay={true}
        autoplayDelay={3000}
        loop={true}
        transition={{ duration: 1.8, type: "spring" }}
        className="rounded-xl overflow-hidden !z-0"
      >
        <Image
          src={img4}
          alt="image 4"
          className="w-full object-bottom"
          priority="false"
        />
        <Image src={img3} alt="image 3" className="w-full" />
        <Image src={img2} alt="image 2" className="w-full" />
        <Image src={img1} alt="image 1" className="w-full " />
      </Carousel>
    </div>
  );
};

export default HomeSlider;
