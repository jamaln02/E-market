import React from "react";
import { BsCart4 } from "react-icons/bs";
const HeaderCart = () => {
  return (
    <div>
      <div className="leading-[0px] mb-5">
        <span className="badge " id="lblCartCount">
          {" "}
          5{" "}
        </span>
        <i className="text-4xl leading-[0px]  p-0 m-0 text-white hover:text-blue-500 cursor-pointer">
          <BsCart4 />
        </i>
      </div>
    </div>
  );
};

export default HeaderCart;
