import { useRouter } from "next/router";
import Image from "next/image";
import ArrowRight from "./SvgFiles/Group";
import Logo from "./SvgFiles/Logo";
const Header = () => {
  return (
    <>
      <div className="flex flex-col w-full h-full items-center justify-between bg-image-wrapper ">
        <div className="w-4/5 py-2 px-10 mt-5  mx-auto border border-solid rounded-full border-gray-700 flex justify-between">
          <Logo />
          <button
            type="submit"
            className=" bg-blue-600 rounded-[10px] flex items-center border-none cursor-pointer duration-300 hover:opacity-80 p-3 gap-1"
          >
            <span className="flex text-gray-200 text-3 font-medium leading-normal text-nowrap">
              Invite Someone</span>
            <ArrowRight />
          </button>
        </div>
        <div className="flex flex-col w-full px-5 md:w-1/2 justify-center items-center gap-5">
          <div className=" py-2 px-10 mt-5  mx-auto border border-solid rounded-full border-gray-200 flex justify-between">
            <span className="flex text-gray-200 text-3 font-medium leading-normal text-nowrap">
              Create your dream event with productionglue</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl text-center font-bold">
            Discover Vendors and
            Venues in Your Area
          </h1>
          <p className="px-5 lg:px-20 text-white text-3 text-center">
            Uncover local excellence with productionglue, connecting you to top-tier vendors and stunning venues right in your neighborhood.
          </p>
        </div>
        <div className=" relative flex flex-col w-2/3 py-5 px-10 mt-5 mx-auto rounded-tr-[40px] rounded-tl-[40px] border-solid border border-gray-700">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 rounded-full w-5 h-5"></div>
            <span className="text-3 font-bold text-white"> Start Exploring Now</span>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1  md:grid-cols-3 gap-2  md:gap-5 lg:gap-16">
              <div className="w-full">
                <label
                  className="block tracking-wide text-white text-xs font-pro-text font-medium mb-2"
                >Venues or Vendors</label>
                <div className="mt-1 relative">
                  <input
                    className="block w-full h-12 text-gray-700 border rounded-full py-2 px-5 leading-tight focus:outline-none focus:bg-white focus:ring"
                    placeholder="Enter your service of choice"
                  >
                  </input>
                </div>
              </div>
              <div className="w-full">
                <label
                  className="block tracking-wide text-white text-xs font-pro-text font-medium mb-2"
                >Zip-code/Address</label>
                <div className="mt-1 relative">
                  <input
                    className="block w-full h-12 text-gray-700 border rounded-full py-2 px-5 leading-tight focus:outline-none focus:bg-white focus:ring"
                    placeholder="Enter your zip-code/address"
                  >
                  </input>
                </div>
              </div>
              <div className="w-full">
                <label
                  className="block tracking-wide text-white text-xs font-pro-text font-medium mb-2"
                >Search Radius</label>
                <div className="mt-1 relative">
                  <input
                    className="block w-full h-12 text-gray-700 border rounded-full py-2 px-5 leading-tight focus:outline-none focus:bg-white focus:ring"
                    placeholder="Enter your search radius"
                  >
                  </input>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 mb-3 w-full bg-blue-600 md:w-1/2 mx-auto rounded-full flex items-center border-none cursor-pointer duration-300 hover:opacity-80 p-3 text-center justify-center"
          >
            <span className="flex text-gray-200 text-3 font-medium leading-normal text-nowrap ">
              Show Results</span>
          </button>
          <div className="md:flex absolute bottom-5 -right-24  hidden items-center gap-3">
            <Image src={"/svgs/Group.svg"} alt={""} width={60} height={60} />
            <button
              type="submit"
              className=" bg-blue-600 rounded-full h-12 flex items-center border border-solid border-white cursor-pointer duration-300 hover:opacity-80"
            >
              <span className="flex text-gray-200  text-3 font-medium text-nowrap py-5 px-5">
                Chat With Gluey</span>
            </button>
          </div>
        </div>

      </div >
    </>
  );
};
export default Header;
