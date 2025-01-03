import facebook from "../../../assets/Icons/facebook.svg";
import twitter from "../../../assets/Icons/twitter.svg";
import instagram from "../../../assets/Icons/instagram.svg";
import pinterest from "../../../assets/Icons/pinterest.svg";
import arrow from "../../../assets/Icons/arrow.svg";
import banner from "../../../assets/images/banner.png";

const Banner = () => {
  const socials = [facebook, twitter, instagram, pinterest];
  return (
    <div
      className="flex pt-40 h-screen"
      style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}
    >
      {/* Section 1 */}
      <div className="flex flex-col items-center w-[200px]">
        <p className=" rotate-[-90deg] text-[#A8A8A8]">Follow</p>
        <div className="w-[1px] h-[50px] bg-[#454545] my-10"></div>
        <div>
          {socials.map((social, idx) => (
            <div
              className="border border-[#2D2D30] rounded-full p-2 my-3"
              key={idx}
            >
              <img className="w-[16px]" src={social} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-[#FB6402]">I&apos;M FILM DIRECTOR</h3>
        <h1 className="font-bold text-8xl py-5">
          DAVID <br /> ANDERSON
        </h1>
        <p className="text-[#ADADAD]">
          Faime Production Is A Full—Service Production House Based Out Of{" "}
          <br />
          Indonesia And Singapore That Hosts A Thriving Roster Of Directors.
        </p>

        <button className="mt-10 border border-[#2d2d30] px-10 py-3 flex items-center">
          Contact Me
          <img src={arrow} alt="arrow" className="ml-3" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
