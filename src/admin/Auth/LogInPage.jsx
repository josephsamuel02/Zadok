import { db } from "../../DB/firebase";
import { collection, getDocs } from "firebase/firestore";

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AdminNav from "../AdminNav";
import PUBLICROUTES from "../../utils/PublicRoutes";
const AdminLogin = () => {
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const Navigate = useNavigate();
  const adminToken = localStorage.getItem("dm_admin_token");

  const getData = async (e) => {
    e.preventDefault();
    await getDocs(collection(db, "Auth"))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().password == pass) {
            localStorage.setItem("dm_admin_token", pass);
            window.location.replace(PUBLICROUTES.ALL_PRODUCTS);
          } else {
            toast.error("unable to login");
          }
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  useEffect(() => {
    if (adminToken) {
      Navigate(PUBLICROUTES.ALL_PRODUCTS);
    }
    // getData();
  }, []);

  return (
    <div className="w-full h-auto mt-24   ">
      <AdminNav />
      <div className="w-full h-auto mt-16 pb-20 flex flex-col md:flex-row items-center  ">
        <div className=" mx-auto py-10 h-auto w-auto md:w-1/2">
          <form className="mx-auto p-10 md:w-96 flex flex-col bg-white rounded-md shadow-xl ">
            <h2 className="mx-1 mb-10 text-2xl font-bold text-slate-600">Admin Login</h2>

            <input
              type="text"
              required
              placeholder="username"
              onChange={(e) => setUser(e.target.value)}
              className=" w-full my-3  h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-[#de1102] focus:border-red-400"
            />

            <input
              type="password"
              placeholder="password"
              required
              onChange={(e) => setPass(e.target.value)}
              className=" w-full my-3  h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-[#de1102] focus:border-red-400"
            />

            <button
              onClick={(e) => getData(e)}
              className="w-full mx-auto px-6 py-2 my-4 text-center text-white  text-xl font-nunito  rounded bg-red-700 hover:bg-red-800 bg-gradient-to-r from-red-500 hover:from-Red transition-colors shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
        <div className=" m-auto pb-10 mx-auto h-auto w-1/2 items-center ">
          <img src="img/undraw_blogging_re_kl0d.svg" alt="" className=" m-auto " />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
