import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";
import PUBLICROUTES from "../../utils/PublicRoutes";
const Map = () => {
  return (
    <Card className="mx-auto mt-32 mb-16  w-full md:w-11/12 flex-col  md:flex-row">
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-6">
          Pay Us a Visit Today!
        </Typography>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          ADDRESS
        </Typography>
        <Typography variant="h6" color="gray" className="mb-1  ">
          Address 1
        </Typography>
        <Typography color="black" className="mb-6 font-normal">
          6A Olufunmilayo Street, Ogba, Lagos State.
        </Typography>
        <Typography variant="h6" color="gray" className="mb-1  ">
          Address 2
        </Typography>
        <Typography color="black" className="mb-6 font-normal">
          1/7 Otunba Bayo Dejonwo Street, Plywood Junction, Lagos Road, Epe,Lagos State
        </Typography>
        <a href={PUBLICROUTES.CONTACT_US} className="inline-block">
          <Button
            variant="text"
            className="flex text-[#e30202] bg-gray-400 items-center gap-2"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>

      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full md:w-3/5 h-96 shrink-0 rounded-none md:rounded-l-none"
      >
        <div className="mx-auto  w-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.139174168644!2d3.3339561315072355!3d6.629630659197637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b915fd554d889%3A0x88ebe6e17b6129c7!2sOlufunmilayo%20St%2C%20Ifako%20Agege%2C%20New%20Ifako%2FOyemekun%20101232%2C%20Lagos!5e0!3m2!1sen!2sng!4v1725623221822!5m2!1sen!2sng"
            width="100%"
            height="600"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Map;
