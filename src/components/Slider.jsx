import img from '../assets/images/remote1.png'
import img1 from '../assets/images/key1.png'
import img2 from '../assets/images/led1.png'
import img3 from '../assets/images/chair1.png'
import stars from '../assets/images/star1.png'
import stars1 from '../assets/images/star2.png'
import stars2 from '../assets/images/star3.png'
import stars3 from '../assets/images/star4.png'

import ProductCard from "../components/ProductCard";
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';


function Something({index}){
    return <div className='w-40 h-96 border-r-8'>{index}</div>
}

export default function Slider() {
  return (
    <div>
         <Swiper
      spaceBetween={50} 
      slidesPerView={4}
      modules={[Navigation, Pagination, Autoplay, Scrollbar]}
      autoplay={{delay: 2000, pauseOnMouseEnter: true}}
      pagination={{ clickable: true}}
      navigation
      scrollbar={{ draggable: true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> <ProductCard percent="-40%" image={img} text="HAVIT HV-G92 Gamepad" discount="$120" actual="$160" star={stars}  /> </SwiperSlide>
      <SwiperSlide> <ProductCard percent="-35%" image={img1} text="AK -900 Wired Keyboard" discount="$960" actual="$1160" star={stars1} /> </SwiperSlide>
      <SwiperSlide> <ProductCard percent="-30%" image={img2} text="IPS LCD Gaming Monitor" discount="$370" actual="$400" star={stars2} /> </SwiperSlide>
      <SwiperSlide> <ProductCard percent="-25%" image={img3} text="S-Series Comfort Chair " discount="$375" actual="400" star={stars3} /> </SwiperSlide>
      <SwiperSlide> <ProductCard percent="-40%" image={img} text="HAVIT HV-G92 Gamepad" discount="$120" actual="$160" star={stars} /> </SwiperSlide>
      <SwiperSlide> <ProductCard percent="-35%" image={img1} text="AK -900 Wired Keyboard" discount="$960" actual="$1160" star={stars1} /> </SwiperSlide>
      <SwiperSlide> <ProductCard percent="-30%" image={img2} text="IPS LCD Gaming Monitor" discount="$370" actual="$400" star={stars2} /> </SwiperSlide>
     
      
    </Swiper>

    </div>
  )
}
