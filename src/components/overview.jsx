import OverviewImage from "../assets/overview.jpg";
import { PiTruckLight } from "react-icons/pi";
import { RiRefund2Line } from "react-icons/ri";
import { FcCustomerSupport } from "react-icons/fc";
import "../index.css";



export const Overview = () => {
  return (
    <>
      <div className=" mx-auto max-w-5sm relative flex">
        <div className="flex-1">
          <img
            className="w-full h-64 md:h-96 object-cover"
            src={OverviewImage}
            alt="Meaningful alt text for an image that is not purely decorative"
          />
        </div>
        <div className="flex-1 h-64 md:h-96 absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-0 right-0 p-4 mt-4 md:mt-14 text-white flex-1 w-full md:w-1/2 lg:w-1/2">
          <h5 className="text-2xl sm:text-xl md:text-3xl lg:text-5xl font-bold tracking-tight">
            <span className="text-red-500 font-bold border-white">GG </span>
            CONNECT
          </h5>
          <p className="font-normal mt-2 text-xs leading-2 md:text-xs md:leading-2 lg:text-md ">
            Your reliable online marketplace platform, connecting buyers and
            sellers seamlessly. At GG CONNECT, Our commitment extends to
            providing safe and swift deliveries, guaranteeing authenticity
            sourced directly from reputable suppliers. Join our community where
            convenience meets confidence, and experience the ease of commerce
            with GG CONNECT.
          </p>

          <button className="p-2 my-2 px-5 bg-red-500 rounded hover:bg-red-400">
            Connect!
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center my-5 md:my-10 mx-2 gap-2 md:mx-16 lg:mx-16">
        <div className=" border-red-400 border-2 px-4 md:px-8 lg:px-16 rounded inline-flex py-5">
          <PiTruckLight size={40} className="text-red-500" />
          <span className="py-2 px-2 font-bold text-base md:text-lg lg:text-base">
            Free Shipping
            <br />
            <span className="font-light text-gray-400 text-xs md:text-sm lg:text-xs">
              Order over $200
            </span>
          </span>
        </div>

        <div className=" border-red-400 border-2 px-4 md:px-8 lg:px-16 rounded inline-flex py-5">
          <RiRefund2Line size={40} className="text-red-500" />
          <span className="py-2 px-2 font-bold text-base md:text-lg lg:text-base">
            Money Return
            <br />
            <span className="font-light text-gray-400 text-xs md:text-sm lg:text-xs">
              15 days money return
            </span>
          </span>
        </div>

        <div className=" border-red-400 border-2 px-4 md:px-8 lg:px-16 rounded inline-flex py-5">
          <FcCustomerSupport size={40} className="text-red-500" />
          <span className="py-2 px-2 font-bold text-base md:text-lg lg:text-base">
            24/7 Support
            <br />
            <span className="font-light text-gray-400 text-xs md:text-sm lg:text-xs">
              Customer Support
            </span>
          </span>
        </div>
      </div>
    </>
  );
};
