import Footer from "../../components/footer";
import PUBLICROUTES from "../../utils/PublicRoutes";

const SignUp = () => {
  return (
    <div className="w-full h-auto ">
      <div className="w-full h-auto mt-10 flex flex-col md:flex-row items-center  ">
        <div className=" mx-auto py-0 h-auto w-auto md:w-1/2">
          <form
            action=""
            className="mx-3 p-10 md:w-96 flex flex-col bg-white rounded-md shadow-xl "
          >
            <h2 className="mx-1 my-1 text-3xl font-bold text-slate-600">Sign Up</h2>

            <div className=" mx-auto h-auto w-auto flex flex-row ">
              <input
                type="text"
                placeholder="Surname"
                className=" w-full my-3 mr-1 h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-blue-600 focus:border-cyan-400"
              />
              <input
                type="text"
                placeholder="Name"
                className=" w-full my-3 ml-1 h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-blue-600 focus:border-cyan-400"
              />
            </div>
            <input
              type="text"
              placeholder="email"
              className=" w-full my-3  h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-blue-600 focus:border-cyan-400"
            />

            <input
              type="tel"
              pattern="[789][0-9]{9}"
              placeholder="Phone number"
              className=" w-full my-3  h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-blue-600 focus:border-cyan-400"
            />
            <input
              type="password"
              placeholder="password"
              className=" w-full my-3  h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-blue-600 focus:border-cyan-400"
            />

            <input
              type="password"
              placeholder="confirm password"
              className=" w-full my-3  h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-blue-600 focus:border-cyan-400"
            />

            <button
              type="submit"
              className="w-full mx-auto px-6 py-2 my-4 text-center text-white  text-xl font-nunito  rounded bg-sky-400 hover:bg-purple-600 bg-gradient-to-r from-purple-600 hover:from-sky-400 transition-colors shadow-md"
            >
              Register
            </button>

            <p className="mx-auto my-3 text-base text-thin text-slate-700">
              Already have an account?
              <a href={PUBLICROUTES.LOGIN} className="mx-auto text-base  text-blue-800">
                Login
              </a>
            </p>
          </form>
        </div>
        <div className=" m-auto pb-28 mx-auto h-auto w-1/2 items-center ">
          <img src="img/undraw_blooming_re_2kc4.svg" alt="" className=" m-auto " />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
