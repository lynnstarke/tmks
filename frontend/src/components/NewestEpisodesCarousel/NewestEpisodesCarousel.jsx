import React, { useState, useRef, useEffect } from 'react';
import './NewestEpisodesCarousel.css';
import PodcastEpisodeCard from '../PodcastEpisodeCard/PodcastEpisodeCard';

import episode1 from '../../assets/images/ep1.jpg';
import episode2 from '../../assets/images/ep2.jpg';
import episode3 from '../../assets/images/ep3.jpg';
import arrowIcon from '../../assets/images/arrow.svg';

const ArrowButton = ({ direction, onClick, disabled }) => (
  <button
    className={`carousel-arrow carousel-arrow--${direction} ${disabled ? 'carousel-arrow--disabled' : ''}`}
    onClick={onClick}
    disabled={disabled}
    aria-label={`${direction === 'left' ? 'Previous' : 'Next'} episode`}
  >
    <img
      src={arrowIcon}
      alt={direction === 'left' ? 'Previous' : 'Next'}
      className={direction === 'left' ? 'carousel-arrow__icon--flipped' : 'carousel-arrow__icon'}
    />
  </button>
);

export default function ImprovedEpisodesCarousel() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const episodes = [
    { id: 1, date: '14 April 2025', subtitle: 'Ze gooien gewoon met een bidon...', image: episode1 },
    { id: 2, date: '10 April 2025', subtitle: 'Max Verstappen had een restaurantje kunnen pakken...', image: episode2 },
    { id: 3, date: '8 April 2025', subtitle: 'Rob telde niet mee!', image: episode3 },
    { id: 4, date: '7 April 2025', subtitle: 'Nog een extra aflevering...', image: episode3 },
    { id: 5, date: '6 April 2025', subtitle: 'De grote afsluiter van het seizoen!', image: episode2 },
  ];

  const checkScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);

    // Debug: Log scroll position
    console.log('Scroll Left:', scrollLeft);

    // Find which card is most centered
    const containerCenter = scrollLeft + clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const cardLeft = child.offsetLeft;
      const cardCenter = cardLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      console.log(`Card ${index}: Left=${cardLeft}, Center=${cardCenter}, Distance=${distance}`);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    console.log('Closest Index:', closestIndex);
    setCurrentIndex(closestIndex);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.children[0]?.offsetWidth || 0;
    const gap = parseInt(getComputedStyle(container).gap) || 24;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.children[0]?.offsetWidth || 0;
    const gap = parseInt(getComputedStyle(container).gap) || 24;

    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);

      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  return (
    <div className="improved-carousel">
      <h2 className="improved-carousel__heading">Newest Episodes</h2>

      <div className="improved-carousel__container">
        {/* Navigation Arrows */}
        <div className="improved-carousel__nav improved-carousel__nav--left">
          <ArrowButton
            direction="left"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
          />
        </div>

        <div className="improved-carousel__nav improved-carousel__nav--right">
          <ArrowButton
            direction="right"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
          />
        </div>

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          className="improved-carousel__track"
          onScroll={checkScrollButtons}
        >
          {episodes.map((episode) => (
            <div key={episode.id} className="improved-carousel__slide">
              <PodcastEpisodeCard
                image={episode.image}
                date={episode.date}
                subtitle={episode.subtitle}
              />
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="improved-carousel__dots">
          {episodes.map((_, index) => (
            <button
              key={index}
              className={`improved-carousel__dot ${
                currentIndex === index ? 'improved-carousel__dot--active' : ''
              }`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to episode ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
