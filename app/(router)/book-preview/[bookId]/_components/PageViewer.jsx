"use client";
import React, { useEffect, useState } from "react";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function PageViewer({ pageImage,name }) {
  const [slides, setSlides] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    const images = getPageImages(pageImage);
    setSlides(images);
    // console.log(slides);
  }, [pageImage]);

  function getPageImages(pageImage) {
    const images = pageImage.map((item, index) => {
      return pageImage?.[index];
    });
    return images;
  }

  return (
    <>
      <section className="min-h-screen sm:min-w-screen w-[800px] bg-purple-100 pt-2 py-12  lg:mt-1 lg:m-20">
        <div className="container">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-full w-full rounded-lg sm: w-100px"
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>

              <h1 className=" text-black font-serif text-[35px]">Page-{index+1}{" ["}{item?.name}{"]"} </h1>

                <div className="flex h-full w-full items-center justify-center">              
                  <Image
                    src={item?.image.url}
                    alt="image"
                    width={1000}
                    height={1000}
                    className="block h-full w-full "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail */}
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={12}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs mt-3 h-full w-full rounded-lg"
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <button className="flex h-full w-full items-center justify-center">
                  <Image
                    src={item?.image.url}
                    alt="image"
                    width={100}
                    height={100}
                    className="block h-full w-full object-cover"
                  />
                </button>
                <h1 className=" text-purple-800 font-semibold text-center text-[15px]">{" ["}{item?.name}{"]"} </h1>     
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      </>
  );
}

export default PageViewer;
