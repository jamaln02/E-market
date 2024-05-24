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
const HeaderCart = () => {
  const [openPop, setOpenPop] = useState(false);

  const handleOpen = {
    onMouseEnter: () => setOpenPop(true),
    onMouseLeave: () => setOpenPop(false),
  };
  return (
    <Popover open={openPop} handler={setOpenPop}>
      <PopoverHandler {...handleOpen}>
        <div className="leading-[0px] mb-5 ">
          <span className="badge " id="lblCartCount">
            0
          </span>
          <i className="text-4xl leading-[0px]  p-0 m-0 text-white hover:text-blue-500 cursor-pointer">
            <Link href={"/cart"}>
              <BsCart4 />
            </Link>
          </i>
        </div>
      </PopoverHandler>
      <PopoverContent className="p-0" {...handleOpen}>
        <div className=" bg-white max-[300px] text-center flex flex-col items-center text-main rounded-md border-blue-600 border ">
          <div className="border-b-[1px] border-main shadow-md">
            <h1 className="p-6 font-bold">Recenlty Added Products</h1>
          </div>
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
      </PopoverContent>
    </Popover>
  );
};

export default HeaderCart;
