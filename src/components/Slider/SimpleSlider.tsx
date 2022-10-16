import { useRef} from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import SlideService from "services/SlideService";
// SwiperCore.use([Keyboard, Pagination, Navigation, Autoplay]);
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Pagination, Navigation, Autoplay } from "swiper";

const SimpleSlider = ({ slides }: any) => {
  const swiperRef = useRef();
  // const [slides, setSlides] = useState([]);
  const handleMouseEnter = () => {
    // swiperRef.current.swiper.autoplay.stop();
  };

  // useEffect(() => {
  //   getSlides();

  //   return () => {
  //     setSlides([]);
  //   };
  // }, []);

  return (
    <div className="row">
      <Swiper
        onMouseEnter={handleMouseEnter}
        // ref={swiperRef}
        // slidesPerView={1}
        // loop={true}
        // spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        // modules={[Pagination, Navigation]}

        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}
        // centeredSlides={true}
        className={styles.simpleSwiper}
        slidesPerView={1}
        // spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // spaceBetween={30}
        // centeredSlides={true}
        // pagination={{
        //   clickable: true,
        // }}
        // lazy={true}
        // navigation={true}
        // modules={[ Pagination, Navigation]}
        // className="mySwiper"

        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // modules={[Autoplay, Pagination]}
        // className="mySwiper"
        spaceBetween={20}
        // slidesPerView={3}
        // loop={true}
        // breakpoints={{
        //   599: {
        //     slidesPerView: 2,
        //     spaceBetween: 40,
        //   },
        //   1023: {
        //     slidesPerView: 3,
        //     spaceBetween: 60,
        //   },
        // }}
      >
        {slides.map((e: any) => (
          <SwiperSlide key={e._id}>
            <Image
              // style={{ width: "100%", height: "100%" }}
              src={e.url}
              width="1350px"
              height="600"
              // objectFit="contain"
              // layout="fill"
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide >
          <Image
            style={{ width: "100%", height: "100%" }}
            src={"https://swiperjs.com/demos/images/nature-1.jpg"}
            width="1350px"
            height="600"
            // objectFit="contain"
            // layout="fill"
          />
        </SwiperSlide>
        <SwiperSlide >
          <Image
            style={{ width: "100%", height: "100%" }}
            src={"https://swiperjs.com/demos/images/nature-1.jpg"}
            width="1350px"
            height="600"
            // objectFit="contain"
            // layout="fill"
          />
        </SwiperSlide>
        <SwiperSlide >
          <Image
            style={{ width: "100%", height: "100%" }}
            src={"https://swiperjs.com/demos/images/nature-1.jpg"}
            width="1350px"
            height="600"
            // objectFit="contain"
            // layout="fill"
          />
        </SwiperSlide>
        <SwiperSlide >
          <Image
            style={{ width: "100%", height: "100%" }}
            src={"https://swiperjs.com/demos/images/nature-1.jpg"}
            width="1350px"
            height="600"
            // objectFit="contain"
            // layout="fill"
          />
        </SwiperSlide>
        <SwiperSlide >
          <Image
            style={{ width: "100%", height: "100%" }}
            src={"https://swiperjs.com/demos/images/nature-1.jpg"}
            width="1350px"
            height="600"
            // objectFit="contain"
            // layout="fill"
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
export default SimpleSlider;
