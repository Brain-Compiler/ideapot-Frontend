import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import prevBtn from "../../../assets/left_arrow.png";
import nextBtn from "../../../assets/right_arrow.png";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";
import "./Swiper.scss";

const Index = () => {
  const swiperRef = useRef(null);

  return (
    <Swiper
      className="swiper-container"
      modules={[Autoplay, Pagination, Navigation]}
      centeredSlides={true}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
        type: "bullets",
      }}
      autoplay={{
        delay: 3500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      <SwiperSlide>
        <div className="slider-container slider1">Slider 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-container slider2">Slider 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-container slider3">Slider 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-container slider4">Slider 4</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-container slider5">Slider 5</div>
      </SwiperSlide>
      <div className="slider-btn">
        <img
          className="btn"
          onClick={() => swiperRef.current?.slidePrev()}
          src={prevBtn}
          alt="prevBtn"
        />
        <div></div>
        <img
          className="btn"
          onClick={() => swiperRef.current?.slideNext()}
          src={nextBtn}
          alt="nextBtn"
        />
      </div>
    </Swiper>
  );
};

export default Index;
