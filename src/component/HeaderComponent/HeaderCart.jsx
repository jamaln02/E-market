"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import emptyminicart from "@/public/emptyminicart.png";
import Image from "next/image";
import {
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
const HeaderCart = () => {
  const [openPop, setOpenPop] = useState(false);
  const { cart } = useSelector((state) => state.allProducts);
  const handleOpen = {
    onMouseEnter: () => setOpenPop(true),
    onMouseLeave: () => setOpenPop(false),
  };
  return (
    <Popover open={openPop} handler={setOpenPop}>
      <PopoverHandler {...handleOpen}>
        <div className="leading-[0px] mb-5 ">
          <span className="badge " id="lblCartCount">
            {cart?.length}
          </span>
          <i className="text-4xl leading-[0px]  p-0 m-0 text-white hover:text-blue-500 cursor-pointer">
            <Link href={"/cart"}>
              <BsCart4 />
            </Link>
          </i>
        </div>
      </PopoverHandler>
      <PopoverContent className="p-0" {...handleOpen}>
        <div className=" bg-white dark:bg-gray-800 max-w-[350px] max-h-[270px] text-center flex flex-col items-center text-main rounded-md border-blue-600 border overflow-y-scroll">
          <div className="border-b-[2px] border-main shadow-md w-[100%] rounded-b-md bg-bgcart ">
            <h1 className="p-6 font-bold ">Recenlty Added Products</h1>
          </div>
          {cart?.length === 0 && (
            <div className="h-fit">
              {" "}
              <div>
                <Image
                  src={emptyminicart}
                  width={150}
                  hight={150}
                  alt={"empty img"}
                  className="my-2"
                />
                <p className="my-3">No Products Yet!</p>
              </div>
              <Link href={"/"}>
                <Button
                  className="uppercase mt-2 mb-6 border-none"
                  color="blue-gray"
                >
                  go shopping now!
                </Button>
              </Link>
            </div>
          )}
          {cart?.length !== 0 &&
            cart?.map((ele, ind) => (
              <div
                key={ind}
                className="flex items-center gap-2 justify-evenly w-96 bg-gray-300 border-b-2 border-main p-1 "
              >
                <img
                  src={ele?.thumbnail}
                  alt="product image"
                  className="w-[50px] rounded-full"
                />
                <h1 className="text-base font-bold p-1 mx-1 text-gray-700">
                  {ele?.title}
                </h1>
                <h1 className="text-main text-lg font-bold">
                  {(
                    ele?.price -
                    (ele?.price * ele?.discountPercentage) / 100
                  ).toFixed(2)}
                </h1>
              </div>
            ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default HeaderCart;
