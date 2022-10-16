import Product from "components/Product";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductType } from "types";

const RelatedProducts = ({ products }: { products: Array<ProductType> }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div>
      {!!products.length && (
        <>
          <h3 className="my-4 font-bold text-sm uppercase text-gray-700">
            Productos relacionados
          </h3>
          <div className="h-100">
            {domLoaded && (
              <Swiper
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay, Pagination]}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                {products.map((e) => (
                  <SwiperSlide key={e._id}>
                    <Product product={e}></Product>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RelatedProducts;
