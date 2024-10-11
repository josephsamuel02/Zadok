import { useState } from "react";
import PUBLICROUTES from "../utils/PublicRoutes";
const Nav = () => {
  // const fetchPost = async () => {
  //   await getDocs(collection(db, "products")).then((querySnapshot) => {
  //     const ewData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //     console.log(ewData);
  //   });
  // };
  // useEffect(() => {
  //   fetchPost();
  // }, []);

  const navigation = [
    { name: "Home", href: PUBLICROUTES.HOME },
    { name: "About Us", href: PUBLICROUTES.ABOUT_US },
    { name: "Properties", href: PUBLICROUTES.PROPERTIES },
    // { name: "Gallery", href: PUBLICROUTES.GALLERY },
    { name: "Contact Us", href: PUBLICROUTES.CONTACT_US },
  ];
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className=" fixed w-full mx-0 z-10  top-0 backdrop-blur-lg flex flex-row  backdrop-contrast-10 backdrop-saturate-150 items-center bg-transparent shadow-md">
      <a href={PUBLICROUTES.HOME} className="mx-2 md:mx-6 my-0  items-center">
        <img
          alt="Company Logo"
          className="h-16 md:h-20 w-auto ml-6 md:ml-10 md:w-auto object-cover py-2 "
          src="/image/ZADOK LOGO 2.png"
        />
      </a>

      <ul className="mx-8 ml-20 py-3 hidden  md:flex flex-row absolute right-0">
        {navigation.map((item, i) => (
          <a
            className="mx-1 px-4 py-2 tex-center text-black font-bold hover:bg-slate-100 text-lg  rounded-md"
            href={`${item.href}`}
            key={i}
          >
            {item.name}
          </a>
        ))}
      </ul>
      <h1
        className="absolute top-7 right-5 cursor-pointer md:hidden transition-all"
        onClick={() => setShowNav(!showNav)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </h1>

      {showNav && (
        <ul className="mx-auto py-3  backdrop-blur-lg absolute top-20 right-0 left-0 flex flex-col bg-black font-bold rounded shadow-md ">
          {navigation.map((item, i) => (
            <a
              className="mx-auto px-3 py-2 tex-center text-black  text-md font-OleoScript rounded hover:bg-slate-100 transition-all  font-bold"
              href={`${item.href}`}
              key={i}
              onClick={() => setShowNav(false)}
            >
              {item.name}
            </a>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
