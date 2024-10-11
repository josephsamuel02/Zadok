/* eslint-disable no-unused-vars */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { db } from "../../DB/firebase";
import { collection, getDocs } from "firebase/firestore";

import { toast, ToastContainer } from "react-toastify";
const Collections = () => {
  const [showDetailCard, setShowDetailCard] = useState(false);
  const [productData, setProductData] = useState();

  const [data, setData] = useState();

  const getData = async () => {
    await getDocs(collection(db, "products"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        setData(newData);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        toast.error("unable to get products");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const Examples = [
    {
      image: "/image/house 1.jpg",
      name: "Property Name",
      about_product:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      image: "/image/house 2.jpg",
      name: "Property Name",
      about_product:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      image: "/image/house3.jpg",
      name: "Property Name",
      about_product:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <>
      <h3 className="mb-12 mx-auto text-3xl md:text-5xl text-gray-1000   text-center">
        {/* Find Your Next Ride */}
      </h3>
      <hr className="mx-8 md:mx-12 bg-[#de1102] h-1" />
      <div className="  w-full px-3 h-auto my-16 bg-white grid gap-4 grid-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* {data &&
          data.slice(0, 9).map((i, n) => (
            <Card className=" mx-auto mt-16 w-auto " key={n}>
              <CardHeader className="relative h-44 rounded-md">
                <img
                  src={i.image[0]}
                  alt="card-image"
                  className="object-cover object-center h-full w-full"
                />
              </CardHeader>
              <CardBody className="h-36 my-3 bg-white">
                <Typography variant="h5" color="blue-gray" className="mb-2 line-clamp-1">
                  {i.name}
                </Typography>
                <Typography className="line-clamp-1 text-md h-32 overflow-y-hide">
                  {i.about_product}
                </Typography>
              </CardBody>
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
          ))} */}

        {Examples &&
          Examples.map((i, n) => (
            <Card className=" mx-auto mt-16 w-auto " key={n}>
              <CardHeader className="relative h-44 rounded-md">
                <img
                  src={i.image}
                  alt="card-image"
                  className="object-cover object-center h-full w-full"
                />
              </CardHeader>
              <CardBody className="h-36 my-3 bg-white">
                <Typography variant="h5" color="blue-gray" className="mb-2 line-clamp-1">
                  {i.name}
                </Typography>
                <Typography className="line-clamp-1 text-md h-32 overflow-y-hide">
                  {i.about_product}
                </Typography>
              </CardBody>
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
      <a
      // href={PUBLICROUTES.GARAGE}
      >
        <Button
          fullWidth
          className="mx-auto my-6 py-4 w-10/12 md:w-96 text-lg md:text-lg text-white bg-[#de1102] hover:bg-[#d11002]"
        >
          Check Out Our collection
        </Button>
      </a>
      <h3 className="mt-36 mb-12 mx-auto text-2xl md:text-4xl text-gray-1000   text-center uppercase">
        Our Merch
      </h3>
      <hr className="mx-8 md:mx-12 bg-[#de1102] h-1" />

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
          {/* <ProductDetail data={productData} /> */}

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
    </>
  );
};

export default Collections;
