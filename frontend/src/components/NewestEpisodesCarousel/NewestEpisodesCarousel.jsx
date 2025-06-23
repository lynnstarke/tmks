import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './NewestEpisodesCarousel.css';

import PodcastEpisodeCard from '../PodcastEpisodeCard/PodcastEpisodeCard';

import episode1 from '../../assets/images/ep1.jpg';
import episode2 from '../../assets/images/ep2.jpg';
import episode3 from '../../assets/images/ep3.jpg';

const episodes = [
  { id: 1, date: '14 April 2025', subtitle: '“Ze gooien gewoon met een bidon...”', image: episode1 },
  { id: 2, date: '10 April 2025', subtitle: '“Max Verstappen had een restaurantje kunnen pakken...”', image: episode2 },
  { id: 3, date: '8 April 2025', subtitle: '“Rob telde niet mee!”', image: episode3 },
  { id: 4, date: '7 April 2025', subtitle: '“Nog een extra aflevering...”', image: episode3 },
  { id: 5, date: '6 April 2025', subtitle: '“De grote afsluiter van het seizoen!”', image: episode2 },
];

export default function NewestEpisodesCarousel() {
  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-heading">Newest Episodes</h2>

      {/* clipper only hides slides, not arrows */}
      <div className="swiper-clipper">
        <Swiper
          modules={[Navigation]}
          navigation={true}            // ← built-in arrows
          slidesPerView={3}            // default desktop
          spaceBetween={10}
          breakpoints={{
            0:   { slidesPerView: 1, spaceBetween: 8 },   // phones
            768: { slidesPerView: 3, spaceBetween: 10 }   // tablets & up
          }}
          className="podcast-swiper"
        >
          {episodes.map(ep => (
            <SwiperSlide key={ep.id}>
              <PodcastEpisodeCard
                image={ep.image}
                date={ep.date}
                subtitle={ep.subtitle}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
