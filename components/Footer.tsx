import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "./SvgFiles/Logo";
import ArrowRight1 from "./SvgFiles/ArrowRight1";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Twitter from "./SvgFiles/Twitter";
import Icon from '@mdi/react';
import { mdiTwitter } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-full gap-5  bg-blue-600 py-24 px-16 justify-between ">
        <div className="flex flex-col w-full md:w-1/2 text-left gap-5">
          <h1 className="text-white text-4xl lg:text-6xl text-left font-bold">
            Discover Vendors and
            Venues in Your Area
          </h1>
          <p className=" text-white text-lg text-left">
            Explore exclusive venues and connect with top-tier vendors to craft your perfect occasion.  Elevate your event planning experience starting now!
          </p>
        </div>
        <div className="flex justify-end items-end">
          <button
            type="submit"
            className=" bg-white h-12 rounded-full flex items-center border-none cursor-pointer duration-300 hover:opacity-80 py-3 px-7  gap-1"
          >
            <span className="flex text-3 text-blue-700 font-medium leading-normal text-nowrap">
              Invite Someone</span>
            <ArrowRight1 />
          </button>
        </div>
      </div >
      <div className="flex h-full flex-col md:flex-row bg-white py-24 px-16 justify-between gap-5 ">
        <Logo />
        <div className="flex flex-col w-full md:w-1/2 text-left gap-5">
          <p className=" text-black text-lg text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
        </div>
        <div className="flex justify-end items-end gap-5">
          <Icon path={mdiTwitter} size={1} />
          <Icon path={mdiFacebook} size={1} />
          <Icon path={mdiInstagram} size={1} />
        </div>
      </div >
      <div className="flex h-full border-t bg-white pt-10 pb-24 px-16 justify-center ">
        <p className=" text-black text-lg text-left ">
          © 2023 productionglue. All rights reserved.
        </p>
      </div >
    </>
  );
};
export default Footer;
