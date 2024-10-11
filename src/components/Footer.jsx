import { Typography } from "@material-tailwind/react";
import PUBLICROUTES from "../utils/PublicRoutes";
import PUBLIC_URLS from "../utils/public_urls";
const Footer = () => {
  const LINKS = [
    {
      title: "Home",
      link: PUBLICROUTES.HOME,
    },
    {
      title: "Properties",
      link: PUBLICROUTES.PROPERTIES,
    },
    {
      title: "Gallery",
      link: PUBLICROUTES.GALLERY,
    },
    {
      title: "About Us",
      link: PUBLICROUTES.ABOUT_US,
    },
    {
      title: "Contact Us",
      link: PUBLICROUTES.CONTACT_US,
    },
    {
      title: "Admin",
      link: PUBLICROUTES.ADMIN_LOGIN,
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div
      id="footer"
      className="max-w-full mt-44 px-0  md:px-10 py-14 flex flex-col md:flex-row border-t-2 border-gray-400 "
    >
      <footer className="relative w-full">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="flex flex-row flex-wrap items-center justify-center text-center bg-white gap-y-6 gap-x-12 md:justify-between">
            <img src="/image/ZADOK LOGO 2.png" alt="logo-ct" className="w-52 h-auto" />
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-4 md:gap-x-8">
              {LINKS.map((i, n) => (
                <li key={n}>
                  <a
                    href={i.link}
                    className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-[#de1102] focus:text-[#de1102]"
                  >
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
            >
              &copy; {currentYear}{" "}
              <a href="https://theozonetechnology.com">Zadok Global Investment Limited.</a>.
              All Rights Reserved.
            </Typography>
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
            >
              Developed by:
              <a href="https://theozonetechnology.com/">The Ozone Technology.</a>
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              <Typography
                as="a"
                href={PUBLIC_URLS.whatsapp}
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-11 w-11"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
                      fill="#BFC8D0"
                    />
                    <path
                      d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
                      fill="url(#paint0_linear_87_7264)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
                      fill="white"
                    />
                    <path
                      d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_87_7264"
                        x1="26.5"
                        y1="7"
                        x2="4"
                        y2="28"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5BD066" /> <stop offset="1" stopColor="#27B43E" />
                      </linearGradient>
                    </defs>
                  </g>
                </svg>
              </Typography>
              <Typography
                as="a"
                href="https://web.facebook.com/profile.php?id=61559456189829"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <svg className="h-10 w-10" fill="blue" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography
                as="a"
                href="https://www.instagram.com/dmautosnigeria/"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <svg
                  className="h-10 w-10"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint0_radial_87_7153)"
                  />
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint1_radial_87_7153)"
                  />
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint2_radial_87_7153)"
                  />
                  <path
                    d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                    fill="white"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                    >
                      <stop stopColor="#B13589" />
                      <stop offset="0.79309" stopColor="#C62F94" />
                      <stop offset="1" stopColor="#8A3AC8" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                    >
                      <stop stopColor="#E0E8B7" />
                      <stop offset="0.444662" stopColor="#FB8A2E" />
                      <stop offset="0.71474" stopColor="#E2425C" />
                      <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient
                      id="paint2_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                    >
                      <stop offset="0.156701" stopColor="#406ADC" />
                      <stop offset="0.467799" stopColor="#6A45BE" />
                      <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </Typography>
              <Typography
                as="a"
                href="https://twitter.com/dmautocompany"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 509.64"
                  className="h-9 w-9"
                >
                  <rect width="512" height="509.64" rx="115.61" ry="115.61" />
                  <path
                    fill="#fff"
                    fillRule="nonzero"
                    d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
                  />
                </svg>
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
