import Footer from "../../Components/Footer";
import Gallery from "../../Components/Gallery";
import Map from "../../Components/Map";
import Promotion from "../../Components/Promotion";


const Home = () => {
  return (
    <div className="py-10">
      <Promotion></Promotion>
      <Gallery></Gallery>
      <Map></Map>
      <Footer></Footer>
      
    </div>
  );
};

export default Home;