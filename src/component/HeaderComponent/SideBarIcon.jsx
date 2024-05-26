"use client";

import { handleOpenDrawer } from "@/src/ReduxSystem/ReduxSlices/headerSlice";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch } from "react-redux";

const SideBarIcon = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Bars3Icon
        className="h-6 w-6 cursor-pointer hover:text-blue-500"
        strokeWidth={2}
        onClick={() => dispatch(handleOpenDrawer())}
      />
    </div>
  );
};

export default SideBarIcon;
