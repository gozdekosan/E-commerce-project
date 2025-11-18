import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; 
import { Link } from "react-router-dom";


const newCollectionSlides = [
  {
    id: 1,
    subtitle: "SUMMER 2025",
    title: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
    buttonText: "SHOP NOW",
    buttonLink: "/shop",
    bgImage: "/images/new-collection.png",  
  },
  {
    id: 2,
    subtitle: "SUMMER 2025",
    title: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
    buttonText: "SHOP NOW",
    buttonLink: "/shop",
    bgImage: "/images/new-collection.png", 
  },
];

export default function NewCollection() {
  return (
    <section className="mb-10">

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
          [&_.swiper-pagination-bullet]:!m-0       

          [&_.swiper-pagination-bullet-active]:!opacity-100
        "
      >
        {newCollectionSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full flex flex-col justify-center items-start px-12 md:px-8 lg:px-12"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center top", 
              }}
            >
              <h2 className="text-base mb-4 font-bold text-white">
                {slide.subtitle}
              </h2>

              <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                {slide.title}
              </h1>

              <p className="mb-8 text-[#FAFAFA] text-xl max-w-lg">
                {slide.description}
              </p>

              <Link 
                to={slide.buttonLink}
                className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition text-lg font-semibold"
              >
                {slide.buttonText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}