import {Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./swipper.scss"


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
         delay: 2500,
         disableOnInteraction: false,
       }}
      >
        <SwiperSlide>
           <ServicSlider 
           image={"https://6tech.media/wp-content/uploads/slider/cache/c7a2daddd9c395a92487f0e625d6e95b/creative-agency-video-graphic-editor-expert-enhancing-footage-using-visual-timeline-advanced-software-asian-woman-sitting-office-workspace-working-film-project-scaled.jpg"}
            head={"Video Editing"} 
            typo={"Video EditingProfessional Video Editing for a Polished Look"}
            />
        </SwiperSlide>
        <SwiperSlide>
           <ServicSlider
           image={"https://6tech.media/wp-content/uploads/slider/cache/24c016f60ebb69ad3db130730271950e/african-american-blogger-reviewing-studio-light-camera-scaled.jpg"}
            head={"Youtube Automation"}
            typo={"Effortless YouTube Smart Automation, just relax and earn"}
           />
        </SwiperSlide>
        
        <SwiperSlide>
           <ServicSlider
           image={"https://6tech.media/wp-content/uploads/slider/cache/01eccff20005e8738979da1de3497056/aerial-view-businessman-using-computer-laptop-scaled.jpg"}
            head={"PR & Copywriting"}
            typo={"Compelling Copywriting and PR for Your Brand’s Voice"}
           />
        </SwiperSlide>

        <SwiperSlide>
           <ServicSlider
           image={"https://6tech.media/wp-content/uploads/slider/cache/554803a17dfc7c0119cbe49a6fc692f9/team-database-admins-analyzing-source-code-wall-screen-tv-comparing-errors-using-digital-tablet-busy-server-room-two-cloud-programers-debugging-algorithm-software-innovation-office-scaled.jpg"}
            head={"Web & Mobile Development"}
            typo={"Innovative Web & Mobile Development to Power Your Business"}
           />
        </SwiperSlide>

        <SwiperSlide>
           <ServicSlider
           image={"https://6tech.media/wp-content/uploads/slider/cache/492349392d8fc0fe99243ae7a221db32/happy-diverse-people-using-digital-devices-scaled.jpg"}
            head={"Social media & Branding"}
            typo={"Compelling Copywriting and PR for Your Brand’s Voice"}
           />
        </SwiperSlide>

      </Swiper>
        </div>
    )
}