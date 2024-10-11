import { Button } from "@material-tailwind/react";
const SuccessCard = (data) => {
  const { returnURL } = data;
  return (
    <div className="fixed top-0 left-0 right-0 flex flex-col bottom-0 bg-transparent backdrop-blur-sm z-20">
      <div className=" w-96 h-96 py-5 m-auto flex flex-col bg-white items-center rounded-lg shadow-lg">
        <img
          src="/image/success.svg"
          alt="success"
          className="mx-auto w-40 h-40 my-5 object-cover "
        />
        <h3 className="mx-auto my-5 text-gray-600 text-xl text-center ">Sent Successfully</h3>

        <Button
          className="w-4/5 mx-auto py-3 text-xl bg-[#de1102] text-white text-center rounded-lg"
          onClick={() => {
            window.location.replace(returnURL);
          }}
        >
          OK
        </Button>
      </div>
    </div>
  );
};

export default SuccessCard;
