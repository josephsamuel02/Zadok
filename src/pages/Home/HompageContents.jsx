import { Card, CardBody, Typography } from "@material-tailwind/react";

import Collections from "./Collections";
const HomepageContents = () => {
  return (
    <>
      <div className="mx-auto mt-1 mb-28  w-full h-auto  bg-white flex flex-row item-center">
        <div className="mx-auto w-1/4 h-auto flex flex-col item-center">
          <img
            src="/image/quality-icon.svg"
            alt=""
            className=" mx-auto w-10 md:w-20 h-10 md:h-20"
          />
          <div className="w-auto bg-white mx-auto ">
            <p className=" text-sm md:text-md text-center text-[#e30202] ">Home of Quality</p>
          </div>
        </div>
        <div className="mx-auto w-1/4 h-auto flex flex-col item-center">
          <img
            src="/image/security-svgrepo-com.svg"
            alt=""
            className=" mx-auto w-10 md:w-20 h-10 md:h-20"
          />
          <div className="w-auto bg-white mx-auto ">
            <p className=" text-sm md:text-md text-center text-[#e30202] ">
              Property Security
            </p>
          </div>
        </div>
        <div className="mx-auto w-1/4 h-auto flex flex-col item-center">
          <img
            src="/image/cash-icon.svg"
            alt=""
            className=" mx-auto w-10 md:w-20 h-10 md:h-20"
          />
          <div className="w-auto bg-white mx-auto ">
            <p className=" text-sm md:text-md text-center text-[#e30202] ">
              Get Value for Your Money
            </p>
          </div>
        </div>
        <div className="mx-auto w-1/4 h-auto flex flex-col item-center">
          <img
            src="/image/satisfaction-icon.svg"
            alt=""
            className=" mx-auto w-10 md:w-20 h-10 md:h-20"
          />
          <div className="w-auto bg-white mx-auto ">
            <p className=" text-sm md:text-md text-center text-[#e30202] ">
              Customer Satisfaction
            </p>
          </div>
        </div>
      </div>

      <Card className="mx-auto mt-40 pt-10 mb-36  w-full border-2 border-t-gray-400  md:w-11/12 flex flex-col  md:flex-row items-center">
        <div className="m-0 w-full md:w-1/2 h-auto md:h-96 shrink-0 flex items-center  ">
          <img
            src="/image/ZADOK LOGO 2.png"
            alt="ZADOK LOGO Logo"
            className="m-auto w-[400px] h-auto "
          />
        </div>
        <CardBody>
          <Typography className="mb-6 text-3xl font-bold font-RacingSans text-center text-[#2c1d1d]  ">
            Zadok Global Investment Ltd is a Company powered by serial and innovative
            entrepreneurs.
          </Typography>
        </CardBody>
      </Card>
      <div className="mx-auto w-full px-20">
        <img
          src="/image/banner uu.png"
          alt="ZADOK banner"
          className="m-auto w-full h-auto rounded-lg"
        />
      </div>
      <Collections />
    </>
  );
};

export default HomepageContents;
