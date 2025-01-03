import Banner from "../../components/Isolated/Banner/Banner";
import Navbar from "../../components/shared/Navbar/Navbar";
import About from "../About/About";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default Home;
