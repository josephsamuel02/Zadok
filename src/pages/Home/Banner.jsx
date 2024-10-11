import PUBLICROUTES from "../../utils/PublicRoutes";
import { Carousel, Typography, Button } from "@material-tailwind/react";
const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-white">
      <div className=" mx-0 w-full h-full flex flex-col relative ">
        <Carousel
          className="rounded-md"
          autoplay={true}
          transition={{ duration: 2, interval: 6000 }}
          loop={true}
        >
          <div className="relative h-full w-full">
            <img
              src="/image/housing 1.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-black/10">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Budget Friendly Options
                </Typography>
                <Typography variant="lead" color="white" className="mb-12 opacity-80">
                  Find affordable Properties without compromising on quality. Discover budget
                  friendly options that fit your need.
                </Typography>
                <div className="flex gap-2">
                  <a href={PUBLICROUTES.GARAGE}>
                    <Button
                      size="lg"
                      color="white"
                      className="bg-[#d11002] hover:bg-[#de1102] text-white"
                    >
                      Explore our Properties
                    </Button>
                  </a>
                  <a href={PUBLICROUTES.CONTACT_US}>
                    <Button size="lg" color="white" variant="text">
                      Contact us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative h-full w-full">
            <img
              src="/image/housing 2.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-black/10">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Budget-Friendly Options
                </Typography>
                <Typography variant="lead" color="white" className="mb-12 opacity-80">
                  Where Your Future Foundation Begins. Build Your Dreams on Solid Ground!
                </Typography>
                <div className="flex gap-2">
                  <a href={PUBLICROUTES.GARAGE}>
                    <Button
                      size="lg"
                      color="white"
                      className="bg-[#d11002] hover:bg-[#de1102] text-white"
                    >
                      Explore our collection
                    </Button>
                  </a>
                  <a href={PUBLICROUTES.CONTACT_US}>
                    <Button size="lg" color="white" variant="text">
                      Contact us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
