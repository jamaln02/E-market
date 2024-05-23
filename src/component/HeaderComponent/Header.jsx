import { FaFacebook, FaInstagram, Navbar, Typography } from "@/clientExports";
import HeaderIcon from "./HeaderIcon";
import HeaderCollapse from "./HeaderCollapse";
import HeaderSearch from "./HeaderSearch";
import HeaderCart from "./HeaderCart";
import HeaderSideBar from "./HeaderSideBar";
import DarkLight from "./DarkLight";
import Link from "next/link";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4 text-wrap flex-wrap">
      <Typography variant="small" className="p-1 font-medium">
        <Link
          href="/category/smartphones"
          className="flex items-center hover:text-blue-500 transition-colors hover:underline underline-offset-2 "
        >
          Smartphones
        </Link>
      </Typography>
      <Typography variant="small" className="p-1 font-medium">
        <Link
          href="/category/Laptops"
          className="flex items-center hover:text-blue-500 transition-colors hover:underline underline-offset-2"
        >
          Laptops
        </Link>
      </Typography>
      <Typography variant="small" className="p-1 font-medium">
        <Link
          href="/category/Fragrances"
          className="flex items-center hover:text-blue-500 transition-colors hover:underline underline-offset-2"
        >
          Fragrances
        </Link>
      </Typography>
      <Typography variant="small" className="p-1 font-medium">
        <Link
          href="/category/Skincare"
          className="flex items-center hover:text-blue-500 transition-colors hover:underline underline-offset-2"
        >
          Skincare
        </Link>
      </Typography>
      <Typography variant="small" className="p-1 font-medium">
        <Link
          href="/category/Groceries"
          className="flex items-center hover:text-blue-500 transition-colors hover:underline underline-offset-2"
        >
          Groceries
        </Link>
      </Typography>
      <Typography variant="small" className="p-1 font-medium">
        <Link
          href="/category/Home-decoration"
          className="flex items-center hover:text-blue-500 transition-colors hover:underline underline-offset-2"
        >
          Home-decoration
        </Link>
      </Typography>
      <Typography variant="small" className="p-1 font-medium">
        <Link
          href="/category/Furniture"
          className="flex items-center hover:text-blue-500 transition-colors hover:underline underline-offset-2"
        >
          Furniture
        </Link>
      </Typography>
      <Typography variant="small" className="p-1 font-medium">
        <Link
          href="/category/Tops"
          className="flex items-center hover:text-blue-500 transition-colors hover:underline underline-offset-2"
        >
          Tops
        </Link>
      </Typography>
      <div className="hidden lg:block">
        <DarkLight />
      </div>
    </ul>
  );
}

function TopHeader() {
  return (
    <div>
      <div className="px-2 flex flex-col md:flex-row justify-evenly lg:justify-between lg:items-center items-start ">
        <div className="w-3/4 lg:w-1/6 flex justify-start lg:justify-evenly gap-1 items-center">
          <h1>Follow us on</h1>
          <FaFacebook className="text-xl hover:text-blue-500 transition-colors hover:underline underline-offset-2 cursor-pointer" />
          <FaInstagram className="text-xl hover:text-red-700 transition-colors hover:underline underline-offset-2 cursor-pointer" />
        </div>
        <div className="w-3/4 lg:w-1/4 flex justify-start md:justify-end lg:justify-evenly gap-1 cursor-pointer">
          <h1 className="hover:text-blue-500 transition-colors hover:underline underline-offset-2">
            Support
          </h1>
          |
          <h1 className="hover:text-blue-500 transition-colors hover:underline underline-offset-2">
            Register
          </h1>
          |
          <h1 className="hover:text-blue-500 transition-colors hover:underline underline-offset-2">
            Log in
          </h1>
        </div>
      </div>

      <hr className="w-full" />
    </div>
  );
}

const Header = () => {
  return (
    <Navbar className="w-full !max-w-full py-2 px-6 rounded-none bg-main border-0 ">
      <div className="hidden lg:block">
        <TopHeader />
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex gap-2 items-center ">
          <HeaderSideBar />
          <Typography className="mr-4 cursor-pointer text-xl md:text-3xl lg:text-5xl font-bold hover:text-blue-500 transition-colors ">
            Eco Market
          </Typography>
        </div>

        <div className="hidden lg:block w-4/6 mt-2">
          <HeaderSearch />
          <NavList />
        </div>
        <div className="hidden lg:block">
          <HeaderCart />
        </div>
        <div className="flex items-center lg:hidden">
          <DarkLight />
          <HeaderIcon />
        </div>
      </div>
      <HeaderCollapse>
        <TopHeader />
        <HeaderSearch />
        <NavList />
        <HeaderCart />
      </HeaderCollapse>
    </Navbar>
  );
};

export default Header;
