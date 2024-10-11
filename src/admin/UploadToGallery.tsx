import "react-toastify/dist/ReactToastify.css";
import AdminNav from "./AdminNav";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../DB/firebase";
import { v4 as uuid } from "uuid";
import SuccessCard from "../components/SuccessCard";
import PUBLICROUTES from "../utils/PublicRoutes";
import { Spinner, Button } from "@material-tailwind/react";

const UploadToGallery = () => {
  const [showCard, setShowCard] = useState(false);
  const [image, setImage] = useState([]);
  const [ProductImage, setProductImage] = useState([]);

  const [loading, setLoading] = useState(false);
  const [readyToUpload, setReadyToUpload] = useState(false);

  const [imageDetail, setImageDetail] = useState({
    image: "",
    caption: "",
  });

  var img = [];

  const handleImageSelect = (e) => {
    const files = e.target.files;

    setImage(files);
    setProductImage(URL.createObjectURL(files[0]));

    console.log(files[0].name);
  };

  const handleUpload = async () => {
    setLoading(true);

    try {
      const imageRef = ref(storage, `/gallery_image/${image[0].name + uuid()} `);
      const snapshot = await uploadBytes(imageRef, image[0]);
      const url = await getDownloadURL(snapshot.ref);

      console.log(url);
      if (url) {
        setImageDetail((prev: any) => ({ ...prev, image: url }));
        setReadyToUpload(true);
      }
    } catch (error) {
      toast.error("Error: Failed to upload");
    }
  };

  const uploadData = async () => {
    try {
      const docRef = await addDoc(collection(db, "gallery_data"), imageDetail);
      if (docRef) {
        toast.success("Product uploaded successfully");
        setShowCard(true);
        setReadyToUpload(true);
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
          <h1 className="mt-8 mb-12 mx-auto font-Roboto  text-2xl text-red-600 uppercase ">
            Upload Images
          </h1>
          <h1 className="text-slate-900 text-lg font-Roboto ">Select Image</h1>
          <input
            type="file"
            required
            multiple={false}
            accept="image/*"
            className="bg-white my-4 mb-10 p-3 border  border-slate-400 rounded-md focus:border-slate-400"
            onChange={(e) => handleImageSelect(e)}
          />
          <h1 className="text-slate-900 text-lg font-Roboto ">Caption (optional)</h1>

          <textarea
            rows={4}
            cols={200}
            maxLength={500}
            required
            disabled={false}
            draggable={false}
            placeholder="Caption"
            onChange={(e) => setImageDetail((prev) => ({ ...prev, caption: e.target.value }))}
            className=" w-full my-3  h-auto py-2 px-4 font-light font-roboto text-lg text-slate-800 rounded-md outline-none border border-slate-400 focus:border-slate-700"
          ></textarea>

          {!readyToUpload && (
            <Button
              className="w-full mx-auto md:mx-auto mt-8 py-3 px-16 text-white text-2xl rounded-md bg-red-600 hover:bg-black bg-gradient-to-r  from-black hover:from-red-600 transition-colors uppercase"
              onClick={() => {
                handleUpload();
              }}
            >
              Done
            </Button>
          )}

          {readyToUpload && (
            <Button
              type="submit"
              className="w-full flex flex-row mx-auto md:mx-auto mt-8 py-3 px-16 text-red-600 border border-red-500 text-center text-xl rounded-md bg-white hover:bg-red-50 items-center "
            >
              <span className="mx-auto flex flex-row">Upload</span>
            </Button>
          )}
        </form>

        <div className="mx-auto py-5 pt-0 md:pt-16 px-1 md:px-4 w-11/12 md:w-4/6 h-full">
          <div className=" flex flex-col w-full mx-auto h-auto ">
            {ProductImage && (
              <img
                src={ProductImage}
                alt={"image"}
                className="mx-auto w-full md:w-[450px] h-auto object-cover"
              />
            )}
          </div>

          <div className="w-full md:w-full mx-auto  md:my-4 h-auto flex flex-col-reverse md:flex-row ">
            <div className="mx-auto p-6 w-full md:w-10/12 h-auto bg-white rounded-md">
              <h3 className="text-xl py-3 text-red-600 font-bold">Caption</h3>
              <p className="text-md md:text-lg text-slate-900 font-nunito">
                {imageDetail.caption}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {showCard && <SuccessCard returnURL={PUBLICROUTES.UPLOAD_IMAGES} />}
    </div>
  );
};

export default UploadToGallery;
