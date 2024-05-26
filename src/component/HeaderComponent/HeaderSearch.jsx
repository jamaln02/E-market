"use client";
import React from "react";
import { Button, Input } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsSearch,
  handleSearch,
  openNav,
} from "@/src/ReduxSystem/ReduxSlices/headerSlice";
import Link from "next/link";
const HeaderSearch = () => {
  const dispatch = useDispatch();
  const { inputValue, nav } = useSelector((state) => state.headerSlicee);
  const handleClick = () => {
    dispatch(getProductsSearch(inputValue));
    dispatch(openNav(!nav));
  };
  return (
    <div className=" relative flex">
      <Input
        label="type here"
        color="white"
        onChange={(e) => dispatch(handleSearch(e))}
        value={inputValue}
      />
      <Link href={`/search/${inputValue}`}>
        <Button
          size="sm"
          color={"white"}
          className="!absolute right-1 top-1 rounded"
          onClick={handleClick}
        >
          Search
        </Button>
      </Link>
    </div>
  );
};

export default HeaderSearch;
