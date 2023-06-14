import Image from "next/image";
export default function RowIcons({
  color,
  name,
  icon,
  items,
  mobilePage,
  index,
}) {
  return (
    <div
      className={`p-4 ${color} z-0 rounded-lg text-center flex flex-col gap-2 cursor-pointer relative hover:before:bg-hero-pattern hover:before:absolute hover:before:inset-0 hover:before:-z-50 hover:before:opacity-10 hover:before:bg-cover transition-all duration-300 hover:scale-105`}
    >
      <div
        className={`${mobilePage ? "w-16" : "w-44"} flex justify-center grow`}
      >
        {index === 5 ? null : <Image src={icon} alt={name} />}
      </div>
      <div className={`${mobilePage ? "text-xs" : "text-sm"}`}>
        <h5 className="font-semibold">{name}</h5>
        <p>{items}</p>
      </div>
    </div>
  );
}
