// icon categories
import cupcake from "@/assets/icons/Frame.png";
import doughnut from "@/assets/icons/doughnut 1.png";
import kebab from "@/assets/icons/kebab 1.png";
import pizza from "@/assets/icons/pizza 1.png";
import salmon from "@/assets/icons/salmon 1.png";
// image receipts
import bret from "@/assets/receipes/pexels-brett-jordan-842519 1.png";
import daria from "@/assets/receipes/pexels-daria-shevtsova-1260968 1.png";
import aneja from "@/assets/receipes/pexels-nishant-aneja-2955819 1.png";
import olga from "@/assets/receipes/pexels-olga-lioncat-7245464 1.png";
import magni from "@/assets/receipes/pexels-oleg-magni-1908674 1.png";
import alena from "@/assets/receipes/pexels-alena-shekhovtcova-6940978 1.png";
import karley from "@/assets/receipes/pexels-karley-saagi-2064449 1.png";
import polina from "@/assets/receipes/pexels-polina-tankilevitch-6419736 1.png";
// react icons
import { AiFillStar } from "react-icons/ai";

module.exports = {
  categories: [
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
  ],
  TrendingReceipts: [
    {
      id: 1,
      name: "Pizza Peperoni",
      type: "Pizza",
      image: bret,
      stars: [
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#d8d6d6" />,
      ],
      bgcolor: "[#E6F3F5]",
    },
    {
      id: 2,
      name: "Pizza Meat",
      type: "Pizza",
      image: daria,
      stars: [
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#d8d6d6" />,
        <AiFillStar size={15} color="#d8d6d6" />,
      ],
      bgcolor: "[#E6F3F5]",
    },
    {
      id: 3,
      name: "Doner Kebab",
      type: "Kebab",
      image: aneja,
      stars: [
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
      ],
      bgcolor: "[#EAEEFA]",
    },
    {
      id: 4,
      name: "Salmon Roll",
      type: "Salmon",
      image: olga,
      stars: [
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#d8d6d6" />,
      ],
      bgcolor: "[#F9EEF3]",
    },
    {
      id: 5,
      name: "Cupcake Choco",
      type: "Cupcake",
      image: magni,
      stars: [
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#d8d6d6" />,
      ],
      bgcolor: "[#F0FEEB]",
    },
    {
      id: 6,
      name: "Doughnut Milk ",
      type: "Doughnut",
      image: alena,
      stars: [
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
      ],
      bgcolor: "[#F3F7D9]",
    },
    {
      id: 7,
      name: "Doughnut Unicorn",
      type: "Doughnut",
      image: karley,
      stars: [
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#d8d6d6" />,
      ],
      bgcolor: "[#F3F7D9]",
    },
    {
      id: 8,
      name: "Kathi Kebab",
      type: "Kebab",
      image: polina,
      stars: [
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#ffb600" />,
        <AiFillStar size={15} color="#d8d6d6" />,
      ],
      bgcolor: "[#EAEEFA]",
    },
  ],
  footerCategories: [
    {
      id: 1,
      name: "Cupcake",
      items: "22 Items",

      color: "bg-[#F0FEEB]",
    },
    {
      id: 2,
      name: "Pizza",
      items: "25 Items",

      color: "bg-[#E6F3F5]",
    },
    {
      id: 3,
      name: "Kebab",
      items: "12 Items",

      color: "bg-[#EAEEFA]",
    },
    {
      id: 4,
      name: "Salmon",
      items: "22 Items",

      color: "bg-[#F9EEF3]",
    },
    {
      id: 5,
      name: "Doughnut",
      items: "11 Items",

      color: "bg-[#F3F7D9]",
    },
  ],
};
