import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function MySwiper() {
  return (
    <div className="mt-8">
      <Swiper
        freeMode={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 3
          },
          300: {
            slidesPerView: 1
          }
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="border border-zinc-300 rounded-md h-72 px-4 flex flex-col justify-start bg-white">
            <div className="w-full flex justify-center py-8">
              <Image
                src="/images/produtos/1.png"
                alt=""
                width={152}
                height={136}
              />
            </div>
            <div>
              <h4 className="text-xl text-my2">Motobomba de alta pressão Schneider e Famac</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-zinc-300 rounded-md h-72 px-4 flex flex-col justify-start bg-white">
            <div className="w-full flex justify-center py-8">
              <Image
                src="/images/produtos/2.png"
                alt=""
                width={152}
                height={136}
              />
            </div>
            <div>
              <h4 className="text-xl text-my2">Motores Trifásicos de 0.16 a 900cv</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-zinc-300 rounded-md h-72 px-4 flex flex-col justify-start bg-white">
            <div className="w-full flex justify-center py-8">
              <Image
                src="/images/produtos/3.png"
                alt=""
                width={152}
                height={136}
              />
            </div>
            <div>
              <h4 className="text-xl text-my2">Drives e chaves de partida inteligentes</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-zinc-300 rounded-md h-72 px-4 flex flex-col justify-start bg-white">
            <div className="w-full flex justify-center py-8">
              <Image
                src="/images/produtos/4.png"
                alt=""
                width={152}
                height={136}
              />
            </div>
            <div>
              <h4 className="text-xl text-my2">Motores monofásicos IP21 e blindados de 0,5 a 15CV</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
