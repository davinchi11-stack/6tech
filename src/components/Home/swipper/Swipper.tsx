import {Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./swipper.scss"
import you from '../../../assets/you-tube.jpg'
import copy from '../../../assets/copy.jpg'
import web from '../../../assets/web (1).jpg'
import vid from "../../../assets/vid (1).jpg"
import social from "../../../assets/social (1).jpg"
import { ServicSlider } from './ServiceSlider';

export function Swipepr () {
    

    return (
        <div className="swipper-main">
         <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        autoplay={{
         delay: 3000,
         disableOnInteraction: false,
       }}
      >

         <SwiperSlide>
           <ServicSlider
           image={you}
            head={"Youtube Automation"}
            typo={"Effortless YouTube Smart Automation, just relax and earn"}
            path={"youtube"}
          />
        </SwiperSlide>

        <SwiperSlide>
           <ServicSlider 
           image={vid}
            head={"Video Editing"} 
            typo={"Video EditingProfessional Video Editing for a Polished Look"}
            path={"editing"}
            />
        </SwiperSlide>
      
        <SwiperSlide>
           <ServicSlider
           image={social}
            head={"Social media & Branding"}
            typo={"Compelling Copywriting and PR for Your Brand’s Voice"}
             path={"social-branding"}
           />
        </SwiperSlide>
        
        <SwiperSlide>
           <ServicSlider
           image={copy}
            head={"PR & Copywriting"}
            typo={"Compelling Copywriting and PR for Your Brand’s Voice"}
            path={"copy-writing"}
           />
        </SwiperSlide>

        <SwiperSlide>
           <ServicSlider
           image={web}
            head={"Web & Mobile Development"}
            typo={"Innovative Web & Mobile Development to Power Your Business"}
            path={"tech"}
          />
        </SwiperSlide>

       

      </Swiper>
        </div>
    )
}