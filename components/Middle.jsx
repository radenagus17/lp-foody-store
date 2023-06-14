import Image from "next/image";
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
const TrendingReceipts = [
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
];

export default function Middle() {
  return (
    <div className="container mt-20">
      <h2>browser our trending</h2>
      <h2 className="text-greenDark">receipt</h2>
      <div className="grid gap-5 lg:grid-cols-4 mt-7">
        {TrendingReceipts.map((trend) => {
          const { id, name, type, image, stars, bgcolor } = trend;
          return (
            <div
              key={id}
              className={`p-3 rounded-lg bg-${bgcolor} drop-shadow-lg relative z-20 hover:before:absolute hover:before:-z-20 hover:before:inset-0 hover:before:bg-hero-pattern hover:before:bg-cover hover:before:opacity-10 transition-all duration-300 cursor-pointer hover:scale-105`}
            >
              <div className="w-28 rounded-lg overflow-hidden">
                <Image src={image} alt={name} />
              </div>
              <div className="flex-col flex gap-1 mt-4">
                <h3 className="text-base font-semibold tracking-wide lg:text-lg">
                  {name}
                </h3>
                <h4 className="text-greenLight text-sm">{type}</h4>
                <div className="flex">
                  {stars.map((star, idx) => (
                    <span key={idx}>{star}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-14 w-full lg:flex justify-center hidden">
        <button className="btn-primary">ALL Receipt</button>
      </div>
    </div>
  );
}
