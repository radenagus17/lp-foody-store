import Image from "next/image";
import { TrendingReceipts } from "@/data";

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
