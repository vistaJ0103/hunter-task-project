import { useRouter } from "next/router";
import Image from "next/image";
import ArrowRight from "./SvgFiles/Group";
import Logo from "./SvgFiles/Logo";
import ArrowDown from "./SvgFiles/ArrowDown";
const CardList = () => {
  return (
    <>
      <div className="px-5 lg:px-32 flex flex-col h-full items-center gap-10 py-10 md:py-20">
        <div className="w-full flex justify-between  mb-12">
          <div className="flex gap-5 items-end justify-end">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Top Venue
            </h1>
            <div className="px-4 py-1 h-8 border border-solid rounded-full border-gray-200 flex  text-center  font-medium justify-end  ">
              Discover top venue around you
            </div>
          </div>
          <div className="flex  items-end justify-end">
            <span className=" text-3 font-semibold">
              See all
            </span>
            <ArrowDown />
          </div>
        </div>
        <div className="grid-cols-1 grid mb20 gap-x-10 gap-y-10 xl:grid-cols-3">
          <div
            className="flex flex-col w-full rounded-[30px] border-solid border border-gray50"
          >
            <div>
              <Image src={"/svgs/3.svg"} alt={""} width={100} height={60} className="w-full" />
            </div>
            <div className="px-6 py-4 flex justify-between">
              <div className="flex flex-col">
                <h1 className=" text-lg font-semibold mb-5">
                  Venue 007
                </h1>
                <div className="flex">
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/VectorEmpty.svg"} alt={""} width={20} height={20} />
                </div>
                <span>4.5(160 reviews)</span>
              </div>
              <div className="flex flex-col justify-end
               ">
                <h1 className=" text-lg text-bg-white mb-2">
                  Rome, Italty
                </h1>
                <button
                  type="submit"
                  className=" bg-[#ABF8CE] rounded flex items-center text-center justify-center cursor-pointer duration-300 hover:opacity-80"
                >
                  <span className="flex text-neutral-600  text-3 font-medium text-nowrap text-center py-1">
                    Category</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col w-full rounded-[30px] border-solid border border-gray50"
          >
            <div>
              <Image src={"/svgs/4.svg"} alt={""} width={100} height={60} className="w-full" />
            </div>
            <div className="px-6 py-4 flex justify-between">
              <div className="flex flex-col">
                <h1 className=" text-lg font-semibold mb-5">
                  Venue 007
                </h1>
                <div className="flex">
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/VectorEmpty.svg"} alt={""} width={20} height={20} />
                </div>
                <span>4.5(160 reviews)</span>
              </div>
              <div className="flex flex-col justify-end
               ">
                <h1 className=" text-lg text-bg-white mb-2">
                  Rome, Italty
                </h1>
                <button
                  type="submit"
                  className=" bg-[#ABF8CE] rounded flex items-center text-center justify-center cursor-pointer duration-300 hover:opacity-80"
                >
                  <span className="flex  text-neutral-600  text-3 font-medium text-nowrap text-center py-1">
                    Category</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col w-full rounded-[30px] border-solid border border-gray50"
          >
            <div>
              <Image src={"/svgs/5.svg"} alt={""} width={100} height={60} className="w-full" />
            </div>
            <div className="px-6 py-4 flex justify-between">
              <div className="flex flex-col">
                <h1 className=" text-lg font-semibold mb-5">
                  Venue 007
                </h1>
                <div className="flex">
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/VectorEmpty.svg"} alt={""} width={20} height={20} />
                </div>
                <span>4.5(160 reviews)</span>
              </div>
              <div className="flex flex-col justify-end
               ">
                <h1 className=" text-lg text-bg-white mb-2">
                  Rome, Italty
                </h1>
                <button
                  type="submit"
                  className=" bg-[#ABF8CE] rounded flex items-center text-center justify-center cursor-pointer duration-300 hover:opacity-80"
                >
                  <span className="flex  text-neutral-600 text-3 font-medium text-nowrap text-center py-1">
                    Category</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col w-full rounded-[30px] border-solid border border-gray50"
          >
            <div>
              <Image src={"/svgs/3.svg"} alt={""} width={100} height={60} className="w-full" />
            </div>
            <div className="px-6 py-4 flex justify-between">
              <div className="flex flex-col">
                <h1 className=" text-lg font-semibold mb-5">
                  Venue 007
                </h1>
                <div className="flex">
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/VectorEmpty.svg"} alt={""} width={20} height={20} />
                </div>
                <span>4.5(160 reviews)</span>
              </div>
              <div className="flex flex-col justify-end
               ">
                <h1 className=" text-lg text-bg-white mb-2">
                  Rome, Italty
                </h1>
                <button
                  type="submit"
                  className=" bg-[#ABF8CE] rounded flex items-center text-center justify-center cursor-pointer duration-300 hover:opacity-80"
                >
                  <span className="flex text-neutral-600  text-3 font-medium text-nowrap text-center py-1">
                    Category</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col w-full rounded-[30px] border-solid border border-gray50"
          >
            <div>
              <Image src={"/svgs/4.svg"} alt={""} width={100} height={60} className="w-full" />
            </div>
            <div className="px-6 py-4 flex justify-between">
              <div className="flex flex-col">
                <h1 className=" text-lg font-semibold mb-5">
                  Venue 007
                </h1>
                <div className="flex">
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/VectorEmpty.svg"} alt={""} width={20} height={20} />
                </div>
                <span>4.5(160 reviews)</span>
              </div>
              <div className="flex flex-col justify-end
               ">
                <h1 className=" text-lg text-bg-white mb-2">
                  Rome, Italty
                </h1>
                <button
                  type="submit"
                  className=" bg-[#ABF8CE] rounded flex items-center text-center justify-center cursor-pointer duration-300 hover:opacity-80"
                >
                  <span className="flex text-neutral-600   text-3 font-medium text-nowrap text-center py-1">
                    Category</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col w-full rounded-[30px] border-solid border border-gray50"
          >
            <div>
              <Image src={"/svgs/5.svg"} alt={""} width={100} height={60} className="w-full" />
            </div>
            <div className="px-6 py-4 flex justify-between">
              <div className="flex flex-col">
                <h1 className=" text-lg font-semibold mb-5">
                  Venue 007
                </h1>
                <div className="flex">
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/Vector.svg"} alt={""} width={20} height={20} />
                  <Image src={"/svgs/VectorEmpty.svg"} alt={""} width={20} height={20} />
                </div>
                <span>4.5(160 reviews)</span>
              </div>
              <div className="flex flex-col justify-end
               ">
                <h1 className=" text-lg text-bg-white mb-2">
                  Rome, Italty
                </h1>
                <button
                  type="submit"
                  className=" bg-[#ABF8CE] rounded flex items-center text-center justify-center cursor-pointer duration-300 hover:opacity-80"
                >
                  <span className="flex  text-3 font-medium text-nowrap text-center py-1">
                    Category</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
export default CardList;
