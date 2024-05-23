"use client";

import { openNav } from "@/src/ReduxSystem/ReduxSlices/headerSlice";
import { Bars3Icon, XMarkIcon, IconButton } from "@/clientExports";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HeaderIcon = () => {
  const handleWindowResize = () => window.innerWidth >= 960 && openNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const { nav } = useSelector((state) => state.headerSlicee);

  const dispatch = useDispatch();

  return (
    <IconButton
      variant="text"
      className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
      ripple={false}
      onClick={() => dispatch(openNav(!nav))}
    >
      {nav ? (
        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
      ) : (
        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
      )}
    </IconButton>
  );
};

export default HeaderIcon;
