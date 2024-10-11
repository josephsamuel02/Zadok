/* eslint-disable no-unused-vars */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import StockDetails from "./StockDetails";
import _ from "lodash";
import { useState, useEffect } from "react";

import AdminNav from "./AdminNav";
import { db } from "../DB/firebase";
import { collection, getDocs } from "firebase/firestore";

import { toast, ToastContainer } from "react-toastify";
const AdminProducts = () => {
  const [showDetailCard, setShowDetailCard] = useState(false);
  const [productData, setProductData] = useState();
  const [data, setData] = useState();

  const getData = async () => {
    await getDocs(collection(db, "products"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        setData(newData);
        // console.log(newData);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        toast.error("unable to get products");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AdminNav />
      <div className="w-full h-auto bg-white">
        <h3 className="mb-2 mt-20 mx-auto text-2xl md:text-5xl text-gray-1000   text-center uppercase">
          Properties
        </h3>
        <hr className="mx-8 md:mx-12 bg-[#de1102] h-1" />
        <div className="  w-full px-3 h-auto my-16 bg-white grid gap-4 grid-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.map((i, n) => (
              <Card className=" mx-auto mt-16 w-auto " key={n}>
                <CardHeader className="relative h-50 rounded-md">
                  <img
                    src={i.image[0]}
                    alt="card-image"
                    className="object-cover object-center h-52 w-full"
                  />
                </CardHeader>

                <CardBody className="h-36">
                  <Typography variant="h5" color="blue-gray" className="mb-2 line-clamp-1">
                    {i.name}
                  </Typography>
                  <Typography className=" h-32 text-base line-clamp-3">
                    {i.about_product}
                  </Typography>
                </CardBody>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className=" px-4 font-medium pt-10 pb-4"
                >
                  <span className=" py-3 text-sm font-roboto flex flex-row-reverse">
                    Upon Request
                    <span className=" px-2 font-bold text-sm font-roboto flex flex-row-reverse">
                      Price:
                    </span>
                  </span>
                </Typography>

                <CardFooter className="pt-0">
                  <Button
                    className="bg-[#de1102] hover:bg-[#d11002]"
                    onClick={() => {
                      setProductData(i);
                      setShowDetailCard(true);
                    }}
                  >
                    More Detail
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
        {showDetailCard && (
          <div className="w-full h-full flex flex-col items-center fixed left-0 right-0 top-0 bottom-0 backdrop-brightness-75 bg-transparent overflow-y-scroll z-30 backdrop-blur-md">
            <h1
              className=" relative p-2 bg-[#de1102] top-8 right-0 text-2xl text-white font-bold rounded-full cursor-pointer"
              onClick={() => setShowDetailCard(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="4"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </h1>
            <StockDetails data={productData} />

            <h1
              className=" mx-auto my-5  p-2 bg-[#de1102]  text-2xl text-white font-bold rounded-full cursor-pointer"
              onClick={() => setShowDetailCard(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="4"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </h1>
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default AdminProducts;
