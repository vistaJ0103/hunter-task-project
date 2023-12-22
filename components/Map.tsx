import { useRouter } from "next/router";
import Image from "next/image";
import ArrowRight from "./SvgFiles/Group";
import Logo from "./SvgFiles/Logo";
import ArrowDown from "./SvgFiles/ArrowDown";
const Map = () => {
  return (
    <>
      <div className="px-5 lg:px-32 flex flex-col h-full items-center gap-10 py-10 md:py-20">
        <div className="w-full flex justify-between  mb-12">
          <div className="flex gap-5 items-end justify-end">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Around You
            </h1>
            <div className="px-4 py-1 h-8 border border-solid rounded-full border-gray-200 flex  text-center  font-medium justify-end  ">
              Discover top venue around you
            </div>
          </div>
        </div>
          <div>
            <Image src={"/svgs/map.svg"} alt={""} width={100} height={60} className="w-full" />
          </div>
      </div>
    </>
  );
};
export default Map;
