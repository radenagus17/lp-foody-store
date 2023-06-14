import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo_elemes.png";
import { useEffect, useState } from "react";

const menus = ["name", "about", "promotion", "blogs", "contact us"];

export default function Navbar() {
  const [isHeader, setIsHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsHeader(true) : setIsHeader(false);
    });
  }, [isHeader]);
  return (
    <header
      className={`${
        isHeader
          ? "lg:pt-2 pt-0 shadow-md bg-white"
          : "lg:pt-5 pt-2 bg-transparent"
      } w-full inset-x-0 fixed z-50 transition-all duration-300`}
    >
      <div className="flex justify-between w-full items-center relative z-50 container py-3">
        <Link href="/" className="lg:w-36 w-32 cursor-pointer">
          <Image src={logo} alt="logo" />
        </Link>
        <nav className="lg:flex gap-10 capitalize text-sm hidden">
          {menus.map((menu, idx) => (
            <div key={idx} className="relative">
              {idx === 2 && (
                <div className="rounded-full bg-red-500 absolute px-[13px] py-[0.7px] text-white -right-5 bottom-5 flex items-center justify-center text-[0.55rem] tracking-wider">
                  HOT
                </div>
              )}
              <h5 className="cursor-pointer">{menu}</h5>
            </div>
          ))}
        </nav>
        <div className="flex gap-4">
          <button className="hidden lg:block text-sm">Masuk</button>
          <button className="btn-primary">Daftar Sekarang</button>
        </div>
      </div>
    </header>
  );
}
