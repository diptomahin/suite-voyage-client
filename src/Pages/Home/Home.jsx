import Footer from "../../Components/Footer";
import Gallery from "../../Components/Gallery";
import Map from "../../Components/Map";
import NewsLetter from "../../Components/NewsLetter";
import Promotion from "../../Components/Promotion";


const Home = () => {
  return (
    <div className="py-10">
      <Promotion></Promotion>
      <Gallery></Gallery>
      <NewsLetter></NewsLetter>
      <Map></Map>
      <Footer></Footer>
      
    </div>
  );
};

export default Home;