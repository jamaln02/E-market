"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/src/ReduxSystem/ReduxSlices/productsSlice";
const ProductsCard = () => {
  const { productsData } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  console.log(productsData);
  return (
    <Card className="w-80 rounded-none mt-10 dark:bg-gray-700">
      <div className="absolute  top-[30px] left-[-1px] w-2/5 h-[40px] bg-main  text-white z-10 text-center content-center font-bold">
        Smartphones
      </div>
      <CardHeader
        floated={false}
        className="h-80 rounded-none shadow-2xl relative mx-0 mt-0"
      >
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-full w-full object-cover "
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2  text-center ">
          <Typography
            color="blue-gray"
            className="font-bold mb-2 dark:text-gray-200"
          >
            Brand : Apple
          </Typography>
          <hr className="border my-4 dark:border-gray-500" />
          <Typography
            color="blue-gray"
            className="font-medium dark:text-gray-200"
          >
            iphone 9
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 text-center "
        >
          <span className="line-through dark:text-gray-300">EGP 549</span>{" "}
          <span className='font-bold text-lg text-gray-900 dark:text-white mx-2 after:absolute after:contents-[" "] after:bottom-[90px] after:left-[42%] after:w-16 after:h-[1.5px] after:bg-main'>
            EGP 477.85{" "}
          </span>{" "}
          <span className="text-main font-semibold">(% Off)</span>
        </Typography>
      </CardBody>
      <CardFooter className="pt-1">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 dark:bg-gray-500 dark:text-gray-300 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          SHOW DETAILS
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
