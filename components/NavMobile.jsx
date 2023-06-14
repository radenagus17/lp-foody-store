import { GiHamburgerMenu } from "react-icons/gi";

export default function NavMobile() {
  return (
    <nav className="fixed bottom-0 w-full overflow-hidden z-50 bg-gray-50/70 drop-shadow lg:hidden">
      <div className="container">
        {/* nav inner */}
        <ul className="w-full px-5 py-10 flex justify-between h-16 items-center text-xl">
          <li className="flex items-center flex-col text-gray-500 cursor-pointer">
            <GiHamburgerMenu size={30} />
            <h4 className="text-base">Home</h4>
          </li>
          <li className="flex items-center flex-col text-gray-500 cursor-pointer">
            <GiHamburgerMenu size={30} />
            <h4 className="text-base">Promotions</h4>
          </li>
          <li className="flex items-center flex-col text-gray-500 cursor-pointer">
            <GiHamburgerMenu size={30} />
            <h4 className="text-base">Others</h4>
          </li>
        </ul>
      </div>
    </nav>
  );
}
