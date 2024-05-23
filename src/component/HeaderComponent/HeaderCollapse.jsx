"use client";
import { Collapse } from "@/clientExports";
import React from "react";
import { useSelector } from "react-redux";

const HeaderCollapse = ({ children }) => {
  const { nav } = useSelector((state) => state.headerSlicee);

  return <Collapse open={nav}>{children}</Collapse>;
};

export default HeaderCollapse;
