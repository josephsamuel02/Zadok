import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import PUBLICROUTES from "../utils/PublicRoutes";
import { toast } from "react-toastify";

const AdminNav = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const token = localStorage.getItem("DM_AUTO_ADMIN");
  const Navigate = useNavigate();
  const adminToken = localStorage.getItem("dm_admin_token");

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
  useEffect(() => {
    if (!adminToken) {
      Navigate(PUBLICROUTES.ADMIN_LOGIN);
    }
  }, []);
  const navList = (
    <ul className="  mt-6 mb-4 md:py-6 flex flex-row lg:mb-0 lg:mt-0 items-center gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex mx-auto items-center gap-x-2 p-1 font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
          />
        </svg>

        <a
          href={PUBLICROUTES.ALL_PRODUCTS}
          className="flex items-center uppercase text-xs md:text-sm"
        >
          Products
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex mx-auto items-center gap-x-2 p-1 font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
          />
        </svg>

        <a
          href={PUBLICROUTES.REQUESTS}
          className="flex items-center uppercase text-xs md:text-sm"
        >
          Requests
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex mx-auto items-center gap-x-2 p-1 font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
          />
        </svg>

        <a
          href={PUBLICROUTES.UPLOAD_PRODUCT}
          className="flex items-center uppercase text-xs md:text-sm"
        >
          Upload Cars
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex mx-auto items-center gap-x-2 p-1 font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
          />
        </svg>

        <a
          href={PUBLICROUTES.UPLOAD_IMAGES}
          className="flex items-center uppercase text-xs md:text-sm"
        >
          Upload Image
        </a>
      </Typography>
    </ul>
  );

  useEffect(() => {
    if (token) {
      toast.warn("Please Login to Admin Dashboard");
      setTimeout(() => {
        Navigate(PUBLICROUTES.ADMIN_LOGIN);
      }, 10000);
    }
  }, []);

  return (
    <Navbar className=" fixed top-0 mx-auto w-screen px-4 lg:px-8  rounded-none z-20">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
        <a href={PUBLICROUTES.ADMIN}>
          <img src="/image/ZADOK LOGO 2.png" alt="logo" className="w-28 h-auto " />
        </a>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="red"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="red"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
};

export default AdminNav;
