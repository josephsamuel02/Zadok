import Banner from "./Banner";
import Map from "./Map";
import Nav from "../../components/Nav";
import HomepageContents from "./HompageContents";
import { SiWhatsapp } from "react-icons/si";
import PUBLIC_URLS from "../../utils/public_urls";
const Home = () => {
  return (
    <div className="w-full h-auto">
      <Nav />
      <Banner />
      <HomepageContents />
      <Map />
      <a
        href={PUBLIC_URLS.whatsapp}
        target="_blank"
        className="mx-auto px-0  fixed right-6 bottom-12 items-center animate-pulse cursor-pointer rounded-full bg-green-500 hover:bg-green-400 "
      >
        <span className=" m-auto animate-bounce">
          <SiWhatsapp size={65} color="white" />
        </span>
      </a>
    </div>
  );
};

export default Home;
