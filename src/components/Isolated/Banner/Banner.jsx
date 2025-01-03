import facebook from "../../../assets/Icons/facebook.svg";
import twitter from "../../../assets/Icons/twitter.svg";
import instagram from "../../../assets/Icons/instagram.svg";
import pinterest from "../../../assets/Icons/pinterest.svg";
import arrow from "../../../assets/Icons/arrow.svg";
import banner from "../../../assets/images/banner.png";
import award1 from "../../../assets/images/award1.webp";
import award2 from "../../../assets/images/award2.webp";
import award3 from "../../../assets/images/award3.webp";

const Banner = () => {
  const socials = [facebook, twitter, instagram, pinterest];
  const awards = [award1, award2, award3];

  return (
    <div
      style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}
      className="h-screen"
    >
      <div className="flex pt-40">
        {/* Section 1 */}
        <div className="flex flex-col items-center w-[200px]">
          <p className=" rotate-[-90deg] text-[#A8A8A8] mb-4">Follow</p>
          <div className="w-[1.5px] h-[30px] bg-[#454545] m-10"></div>
          <div>
            {socials.map((social, idx) => (
              <div
                className="border border-[#2D2D30] rounded-full p-2 mb-3"
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
      <div className="flex my-5 float-end">
        {awards.map((award, idx) => (
          <>
            <img key={idx} src={award} alt="award" className="w-[40px] mr-5" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Banner;
