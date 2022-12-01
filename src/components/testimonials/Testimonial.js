import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SwipeCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/core";
import Condueet from "../../images/Condueet_ImgID1.png";
import Onhova from "../../images/Onhova_ImgID1.png";
import StoryBay from "../../images/Storybay_ImgID1.png";
import styled from "styled-components";

SwipeCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const Testimonial = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCoverflow]}
      pagination={{ clickable: true }}
      navigation
      effect={"coverflow"}
      centeredSlides={true}
      slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
      loop={true}
      autoplay={{ delay: 1500 }}
      coverflowEffect={{
        rotate: 1,
        stretch: -42,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
    >
      <SwiperSlide className="swiperSlide">
        <SwiperSlideInner>
          <img
            style={{ width: "150px", height: "40px" }}
            src={Condueet}
            alt=""
          />
          <p style={{ marginTop: "10%" }}>
            I will always give a thumbs up to King Cabana for their top-notch
            organization and sponsor matching. They are professionals indeed and
            always a delight to work with.
          </p>
        </SwiperSlideInner>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <SwiperSlideInner>
          <img style={{ width: "150px", height: "50px" }} src={Onhova} alt="" />
          <p style={{ marginTop: "10%" }}>
            I will always give a thumbs up to King Cabana for their top-notch
            organization and sponsor matching. They are professionals indeed and
            always a delight to work with.
          </p>
        </SwiperSlideInner>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <SwiperSlideInner>
          <img
            style={{ width: "150px", height: "80px" }}
            src={StoryBay}
            alt=""
          />
          <p style={{ marginTop: "10%" }}>
            I will always give a thumbs up to King Cabana for their top-notch
            organization and sponsor matching. They are professionals indeed and
            always a delight to work with.
          </p>
        </SwiperSlideInner>
      </SwiperSlide>
    </Swiper>
  );
};

export const SwiperSlideInner = styled.div`
  width: 380px;
  height: 380px;
  border-radius: 5px;
  background-color: white;
  text-align: center;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Testimonial;
