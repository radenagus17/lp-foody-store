import Image from "next/image";
import logo from "../assets/logo_elemes.png";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { footerCategories } from "@/data";

export default function Footer() {
  return (
    <div className="container mt-36 pb-10">
      <div className="lg:p-10 p-3 bg-[#F9FFF6] grid grid-cols-5 lg:gap-10 gap-4">
        <div className="flex flex-col gap-4 lg:col-span-2 col-span-3">
          <div className="lg:w-44 w-36">
            <Image src={logo} alt="logo" />
          </div>
          <p className="text-xs text-gray-400 max-w-[20rem]">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-greenDark rounded-full hover:text-white text-greenDark transition duration-500">
              <HiOutlineMail size={20} />
            </button>
            <button className="p-2 hover:bg-greenDark rounded-full hover:text-white text-greenDark transition duration-500">
              <HiPhone size={20} />
            </button>
            <button className="p-2 hover:bg-greenDark rounded-full hover:text-white text-greenDark transition duration-500">
              <FaInstagram size={20} />
            </button>
          </div>
        </div>
        <div className="lg:flex flex-col gap-4 hidden">
          <h3>Categories</h3>
          {footerCategories.map((category) => (
            <ul key={category.id} className="text-xs text-gray-400">
              <li>{category.name}</li>
            </ul>
          ))}
        </div>
        <div className="lg:flex flex-col gap-4 hidden">
          <h3>About Us</h3>
          <ul className="text-xs text-gray-400 flex flex-col gap-3">
            <li>About us</li>
            <li>FAQ</li>
            <li>Report problem</li>
          </ul>
        </div>
        <div className="flex flex-col lg:gap-4 gap-2 col-span-2 lg:col-span-1">
          <h3 className="hidden lg:block">Newsletter</h3>
          <p className="text-xs text-gray-400">
            Get now free 50% discount for alll products on your first order
          </p>
          <div className="flex">
            <input
              type="text"
              className="rounded-l-lg text-[10px] lg:text-xs border lg:px-3 px-2 lg:py-1 py-[2px] lg:placeholder:text-xs placeholder:text-[10px] placeholder:text-black lg:max-w-[9rem] max-w-[5rem] focus:border-greenDark focus:border outline-none"
              placeholder="Your email address"
            />
            <button className="uppercase rounded-r-lg lg:px-3 px-2 py-1 bg-greenDark lg:text-xs text-[10px] text-white hover:ring-1 hover:ring-greenDark hover:text-greenDark transition duration-300 hover:bg-transparent outline-none">
              send
            </button>
          </div>
          <p className="lg:text-xs text-[11px] flex items-center gap-2">
            <span className="text-greenLight">
              <HiOutlineMail size={15} />
            </span>
            elemesid@gmail.com
          </p>
          <p className="lg:text-xs text-[11px] flex items-center gap-2">
            <span className="text-greenLight">
              <HiPhone size={15} />
            </span>
            0888&nbsp;1111&nbsp;2222
          </p>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-4">
        © 2021 Elemes id. All rights reserved
      </p>
    </div>
  );
}
