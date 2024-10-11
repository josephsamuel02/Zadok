/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Carousel,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../DB/firebase";
import SuccessCard from "../components/SuccessCard";
import _ from "lodash";
import PUBLICROUTES from "../utils/PublicRoutes";
const StockDetails = (productData) => {
  const { data } = productData;
  const [showCard, setShowCard] = useState(false);

  const deleteItem = async () => {
    const docRef = doc(db, "products", data.id);

    try {
      await deleteDoc(docRef);
      console.log("Document successfully deleted!");
      toast.success("Successfully deleted!");
      setShowCard(true);
    } catch (error) {
      console.error("Error removing document: ", error);
      toast.error("Unable to delete item");
    }
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <>
      <Card className="w-11/12 md:w-3/5 mt-10 shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <Carousel
            className="rounded-md"
            autoplay={true}
            transition={{ duration: 2, interval: 6000 }}
          >
            {data &&
              data.image.map((item, n) => (
                <div className=" relative h-full w-full" key={n}>
                  <img src={item} alt="image 1" className="h-full w-full object-cover" />
                </div>
              ))}
          </Carousel>
        </CardHeader>
        <CardBody>
          <Typography className="flex items-center flex-row-reverse text-brown-500 gap-1.5 font-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            Brand New
          </Typography>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-large">
              {data.name}
            </Typography>
          </div>

          <Typography color="gray">{data.about_product}</Typography>

          <Typography variant="h6" color="blue-gray" className="font-medium pt-4 pb-1">
            <span className="font-bold font-roboto">Maker: </span> {data.company}
          </Typography>
          <Typography variant="h6" color="blue-gray" className="font-medium text-lg pt-4 pb-1">
            <span className="font-bold font-roboto"> Price: </span>
            Upon Request
          </Typography>
        </CardBody>
        <CardFooter className="pt-3 w-full grid grid-flow-row grid-cols-2 ">
          <a href={`${PUBLICROUTES.EDIT_PRODUCT}/${data.id}`}>
            <Button size="lg" fullWidth={true} className="  bg-[#c70606] hover:bg-[#d11002]">
              Edit Details
            </Button>
          </a>
          <a href={() => console.log("Delete")}>
            <Button
              size="lg"
              fullWidth={true}
              onClick={() => deleteItem()}
              className=" relative mx-6 md:mx-20 w-26 md:w-40 text-[#c70606] hover:text-white bg-[#ffffff] hover:bg-red-300 border border-red-600"
            >
              Delete
            </Button>
          </a>
        </CardFooter>
        {showCard && <SuccessCard returnURL={PUBLICROUTES.ALL_PRODUCTS} />}
      </Card>
      <ToastContainer />
    </>
  );
};

export default StockDetails;
