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
// eslint-disable-next-line no-unused-vars
import _ from "lodash";
import PUBLICROUTES from "../../utils/PublicRoutes";
const ProductDetail = (productData) => {
  const { data } = productData;

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);
  return (
    <>
      <Card className="w-11/12 md:w-3/5 mt-10 shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <Carousel
            className="rounded-md"
            autoplay={true}
            transition={{ duration: 2, interval: 6000 }}
          >
            {data.image &&
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

          <Typography color="gray" className="text-sm line-clamp-5">
            {data.about_product}
          </Typography>
          {/* <Typography variant="h5" color="blue-gray" className="font-medium pt-4 pb-1">
            Features
          </Typography> */}
          {/* {data.features.map((i, n) => (
            <ul className="w-full p0 m-0 ml-5 list-disc" key={n}>
              <li className="text-gray-700 text-base font-roboto ">{i}</li>
            </ul>
          ))} */}
          <Typography variant="h6" color="blue-gray" className="font-medium pt-4 pb-1">
            <span className="font-bold font-roboto">Maker: </span> {data.company}
          </Typography>
          <Typography variant="h6" color="blue-gray" className="text-lg font-medium pt-4 pb-1">
            <span className="font-bold font-roboto"> Price:</span>
            Upon Request
          </Typography>
        </CardBody>
        <CardFooter className="pt-3">
          <a href={`${PUBLICROUTES.REQUEST_FORM}/${data.id}`}>
            <Button size="lg" fullWidth={true} className=" bg-[#c70606] hover:bg-[#d11002]">
              Make Request
            </Button>
          </a>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductDetail;
