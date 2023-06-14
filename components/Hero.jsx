import Image from "next/image";
import heroImage from "../assets/hero_image.png";
import { AiFillStar } from "react-icons/ai";
export default function Hero() {
  return (
    <div className="mt-16 flex flex-col gap-9 lg:flex-row container pt-5 lg:pb-24 pb-16">
      <div className="flex lg:flex-col gap-10 lg:justify-center justify-normal lg:flex-1">
        <h1 className="z-30">
          Good food us <br /> good mood
        </h1>
        <div className="lg:flex hidden flex-col z-30 gap-6">
          <p className="text-sm text-gray-400 lg:w-[24rem] w-0">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <div className="flex gap-3">
            <button className="btn-primary drop-shadow-lg">
              Daftar Sekarang
            </button>
            <button className="text-xs bg-gray-200/60 text-black rounded-full py-2 px-4 lg:text-sm">
              About Us
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5 lg:flex-1 relative flex lg:justify-end justify-normal">
        <div className="w-72 lg:w-96 relative z-10 inset-x-3 lg:inset-x-2 -inset-y-3 lg:-inset-y-2">
          <Image src={heroImage} alt="heroImage" />
        </div>
        <div className="bg-gray-100 rounded-full w-72 h-72 lg:w-[25rem] lg:h-[25rem] absolute" />

        <div className="bg-white/50 backdrop-blur-sm rounded-xl absolute z-20 py-3 px-4 right-0.5 lg:right-56 bottom-10">
          <div className="flex gap-1">
            <div className="w-14">
              <Image src={heroImage} alt="heroImage" />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-sm font-bold capitalize">
                green salad tomato
              </h5>
              <p className="text-xs">Tomato</p>
              {/* the star */}
              <div className=" flex gap-1">
                <AiFillStar size={18} color="#ffb600" />
                <AiFillStar size={18} color="#ffb600" />
                <AiFillStar size={18} color="#ffb600" />
                <AiFillStar size={18} color="#ffb600" />
                <AiFillStar size={18} color="#d8d6d6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex lg:hidden">
        <div className="flex flex-col z-30 gap-6">
          <p className="text-sm text-gray-400">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <div className="flex gap-3">
            <button className="btn-primary drop-shadow-lg">
              Daftar Sekarang
            </button>
            <button className="text-xs bg-gray-200/60 text-black rounded-full py-2 px-4">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
