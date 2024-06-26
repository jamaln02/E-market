"use client";
import { getAllProducts } from "@/src/ReduxSystem/ReduxSlices/productsSlice";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import LoaderPage from "@/src/component/LoaderPage";
import Image from "next/image";
const Page = () => {
  const { categoryname } = useParams();
  const { productsData, productsLoading } = useSelector(
    (state) => state.allProducts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(`/category/${categoryname}`));
  }, [categoryname]);

  return (
    <div>
      {productsLoading ? (
        <LoaderPage />
      ) : (
        <div className="mt-6 md:mt-16 p-5 mx-2 text-gray-500 dark:text-gray-600">
          <div className=" bg-gray-300 dark:bg-gray-400 shadow-2xl border-s-8 border-main">
            <h1 className="text-lg md:text-xl lg:text-2xl p-2 font-bold">
              SEE OUR <span className="capitalize">{categoryname}</span>
            </h1>
          </div>
          <div className="flex justify-evenly flex-wrap gap-4">
            {productsData?.products?.map((ele, ind) => (
              <div key={ind}>
                <Card className="w-[100%] rounded-none mt-10 dark:bg-gray-700 border-b border-s  ">
                  <div className="absolute  top-[30px] left-[-1px] w-2/5 h-12 bg-main  text-white z-10 text-center content-center font-bold">
                    {ele?.category}
                  </div>
                  <CardHeader
                    floated={false}
                    className="h-80 rounded-none shadow-2xl relative mx-0 mt-0 border-none  "
                  >
                    <Image
                      src={ele?.thumbnail}
                      alt="card-image"
                      className="h-full w-full object-cover "
                      width={300}
                      height={300}
                    />
                  </CardHeader>
                  <CardBody>
                    <div className="mb-2  text-center">
                      <Typography
                        color="blue-gray"
                        className="font-bold mb-2 dark:text-gray-200"
                      >
                        Brand : {ele?.brand}
                      </Typography>
                      <hr className="border my-4 dark:border-gray-500" />
                      <Typography
                        color="blue-gray"
                        className="font-medium dark:text-gray-400"
                      >
                        {ele?.title}
                      </Typography>
                    </div>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal opacity-75 text-center "
                    >
                      <span className="line-through dark:text-gray-300">
                        EGP {ele?.price}
                      </span>{" "}
                      <span className='font-bold text-lg text-gray-900 dark:text-white mx-2 after:absolute after:contents-[" "] after:bottom-[90px] after:left-[42%] after:w-16 after:h-[1.5px] after:bg-blue-500'>
                        EGP{" "}
                        {(
                          ele?.price -
                          (ele?.price * ele?.discountPercentage) / 100
                        ).toFixed(2)}{" "}
                      </span>{" "}
                      <span className="text-blue-500 font-semibold">
                        (% Off)
                      </span>
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-1">
                    <Link href={`/products/${ele.id}`}>
                      {" "}
                      <Button
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 dark:bg-gray-500 dark:text-gray-300 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                      >
                        SHOW DETAILS
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
