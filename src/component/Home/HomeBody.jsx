import React from "react";
import ProductsCard from "./ProductsCard";

const HomeBody = () => {
  return (
    <div className="mt-14 p-5 text-gray-500 dark:text-gray-600">
      <div className=" bg-gray-300 dark:bg-gray-400 shadow-2xl border-s-8 border-main">
        <h1 className="text-lg md:text-xl lg:text-2xl p-2 font-bold">
          SEE OUR PRODUCTS
        </h1>
      </div>
      <ProductsCard />
    </div>
  );
};

export default HomeBody;
