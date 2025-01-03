import logo from "../../../assets/images/logo.webp";
import menu from "../../../assets/Icons/menu.svg";
import arrow from "../../../assets/Icons/arrow-bold.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const options = ["Home", "Movie", "Portfolio", "Pages Blog", "Contact"];

  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between gap-5 p-5 bg-transparent fixed w-full border-b border-[#ffffff12] ${
        isScrolled ? " bg-[#181818] bg-opacity-100" : "bg-transparent"
      }`}
    >
      {/* Section 1 - Logo and Menu icon */}
      <div className="grid grid-cols-2 w-2/6 bg-transparent">
        <img src={logo} alt="logo" className="w-24 my-auto cursor-pointer" />
        <div className="flex items-center">
          <div className="bg-[#434343] w-[1px] h-[38px] mr-4"></div>
          <img src={menu} alt="menu" className="w-12 my-auto cursor-pointer" />
        </div>
      </div>

      {/* Section 2 - Menu */}
      <div className="flex justify-between w-2/3 bg-transparent">
        <ul className="flex justify-between items-center w-1/2 bg-transparent">
          {options.map((option, idx) => (
            <li className="text-[#ADADAD]" key={idx}>
              {option}
            </li>
          ))}
        </ul>
        <button className="bg-[#FD6500] px-7 py-2 flex items-center">
          Let&apos;s Chat{" "}
          <img src={arrow} alt="arrow" className="ml-2 w-[18px]" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
