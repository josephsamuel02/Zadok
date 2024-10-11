import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";
import { db } from "../../DB/firebase";
import { collection, getDocs } from "firebase/firestore";

import { toast, ToastContainer } from "react-toastify";
const ProductsCard = () => {
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

  // const data = [
  //   {
  //     name: "UI/UX Review Check",
  //     imagelink: ["/image/bg2.png", "/image/bg1.png", "/image/bg3.png"],
  //     details:
  //       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  //     features: ["long range drive", "Double Silencer", "Good Ventilation"],
  //     quality: "New",
  //     price: 200000000,
  //     company: " FOTON",
  //   },
  //   {
  //     name: "UI/UX Review Check",
  //     imagelink: ["/image/bgd2.png", "/image/bgd1.png", "/image/bg3.png"],
  //     details:
  //       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  //     features: ["long range drive", "Double Silencer", "Good Ventilation"],
  //     quality: "New",
  //     price: 200000000,
  //     company: " FOTON",
  //   },
  //   {
  //     name: "UI/UX Review Check",
  //     imagelink: ["/image/bgd2.png", "/image/bg1.png", "/image/bg3.png"],
  //     details:
  //       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  //     features: ["long range drive", "Double Silencer", "Good Ventilation"],
  //     quality: "New",
  //     price: 200000000,
  //     company: " FOTON",
  //   },
  //   {
  //     name: "UI/UX Review Check",
  //     imagelink: ["/image/bgd3.png", "/image/bgd1.png", "/image/bg2.png"],
  //     details:
  //       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  //     features: ["long range drive", "Double Silencer", "Good Ventilation"],
  //     quality: "New",
  //     price: 200000000,
  //     company: " FOTON",
  //   },
  //   {
  //     name: "UI/UX Review Check",
  //     imagelink: ["/image/bg2.png", "/image/bg1.png", "/image/bg2.png"],
  //     details:
  //       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  //     features: ["long range drive", "Double Silencer", "Good Ventilation"],
  //     quality: "New",
  //     price: 200000000,
  //     company: " FOTON",
  //   },
  //   {
  //     name: "UI/UX Review Check",
  //     imagelink: ["/image/bg2.png", "/image/bg1.png", "/image/bg2.png"],
  //     details:
  //       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  //     features: ["long range drive", "Double Silencer", "Good Ventilation"],
  //     quality: "New",
  //     price: 200000000,
  //     company: " FOTON",
  //   },
  //   {
  //     name: "UI/UX Review Check",
  //     imagelink: ["/image/bg2.png", "/image/bg1.png", "/image/bg2.png"],
  //     details:
  //       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  //     features: ["long range drive", "Double Silencer", "Good Ventilation"],
  //     quality: "New",
  //     price: 200000000,
  //     company: " FOTON",
  //   },
  //   {
  //     name: "UI/UX Review Check",
  //     imagelink: ["/image/bg2.png", "/image/bg1.png", "/image/bg3.png"],
  //     details:
  //       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  //     features: ["long range drive", "Double Silencer", "Good Ventilation"],
  //     quality: "Fairly Used",
  //     price: "On Negotiation",
  //     company: " FOTON",
  //   },
  //   {
  //     name: "UI/UX Review Check",
  //     imagelink: ["/image/bg2.png", "/image/bg1.png", "/image/bg2.png"],
  //     details:
  //       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  //     features: ["long range drive", "Double Silencer", "Good Ventilation"],
  //     quality: "Nigerian Use",
  //     price: "On Negotiation",

  //     company: " FOTON",
  //   },
  //   {
  //     name: "UI/UX Review Check",
  //     imagelink: ["/image/bg2.png", "/image/bg1.png", "/image/bg2.png"],
  //     details:
  //       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  //     features: ["long range drive", "Double Silencer", "Good Ventilation"],
  //     quality: "Fairly Used",
  //     price: 200000000,
  //     company: " FOTON",
  //   },
  //   {
  //     name: "UI/UX Review Check",
  //     imagelink: ["/image/bg2.png", "/image/bg1.png", "/image/bg2.png"],
  //     details:
  //       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  //     features: ["long range drive", "Double Silencer", "Good Ventilation"],
  //     quality: "Nigerian Use",
  //     price: "On Negotiation",
  //     company: " FOTON",
  //   },
  //   {
  //     name: "UI/UX Review Check",
  //     imagelink: ["/image/bg2.png", "/image/bg1.png", "/image/bg2.png"],
  //     details:
  //       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
  //     features: ["long range drive", "Double Silencer", "Good Ventilation"],
  //     quality: "New",
  //     price: "On Negotiation",
  //     company: " FOTON",
  //   },
  // ];

  return (
    <>
      <h3 className="mb-12 mx-auto text-3xl md:text-5xl text-gray-1000   text-center">
        Available Properties
      </h3>
      <hr className="mx-8 md:mx-12 bg-[#de1102] h-1" />
      <div className="mx-auto px-6 w-full h-auto bg-white grid gap-3 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.map((i, n) => (
            <Card
              className="mx-auto mt-16 max-w-[23rem] md:max-w-[23rem] lg:max-w-[26rem] overflow-hidden rounded-md"
              key={n}
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img src={i.image[0]} alt="ui/ux review check" className="h-52" />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  {i.name}
                </Typography>
                <Typography
                  variant="lead"
                  color="gray"
                  className="mt-3  mx-1 h-32 text-base line-clamp-3   font-normal"
                >
                  {i.about_product}
                </Typography>
              </CardBody>

              <CardFooter className="pt-3">
                <Button
                  size="lg"
                  fullWidth={true}
                  className="bg-[#de1102] hover:bg-red-900"
                  onClick={() => {
                    setProductData(i);
                    setShowDetailCard(true);
                  }}
                >
                  View Full Detail
                </Button>
              </CardFooter>
            </Card>
          ))}
        {showDetailCard && (
          <div className="w-full h-full flex flex-col items-center fixed left-0 right-0 top-0 bottom-0 backdrop-brightness-75 bg-transparent overflow-y-scroll z-30 backdrop-blur-md">
            <h1
              className=" relative p-2 bg-[#fce1e1] top-8 right-0 text-2xl text-white font-bold rounded-full cursor-pointer"
              onClick={() => setShowDetailCard(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="4"
                stroke="gray"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </h1>
            <ProductDetail data={productData} />

            <h1
              className=" mx-auto my-5  p-2 bg-[#fce1e1]  text-2xl text-white font-bold rounded-full cursor-pointer"
              onClick={() => setShowDetailCard(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="4"
                stroke="gray"
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

export default ProductsCard;
