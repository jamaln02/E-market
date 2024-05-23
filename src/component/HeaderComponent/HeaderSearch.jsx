"use client";
import React from "react";
import { Button, Input } from "@material-tailwind/react";
const HeaderSearch = () => {
  return (
    <div className=" relative flex">
      <Input label="Username" color="white" />
      <Button
        size="sm"
        color={"white"}
        className="!absolute right-1 top-1 rounded"
      >
        Invite
      </Button>
    </div>
  );
};

export default HeaderSearch;
