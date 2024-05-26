"use client";

import React from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import {
  cartDelet,
  cartEmpty,
  decrement,
  increment,
} from "@/src/ReduxSystem/ReduxSlices/productsSlice";
import { MdDelete } from "react-icons/md";
import emptyImage from "@/public/emptyminicart.png";

import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

const TABLE_HEAD = [
  "S.N",
  "Product",
  "Unit Price",
  "Quantity",
  "Total Price",
  "Actions",
];

const Page = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.allProducts);
  console.log(cart);
  let total = 0;
  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center">
      {cart.length > 0 ? (
        <div className=" h-full w-full  ">
          <div className="flex justify-center">
            <h1 className="lg:hidden text-lg font-bold text-main border-x-2 border-main px-4  my-4 text-center ">
              The Table is Overflow
            </h1>
          </div>
          <Card className="overflow-scroll md:overscroll-none overflow-y-hidden">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-bgcart p-4"
                    >
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-bold leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cart?.map((ele, index) => {
                  const isLast = index === cart.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {index + 1}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {ele?.title}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {`EGP ${(
                            ele?.price -
                            (ele?.price * ele?.discountPercentage) / 100
                          ).toFixed(2)}`}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          <div className="flex items-center text-gray-900 rounded-md  p-0.5">
                            {" "}
                            <Button
                              className="bg-bgcart text-lg  px-3 py-0.5 font-bold    rounded-md "
                              onClick={() => dispatch(decrement(ele))}
                              disabled={ele.item <= 1}
                            >
                              -
                            </Button>
                            <p className="bg-white px-3 py-0.5 font-bold border border-gray-600  rounded-md mx-0.5">
                              {ele.item}
                            </p>
                            <Button
                              className="bg-bgcart text-lg  px-3 py-0.5 font-bold   rounded-md"
                              onClick={() => dispatch(increment(ele))}
                            >
                              +
                            </Button>
                          </div>
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {`EGP ${
                            (
                              ele?.price -
                              (ele?.price * ele?.discountPercentage) / 100
                            ).toFixed(2) * ele.item
                          }`}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          <Button
                            className="text-main font-bold"
                            variant="text"
                            onClick={() => dispatch(cartDelet(ele))}
                          >
                            Delet
                          </Button>
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
          <div className="flex flex-col w-full p-2 bg-white mt-5 rounded-md">
            <div className="flex md:flex-row flex-col justify-between p-2 items-center">
              <div>
                <Button
                  variant="outlined"
                  className="border-main text-main flex justify-evenly gap-2 items-center text-base"
                  onClick={() => dispatch(cartEmpty())}
                >
                  <span className="text-xl ">
                    <MdDelete />
                  </span>
                  <span>Clear Cart</span>
                </Button>
              </div>
              <div className="flex items-center gap-2 my-3">
                <p className="text-base dark:text-gray-200">
                  Total ({cart?.length}) Items :{" "}
                </p>
                <span className="text-main font-bold text-xl">
                  EGP{" "}
                  {
                    (total = cart
                      ?.map(
                        (ele) =>
                          (ele?.price -
                            (ele?.price * ele?.discountPercentage) / 100) *
                          ele?.item
                      )
                      ?.reduce((one, tow) => one + tow)
                      ?.toFixed(2))
                  }
                </span>
              </div>
            </div>
            <div className=" flex justify-center md:justify-end p-2">
              <Button variant="filled" className="bg-main text-white ">
                Check Out
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 p-10">
          <Image
            src={emptyImage}
            alt="empty cart"
            width={200}
            priority={true}
          />
          <p className="my-4 text-gray-700 text-center">
            Your shopping cart is empty
          </p>
          <Link href={"/"}>
            {" "}
            <Button className="bg-main">Go Shopping Now</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Page;
