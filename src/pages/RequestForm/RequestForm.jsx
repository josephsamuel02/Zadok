/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Carousel,
  Textarea,
} from "@material-tailwind/react";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { doc, getDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../../DB/firebase";
import _ from "lodash";
import SuccessCard from "../../components/SuccessCard";
import Nav from "../../components/Nav";
const RequestForm = () => {
  const { id } = useParams();
  const [showCard, setShowCard] = useState(false);
  const [data, setData] = useState(false);
  const [requestDetail, setRequestDetail] = useState({ product_id: id });

  const sendRequest = async () => {
    console.log("Request Detail:", requestDetail);
    try {
      const docRef = await addDoc(collection(db, "requests"), {
        ...requestDetail,
        image: data.image,
      });
      console.log("Document Reference:", docRef);
      if (docRef) {
        toast.success("Request sent successfully");
        setShowCard(true);
      } else {
        toast.error("Unable to upload");
      }
    } catch (error) {
      toast.error(`Error: Failed to upload (${error.message})`);
      console.error("Error adding document:", error);
    }
  };
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          setData(docSnapshot.data());
        } else {
          toast.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchProduct();
  }, [id]);
  return (
    <>
      <Nav />
      <div className="w-full px-2 h-full flex-col">
        <div className=" md:mx-auto mt-24 py-5 w-full md:w-10/12 h-10/12 bg-white flex flex-col md:flex-row items-center border-2 shadow-lg border-gray-300 rounded-md">
          <div className="w-full md:w-1/2 h-auto mx-auto flex flex-col">
            <Card className="w-full mt-10 shadow-none ">
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
                <Typography variant="h6" color="blue-gray" className="font-medium pt-4 pb-1">
                  <span className="font-bold font-roboto"> Price: </span>
                  Upon Request
                </Typography>
              </CardBody>
            </Card>
          </div>

          <div className="w-full mt-20 md:mt-0 md:w-1/2 h-auto mx-auto flex flex-col">
            <div className="mx-auto flex flex-col items-center text-gray-700 bg-transparent shadow-none rounded-xl  ">
              <h4 className=" flex font-sans text-2xl   font-semibold leading-snug   text-[#e30202]">
                DM AUTOS REQUEST FORM
              </h4>
              <p className=" mx-10 flex text-clip my-2 font-sans text-lg text-center font-normal text-gray-800">
                Nice to meet you! Enter your details to and we will contact you immediately.
              </p>
              <form
                className="mx-auto px-10 w-full flex flex-col mb-2 "
                onSubmit={(e) => {
                  e.preventDefault();
                  sendRequest();
                }}
              >
                <div className="flex flex-col gap-6 mb-1">
                  <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Your Name
                  </h6>
                  <div className="  h-11 w-full min-w-[200px]">
                    <input
                      type="text"
                      required
                      placeholder="name"
                      onChange={(e) =>
                        setRequestDetail((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                  <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Your Email
                  </h6>
                  <div className="  h-11 w-full min-w-[200px]">
                    <input
                      type="email"
                      required
                      placeholder="email"
                      onChange={(e) =>
                        setRequestDetail((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>

                  <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Phone line
                  </h6>

                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      type="tel"
                      required
                      placeholder="phone.."
                      onChange={(e) =>
                        setRequestDetail((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>

                  <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Alternative phone line (optional)
                  </h6>
                  <div className="  h-11 w-full min-w-[200px]">
                    <input
                      type="tel"
                      placeholder="phone.."
                      onChange={(e) =>
                        setRequestDetail((prev) => ({ ...prev, alt_phones: e.target.value }))
                      }
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>

                  <Textarea
                    required
                    type="text"
                    variant="outlined"
                    label="Message"
                    placeholder="message."
                    onChange={(e) =>
                      setRequestDetail((prev) => ({ ...prev, message: e.target.value }))
                    }
                  />
                </div>
                <button
                  className="mt-6 py-2 block w-full select-none rounded-lg  bg-[#e30202]   px-6 text-center align-middle font-sans text-lg font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  onClick={() => setShowCard(true)}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
        {showCard && <SuccessCard returnURL={"/garage"} />}
      </div>
    </>
  );
};

export default RequestForm;
