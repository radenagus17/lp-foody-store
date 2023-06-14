import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowIcons from "./RowIcons";
import { SlideLeft, SlideRight } from "@/helpers/SlideClick";
// icon categories
import cupcake from "@/assets/icons/Frame.png";
import doughnut from "@/assets/icons/doughnut 1.png";
import kebab from "@/assets/icons/kebab 1.png";
import pizza from "@/assets/icons/pizza 1.png";
import salmon from "@/assets/icons/salmon 1.png";
const categories = [
  {
    id: 1,
    name: "Cupcake",
    items: "22 Items",
    icon: cupcake,
    color: "bg-[#F0FEEB]",
  },
  {
    id: 2,
    name: "Pizza",
    items: "25 Items",
    icon: pizza,
    color: "bg-[#E6F3F5]",
  },
  {
    id: 3,
    name: "Kebab",
    items: "12 Items",
    icon: kebab,
    color: "bg-[#EAEEFA]",
  },
  {
    id: 4,
    name: "Salmon",
    items: "22 Items",
    icon: salmon,
    color: "bg-[#F9EEF3]",
  },
  {
    id: 5,
    name: "Doughnut",
    items: "11 Items",
    icon: doughnut,
    color: "bg-[#F3F7D9]",
  },
  {
    id: 6,
    name: "",
    items: "",
    icon: "",
    color: "bg-[#F3F4F6]",
  },
];

export default function MiddleTop() {
  return (
    <>
      <div className="container mt-20">
        <h2>browser our category</h2>
        <h2 className="text-greenDark">receipt</h2>
        <div className="lg:flex items-center relative group hidden mt-7">
          <div
            id={"slider1"}
            className="w-full flex gap-x-3 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {categories.map((category, idx) => (
              <RowIcons key={category.id} {...category} index={idx} />
            ))}
          </div>
        </div>
        <div className="lg:flex gap-2 mt-6 justify-end hidden">
          <button
            onClick={() => SlideLeft("slider1")}
            className="btn-primary flex gap-2 group"
          >
            <MdChevronLeft
              size={20}
              className="rounded-full bg-white text-greenDark group-hover:bg-greenDark group-hover:text-white transition duration-300"
            />
            PREV
          </button>
          <button
            onClick={() => SlideRight("slider1")}
            className="btn-primary flex gap-2 group"
          >
            NEXT
            <MdChevronRight
              size={20}
              className="rounded-full bg-white text-greenDark group-hover:bg-greenDark group-hover:text-white transition duration-300"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center relative group lg:hidden mt-7">
        <MdChevronLeft
          onClick={() => SlideLeft("slider2")}
          className="bg-white left-0 rounded-full absolute top-1/3 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider2"}
          className="w-full h-full flex gap-2 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {categories.map((category, idx) => (
            <RowIcons key={category.id} {...category} mobilePage index={idx} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => SlideRight("slider2")}
          className="bg-white right-0 rounded-full absolute top-1/3 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}
