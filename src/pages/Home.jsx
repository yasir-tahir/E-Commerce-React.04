 import Button from "../components/Button";
import Category from "../components/Category";
import CoverSlide from "../components/CoverSlide";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
 import Slider from "../components/Slider";



export default function Home() {
  return (
    <div className="container" >
      <CoverSlide />    
      <SectionTitle text="Today's" />
      <Slider />
      <Button />
      <SectionTitle text="Categories" main="Browse By Category" />
      <Category />  
        </div>
  )
}
