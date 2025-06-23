import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './ShortsHome.css';

import ShortsCard from '../ShortsCard/ShortsCard';

import short1 from '../../assets/images/shorts.png';
import short2 from '../../assets/images/shorts.png';
import short3 from '../../assets/images/shorts.png';
import short4 from '../../assets/images/shorts.png';
import short5 from '../../assets/images/shorts.png';

const shorts = [
  { id: 1, image: short1, quote: '“Aan mijn niet mee-verdedigende spitsje.”' },
  { id: 2, image: short2, quote: '“Waarom laat jij je in godsnaam culinair...”' },
  { id: 3, image: short3, quote: '“Eigenlijk ben jij verbazingwekkend.”' },
  { id: 4, image: short4, quote: '“Hij is zijn medicijnen vergeten.”' },
  { id: 5, image: short5, quote: '“Zou ik dat ook kunnen?”' },
];

export default function ShortsHome() {
  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-heading">Nieuwste Shorts</h2>

      {/* arrows */}
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />

      <div className="swiper-clipper">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          }}
          slidesPerView={5}
          spaceBetween={10}
          breakpoints={{
            0:   { slidesPerView: 1, spaceBetween: 8 },
            768: { slidesPerView: 5, spaceBetween: 10 }
          }}
          className="shorts-swiper"
        >
          {shorts.map(sh => (
            <SwiperSlide key={sh.id}>
              <ShortsCard image={sh.image} quote={sh.quote} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
);
}
