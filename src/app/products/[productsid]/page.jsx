"use client";
import { getAllProducts } from "@/src/ReduxSystem/ReduxSlices/productsSlice";
import LightGallery from "lightgallery/react/Lightgallery.es5";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "lightgallery/css/lightgallery.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgRotate from "lightgallery/css/lg-rotate.css";
import lgAutoplay from "lightgallery/css/lg-autoplay.css";
import { Button } from "@material-tailwind/react";

const Page = () => {
  const { productsid } = useParams();
  console.log(productsid);

  const { productsData } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(productsid));
  }, [productsid]);
  console.log(productsData);
  const setting = {
    selector: null,
  };

  const setting2 = {
    selector: "this",
  };
  return (
    <section className="container mx-auto p-3 md:p-8 lg:p-12">
      <div className="p-4 flex items-center md:items-start flex-col md:flex-row gap-2 bg-white md:justify-evenly">
        <div className="w-[100%] md:w-[45%] h-[60%]">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            {...setting}
          >
            <div
              className="w-[100%] h-[50%]"
              data-src={productsData?.thumbnail}
              {...setting}
            >
              <a href={productsData?.thumbnail} {...setting2}>
                <img
                  src={productsData?.thumbnail}
                  alt={`img`}
                  className=" cursor-zoom-in w-full"
                />
              </a>
            </div>
            <div className=" gap-4 w-full  md:gap-5 flex items-center justify-center ">
              {productsData?.images?.map((ele, ind) => (
                <div
                  {...setting}
                  data-src={ele}
                  key={ind}
                  className="w-[90px] md:w-[100px] lg:w-[120px] max-w-full flex items-center justify-start"
                >
                  <a href={ele} {...setting2}>
                    <img
                      src={ele}
                      alt={`img${ind}`}
                      className=" cursor-zoom-in"
                    />
                  </a>
                </div>
              ))}
            </div>
          </LightGallery>
        </div>
        <div className="w-[100%] md:w-[45%] flex flex-col flex-wrap gap-2 items-center text-center md:text-start md:items-start">
          <div>
            <h1 className="font-bold border-b-2 text-xl my-2">
              {productsData?.title}
            </h1>
          </div>
          <div>
            <p className="text-gray-600 my-2">{productsData?.description}</p>
          </div>
          <div className="capitalize text-gray-600 flex flex-wrap justify-evenly items-center gap-2 my-2">
            <span>rating:{productsData?.rating}</span>{" "}
            <span className="text-main p-2 w-2"> |</span>
            <span>brand :{productsData?.brand}</span>{" "}
            <span className="text-main p-2 w-2"> |</span>
            <span>category : {productsData?.category}</span>
          </div>
          <div className="bg-gray-300 p-5 w-full">
            <div className=" text-gray-600 ">
              <span className="line-through m-2">{productsData?.price}</span>{" "}
              <span>Inclusive of taxes</span>
            </div>
            <div className="px-2 py-0.5 flex gap-1 flex-wrap items-center justify-center lg:justify-start lg:text-start">
              <span className="text-main text-lg font-bold mx-1 ">
                EGP{" "}
                {(
                  productsData?.price -
                  (productsData?.price * productsData?.discountPercentage) / 100
                ).toFixed(2)}
              </span>{" "}
              <span className="bg-main text-white px-4">
                {productsData?.discountPercentage}% off
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 my-10 flex-wrap justify-center md:justify-start">
            <div className="text-gray-600">Quantity : </div>
            <div className="flex items-center text-black rounded-md  p-0.5">
              {" "}
              <Button className="bg-gray-600 text-lg  px-6 py-1.5 font-bold    rounded-md ">
                -
              </Button>
              <p className="bg-white px-6 py-1.5 font-bold border border-gray-600  rounded-md mx-0.5">
                0
              </p>
              <Button className="bg-gray-600 text-lg  px-6 py-1.5 font-bold   rounded-md">
                +
              </Button>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap items-center justify-center md:justify-start mb-4">
            <Button variant="filled" className="bg-main text-white shadow-xl">
              Add To Cart
            </Button>
            <Button variant="filled" className="bg-main text-white shadow-xl">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
