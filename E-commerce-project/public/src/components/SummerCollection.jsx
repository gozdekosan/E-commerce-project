import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const slidesContent = [
  {
    id: 1,
    title: "Vita Classic Product",
    subtitle: "SUMMER 2020",
    description:
      "We know how large objects will act, We know how are objects will act, We know",
    price: "$16.48",
    bgColorClass: "bg-[#23856D]",
    buttonText: "ADD TO CART",
    buttonLink: "/cart",
  },
  {
    id: 2,
    title: "Vita Classic Product",
    subtitle: "SUMMER 2020",
    description:
      "We know how large objects will act, We know how are objects will act, We know",
    price: "$16.48",
    bgColorClass: "bg-[#23856D]",
    buttonText: "ADD TO CART",
    buttonLink: "/cart",
  },
];

const promoBlockContent = {
  title: "Part of the Neural Universe",
  subtitle: "SUMMER 2020",
  description: "We know how large objects will act, but things on a small scale.",
  buyNowLink: "/shop",
  readMoreLink: "/about",
};

export default function SummerCollection() {
  return (
    <div className="mb-10">
      

     <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={0}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  className="
    h-[38.4375rem]

    [&_.swiper-button-next]:!text-white
    [&_.swiper-button-prev]:!text-white

    [&_.swiper-button-next:after]:!text-white
    [&_.swiper-button-prev:after]:!text-white

    [&_.swiper-pagination-bullet]:!bg-white
    [&_.swiper-pagination-bullet]:!opacity-50
    [&_.swiper-pagination-bullet]:!w-12
    [&_.swiper-pagination-bullet]:!h-2
    [&_.swiper-pagination-bullet]:!rounded-none
    [&_.swiper-pagination-bullet]:!m-0        /* boşlukları kaldırır */

    [&_.swiper-pagination-bullet-active]:!opacity-100
  "
>

        {slidesContent.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`relative h-full ${slide.bgColorClass} flex items-center justify-center overflow-hidden`}
            >
              <div className="max-w-[71.25rem] mx-auto w-full h-full flex items-center px-6 relative z-10">
                <div className="w-1/2 text-white">
                  <p className="text-base font-bold tracking-wide mb-8">
                    {slide.subtitle}
                  </p>

                  <h2 className="text-[3.625rem] font-bold mb-8 leading-tight">
                    {slide.title}
                  </h2>

                  <p className="text-xl mb-8 max-w-md">
                    {slide.description}
                  </p>

                  <div className="flex items-center gap-8">
                    <span className="text-2xl font-bold">{slide.price}</span>

                    <Link
                      to={slide.buttonLink}
                      className="bg-[#2DC071] hover:bg-[#28a862] text-white font-bold py-4 px-10 rounded transition duration-300"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-0 h-full w-1/2 flex items-end justify-end">
                <img
                  src="/images/summer-collection-1.png"
                  alt={slide.title}
                  className="h-full w-auto object-contain object-bottom"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="max-w-[71.25rem] mx-auto flex flex-col md:flex-row items-stretch my-16 px-4 sm:px-6 lg:px-8 h-auto md:h-[37.5rem] gap-6 md:gap-0">
        <div className="w-full md:w-2/5 flex items-stretch">
          <img
            src="/images/summer-collection-2.png"
            alt="Promo image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-3/5 flex flex-col justify-center md:pl-24 bg-white px-4 sm:px-6 py-6 md:py-0 text-center md:text-left">
          <p className="text-sm sm:text-base font-bold text-[#BDBDBD] tracking-wide mb-4 sm:mb-6">
            {promoBlockContent.subtitle}
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#252B42] mb-4 sm:mb-6 leading-snug">
            {promoBlockContent.title}
          </h2>

          <p className="text-base sm:text-lg text-[#737373] mb-4 sm:mb-6 max-w-md mx-auto md:mx-0">
            {promoBlockContent.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-2.5 sm:gap-4">
            <Link
              to={promoBlockContent.buyNowLink}
              className="bg-[#2DC071] text-white hover:bg-[#28a862] font-bold py-3 sm:py-4 px-6 sm:px-10 rounded transition duration-300"
            >
              BUY NOW
            </Link>

            <Link
              to={promoBlockContent.readMoreLink}
              className="text-[#2DC071] border-2 border-[#2DC071] hover:bg-[#2DC071] hover:text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded transition duration-300"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
