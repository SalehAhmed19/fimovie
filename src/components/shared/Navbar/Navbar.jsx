import logo from "../../../assets/images/logo.webp";
import menu from "../../../assets/Icons/menu.svg";

const Navbar = () => {
  const options = ["Home", "Movie", "Portfolio", "Pages Blog", "Contact"];
  return (
    <nav className="flex justify-between gap-5 p-5 bg-transparent">
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
        <button className="bg-[#FD6500] px-10">Let&apos;s Chat</button>
      </div>
    </nav>
  );
};

export default Navbar;
