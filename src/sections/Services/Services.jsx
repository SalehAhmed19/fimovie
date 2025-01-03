import aicon1 from "../../assets/Icons/aicon1.webp";
import aicon2 from "../../assets/Icons/aicon2.webp";
import aicon3 from "../../assets/Icons/aicon3.webp";
import aicon4 from "../../assets/Icons/aicon4.webp";
import arrow from "../../assets/Icons/arrow.svg";
import image from "../../assets/images/img2.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      service: "Filming Services",
      description:
        "Consequently all her characters and our all film production service.",
      icon: aicon1,
    },
    {
      id: 2,
      service: "Motion Graphic",
      description:
        "Consequently all her characters and our all film production service.",
      icon: aicon2,
    },
    {
      id: 3,
      service: "Animation",
      description:
        "Consequently all her characters and our all film production service.",
      icon: aicon3,
    },
    {
      id: 4,
      service: "Filming Production",
      description:
        "Consequently all her characters and our all film production service.",
      icon: aicon4,
    },
  ];
  return (
    <div className="bg-[#202020]">
      <div className="relative">
        {/* Section 1 */}
        <div className="pl-20 py-20 w-1/2">
          <h3 className="text-[#FB6402] tracking-widest uppercase">Services</h3>
          <h2 className="font-bold text-5xl mt-5 mb-12">My Services</h2>

          <div className="grid grid-cols-2 gap-5">
            {services.map((service) => (
              <div className="p-5" key={service.id}>
                <img src={service.icon} alt="aicon1" className="w-6 mb-5" />
                <h3 className="text-2xl font-bold my-5">{service.service}</h3>
                <p className="text-[#ADADAD]">{service.description}</p>
                <button className="mt-10 border border-[#ADADAD] px-5 py-3 flex items-center">
                  View Details
                  <img src={arrow} alt="arrow" className="ml-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <img
          src={image}
          alt="image"
          className="absolute top-0 right-[-29%] h-full"
        />
      </div>
    </div>
  );
};

export default Services;
