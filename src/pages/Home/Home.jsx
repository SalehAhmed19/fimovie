import Banner from "../../components/Isolated/Banner/Banner";
import Navbar from "../../components/shared/Navbar/Navbar";
import banner from "../../assets/images/banner.png";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}
      className="h-screen"
    >
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
