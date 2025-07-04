import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ShortsHome.css';

import ShortsCard from '../ShortsCard/ShortsCard';
import arrowIcon from '../../assets/images/arrow.svg';

import short1 from '../../assets/images/shorts.png';
import short2 from '../../assets/images/shorts2.png';
import short3 from '../../assets/images/shorts3.png';
import short4 from '../../assets/images/shorts4.png';
import short5 from '../../assets/images/shorts5.png';
import short6 from '../../assets/images/shorts6.png';
import short7 from '../../assets/images/shorts7.png';
import short8 from '../../assets/images/shorts8.png';
import short9 from '../../assets/images/shorts9.png';
import short10 from '../../assets/images/shorts10.png';

const shorts = [
  {
    id: 1,
    image: short1,
    quote: '"Aan mijn niet mee-verdedigende spitsje."',
    youtubeUrl: 'https://www.youtube.com/shorts/EMIZq0Ss-rY',
    views: 40782,
  },
  {
    id: 2,
    image: short2,
    quote: '"Waarom laat jij je in godsnaam culinair..."',
    youtubeUrl: 'https://www.youtube.com/shorts/OIM3tjGVo0s',
    views: 29585,
  },
  {
    id: 3,
    image: short3,
    quote: '"Eigenlijk ben jij verbazingwekkend."',
    youtubeUrl: 'https://www.youtube.com/shorts/CF5e0HfqiQU',
    views: 95235,
  },
  {
    id: 4,
    image: short4,
    quote: '"Hij is zijn medicijnen vergeten."',
    youtubeUrl: 'https://www.youtube.com/shorts/CF5e0HfqiQU',
    views: 28634,
  },
  {
    id: 5,
    image: short5,
    quote: '"Zou ik dat ook kunnen?"',
    youtubeUrl: 'https://www.youtube.com/shorts/gMeM1i3JkQE',
    views: 43014,
  },
  {
    id: 6,
    image: short6,
    quote: '""Wat is dat voor n VIESPEUK""',
    youtubeUrl: 'https://www.youtube.com/shorts/GDvAPFJBUts',
    views: 44183,
  },
  {
    id: 7,
    image: short7,
    quote: '"In jezelf geloven"',
    youtubeUrl: 'https://www.youtube.com/shorts/a-6IwkcZiLc',
    views: 29479,
  },
  {
    id: 8,
    image: short8,
    quote: '"Dat zijn wel de twee zonnetjes in huis"',
    youtubeUrl: 'https://www.youtube.com/shorts/gzyabwpSyZI',
    views: 23229,
  },
  {
    id: 9,
    image: short9,
    quote: '"Jan is aan de verkeerde kant gaan rijden"',
    youtubeUrl: 'https://www.youtube.com/shorts/f8x9AWkQ1Vg',
    views: 27968,
  },
  {
    id: 10,
    image: short10,
    quote: '"Er zit NUL gevoel in! NUL!"',
    youtubeUrl: 'https://www.youtube.com/shorts/-AwnrDSYX-I',
    views: 14807,
  },
];

// Custom arrows with better accessibility and state management
function NextArrow({ onClick, className }) {
  const isDisabled = className?.includes('slick-disabled');

  return (
    <button
      className={`custom-arrow next-arrow ${className || ''}`}
      onClick={onClick}
      disabled={isDisabled}
      aria-label="Next slide"
      type="button"
    >
      <img src={arrowIcon} alt="" role="presentation" />
    </button>
  );
}

function PrevArrow({ onClick, className }) {
  const isDisabled = className?.includes('slick-disabled');

  return (
    <button
      className={`custom-arrow prev-arrow ${className || ''}`}
      onClick={onClick}
      disabled={isDisabled}
      aria-label="Previous slide"
      type="button"
    >
      <img src={arrowIcon} alt="" role="presentation" className="flip-horizontal" />
    </button>
  );
}

export default function ShortsHome() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  // Dynamic responsive settings based on screen size
  const getResponsiveSettings = () => {
    const width = window.innerWidth;
    if (width <= 480) return 1;
    if (width <= 768) return 2;
    if (width <= 1024) return 3;
    if (width <= 1300) return 4;
    return 5;
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(getResponsiveSettings());
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
  };

  // Enhanced inline video playback with better UX
  const handlePlayInline = (shortData) => {
    console.log('Playing inline:', shortData);
  };

  // Enhanced YouTube navigation with analytics
  const handleNavigateToYouTube = (youtubeUrl) => {
    console.log('Opening YouTube:', youtubeUrl);

    // Opens YouTube in a new tab with better security
    const newWindow = window.open(youtubeUrl, '_blank', 'noopener,noreferrer');

    // Fallback if popup blocked
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      console.warn('Popup blocked, redirecting in same tab');
      window.location.href = youtubeUrl;
    }

  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      sliderRef.current?.slickPrev();
    } else if (event.key === 'ArrowRight') {
      sliderRef.current?.slickNext();
    }
  };

  return (
    <div className="shorts-wrapper" onKeyDown={handleKeyDown} tabIndex={0}>
      <h2 className="shorts-heading">Nieuwste Shorts</h2>
      <Slider ref={sliderRef} {...settings}>
        {shorts.map((s) => (
          <div key={s.id} className="shorts-slide-content">
            <ShortsCard
              image={s.image}
              quote={s.quote}
              views={s.views}
              timeAgo={s.timeAgo}
              youtubeUrl={s.youtubeUrl}
              onPlayInline={() => handlePlayInline(s)}
              onNavigateToYouTube={handleNavigateToYouTube}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
