import image from "../../assets/images/img1.webp";

const About = () => {
  return (
    <div className="bg-[#171717] ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-5 py-20">
        {/* Section 1 */}
        <div className="">
          <div className="relative">
            <img src={image} alt="image" className="py-5" />
            <div className="absolute bottom-[-70px] flex justify-center">
              <h2 className="font-semibold text-[256px]">30</h2>
              <div className="my-auto pl-5">
                <h4 className="text-[100px] font-normal">+</h4>
                <p className="text-2xl font-normal">
                  Years <br /> Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="ml-20">
          <h3 className="text-[#FB6402] tracking-widest uppercase">ABOUT ME</h3>
          <h2 className="font-bold text-5xl my-5">
            Creative & Expert <br />
            Film Director
          </h2>
          <p className="my-5 text-[#ACACAC] text-[18px]">
            I&apos;m a world-renowned filmmaker who, for the past 9 years of my
            26-years career have specialized in creating incredible cinematic
            images no matter what the camera. Some of my most iconic work was
            created with Canon DSLRs. Sloping each project alongside the
            communities at the heart of her stories in order to ensure
            authenticity. <br /> <br />I can film your project whether it is a
            commercial advertise, a short film or a document film. I have
            expertise in these fields. Founded in 2007 by Faime located at
            Kisterdast, London.
          </p>
          <p className="text-autography text-[43px] pt-7">David Anderson</p>
        </div>
      </div>
    </div>
  );
};

export default About;
