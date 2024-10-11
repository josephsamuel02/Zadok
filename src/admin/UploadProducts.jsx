import "react-toastify/dist/ReactToastify.css";
import AdminNav from "./AdminNav";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../DB/firebase";
import { v4 as uuid } from "uuid";
import SuccessCard from "../components/SuccessCard";
import PUBLICROUTES from "../utils/PublicRoutes";
import { Spinner, Button } from "@material-tailwind/react";

const UploadProducts = () => {
  const [showCard, setShowCard] = useState(false);
  const [image, setImage] = useState([]);
  const [ProductImage, setProductImage] = useState([]);

  const [loading, setLoading] = useState(false);
  const [readyToUpload, setReadyToUpload] = useState(false);

  const [productDetail, setProductDetail] = useState({
    image: "",
    name: "",
    about_product: "",
    company: "",
  });

  var img = [];
  var imgUrl = [];

  const handleImageSelect = (e) => {
    const files = e.target.files;

    if (files.length > 4) {
      toast.warning("You cannot upload more than 4 images for a product");
    } else {
      for (let i = 0; i < files.length; i++) {
        img.push(files[i]);
        imgUrl.push(URL.createObjectURL(files[i]));
        setImage((prev) => [...prev, files[i]]);
        setProductImage((prev) => [...prev, URL.createObjectURL(files[i])]);
      }
      // setImage(img);
      // setProductImage(imgUrl);
      console.log(files[0].name);
      // console.log(ProductImage);
    }
  };

  const handleUpload = async () => {
    setLoading(true);

    console.log(image);
    console.log(productDetail);

    try {
      const file = image;
      let returnURL = [];
      for (let i = 0; i < file.length; i++) {
        const imageRef = ref(storage, `/product_image/${image[i].name + uuid()} `);
        const snapshot = await uploadBytes(imageRef, file[i]);
        const url = await getDownloadURL(snapshot.ref);
        returnURL.push(url);
        console.log(url);
      }
      console.log(returnURL);
      setProductDetail((prev) => ({ ...prev, image: returnURL }));
      setReadyToUpload(true);
      console.log(productDetail);
    } catch (error) {
      toast.error("Error: Failed to upload");
    }
  };

  const uploadData = async () => {
    console.log(productDetail);
    try {
      const docRef = await addDoc(collection(db, "products"), productDetail);
      if (docRef) {
        toast.success("Product uploaded successfully");
        setShowCard(true);
      }

      if (!docRef) {
        toast.error("Unable to upload");
      }
    } catch (error) {
      toast.error("Error: Failed to upload");
    }
  };

  return (
    <div className="w-full h-auto bg-white">
      <AdminNav />
      <div className=" mx-4 w-full h-full mt-20 flex flex-col md:flex-row   justify-center ">
        <form
          onSubmit={(e) => {
            uploadData();
            e.preventDefault();
          }}
          className="mx-auto my-3 py-5 px-4 md:px-5 mb-16 h-full w-full md:w-3/6 flex flex-col rounded shadow-lg"
        >
          <h1 className="mt-8 mb-12 mx-auto text-3xl text-red-600 uppercase ">
            Upload Property
          </h1>
          <h1 className="text-slate-900 font-Roboto ">Upload Product Images</h1>
          <input
            type="file"
            required
            multiple={true}
            accept="image/*"
            className="bg-white my-4 p-3 border  border-slate-400 rounded-md focus:border-slate-400"
            onChange={(e) => handleImageSelect(e)}
          />
          <input
            type="text"
            required
            placeholder="Name"
            maxLength={90}
            onChange={(e) => {
              setProductDetail((prev) => ({ ...prev, name: e.target.value }));
            }}
            className=" w-full my-3  h-auto py-2 px-4 text-lg text-slate-800 rounded-md outline-none border  border-slate-400 focus:border-slate-700"
          />
          <textarea
            rows={4}
            cols={200}
            maxLength={500}
            required
            disabled={false}
            draggable={false}
            placeholder="Details"
            onChange={(e) =>
              setProductDetail((prev) => ({ ...prev, about_product: e.target.value }))
            }
            className=" w-full my-3  h-auto py-2 px-4 text-lg text-slate-800 rounded-md outline-none border border-slate-400 focus:border-slate-700"
          ></textarea>
          <input
            type="text"
            required
            placeholder="Maker"
            maxLength={50}
            onChange={(e) =>
              setProductDetail((prev) => ({ ...prev, company: e.target.value }))
            }
            className=" w-full my-3  h-auto py-2 px-4 text-lg text-slate-800 rounded-md outline-none border  border-slate-400 focus:border-slate-700"
          />

          {!loading ? (
            <Button
              className="w-full mx-auto md:mx-auto mt-8 py-3 px-16 text-white text-2xl rounded-md bg-red-600 hover:bg-red-600 bg-gradient-to-r from-red-600 hover:from-black transition-colors uppercase"
              onClick={() => {
                handleUpload();
              }}
            >
              Submit
            </Button>
          ) : (
            !readyToUpload && (
              <Button className="w-full flex flex-row mx-auto md:mx-auto mt-8 py-3 px-16 text-red-600 text-center text-sm rounded-md bg-white border-2 border-red-600 items-center ">
                <span className="mx-auto flex flex-row">
                  <Spinner className="mr-2 text-lg" /> Loading.. please wait
                </span>
              </Button>
            )
          )}

          {readyToUpload && (
            <Button
              type="submit"
              className="w-full flex flex-row mx-auto md:mx-auto mt-8 py-3 px-16 text-white text-center text-xl rounded-md bg-red-600 hover:bg-red-800 items-center "
            >
              <span className="mx-auto flex flex-row">Upload</span>
            </Button>
          )}
        </form>

        <div className="mx-auto py-5 pt-0 md:pt-16 px-2 md:px-4 w-11/12 md:w-4/6 h-full">
          <div className="w-full h-auto mx-auto   flex flex-col ">
            <div className="w-full mx-auto h-auto grid grid-flow-row grid-cols-3 gap-2">
              {ProductImage &&
                ProductImage.map((i, n) => (
                  <img src={i} alt={n} className="mx-auto w-auto h-52 object-cover" key={n} />
                ))}
            </div>
            <div className="w-full mx-5 md:mx-auto md:ml-16 mt-10 md:mt-0 h-auto flex flex-col ">
              <h2 className="text-xl md:text-4xl py-1 md:py-8 text-red-600 font-bold  break-words uppercase">
                {productDetail.name}
              </h2>
              <h2 className="text-xl md:text-xl py-4 md:py-1  text-red-600 font-bold  break-words">
                Quality:
                <span className=" text-md md:text-lg pl-2 text-gray-800 font-thin font-Roboto">
                  Brand New
                </span>
              </h2>
              <h2 className=" text-xl py-1 md:py-4 text-gray-800  break-words">
                Price:
                <span className="pl-2 text-slate-600 text-xl   font-normal  ">
                  Upon Request
                </span>
              </h2>
            </div>
          </div>

          <div className="w-full md:w-full mx-auto  md:my-4 h-auto flex flex-col-reverse md:flex-row ">
            <div className="md:mx-auto w-full md:w-2/5 h-auto p-2 border-2 border-slate-300 rounded-md">
              <h3 className="text-md text-red-600 font-bold text-center ">Company</h3>
              <h3 className="text-md py-1 text-slate-900 font-bold text-center border-b-2 border-slate-300 ">
                {productDetail.company}
              </h3>
            </div>

            <div className="mx-auto p-6 w-full md:w-10/12 h-auto bg-white rounded-md">
              <h3 className="text-xl py-3 text-red-600 font-bold">Details</h3>
              <p className="text-md md:text-lg text-slate-900 font-nunito">
                {productDetail.about_product}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {showCard && <SuccessCard returnURL={PUBLICROUTES.UPLOAD_PRODUCT} />}
    </div>
  );
};

export default UploadProducts;
