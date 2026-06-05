import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useState, useEffect, useRef } from 'react';

import { CarouselPauseButton } from './CarouselPauseButton';

import { useReducedMotion } from '../hooks/useReducedMotion';

import { getSlickDotsProps } from '../utils/slickA11y';

import image5_1 from '../assets/5 (1).jpeg';

import image5_2 from '../assets/5 (2).jpeg';

import image5_3 from '../assets/5 (3).jpeg';

import image5_4 from '../assets/5 (4).jpeg';

import image5_5 from '../assets/5 (5).jpeg';

import image5_6 from '../assets/5 (6).jpeg';

import image5_7 from '../assets/5 (7).jpeg';

import image5_8 from '../assets/5 (8).jpeg';

import image5_9 from '../assets/5 (9).jpeg';

import image5_10 from '../assets/5 (10).jpeg';

import image5_11 from '../assets/5 (11).jpeg';



interface ArrowProps {

  onClick?: () => void;

}



function NextArrow({ onClick }: ArrowProps) {

  return (

    <button

      type="button"

      onClick={onClick}

      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white min-w-11 min-h-11 inline-flex items-center justify-center rounded-full shadow-md"

      style={{ right: '1rem' }}

      aria-label="Next bodybuilding photo"

    >

      <ChevronRight className="w-6 h-6 text-gray-800" aria-hidden="true" />

    </button>

  );

}



function PrevArrow({ onClick }: ArrowProps) {

  return (

    <button

      type="button"

      onClick={onClick}

      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white min-w-11 min-h-11 inline-flex items-center justify-center rounded-full shadow-md"

      style={{ left: '1rem' }}

      aria-label="Previous bodybuilding photo"

    >

      <ChevronLeft className="w-6 h-6 text-gray-800" aria-hidden="true" />

    </button>

  );

}



const myBuilder = [

  { id: 1, image: image5_1, alt: 'Duda Bueno bodybuilding competition photo — early career' },

  { id: 2, image: image5_2, alt: 'Duda Bueno on stage at bodybuilding competition' },

  { id: 3, image: image5_3, alt: 'Duda Bueno posing during bodybuilding competition' },

  { id: 4, image: image5_4, alt: 'Duda Bueno bodybuilding stage presentation' },

  { id: 5, image: image5_5, alt: 'Duda Bueno competition physique — front pose' },

  { id: 6, image: image5_6, alt: 'Duda Bueno bodybuilding competition moment' },

  { id: 7, image: image5_7, alt: 'Duda Bueno on stage — side pose' },

  { id: 8, image: image5_8, alt: 'Duda Bueno bodybuilding years — backstage' },

  { id: 9, image: image5_9, alt: 'Duda Bueno competition preparation photo' },

  { id: 10, image: image5_10, alt: 'Duda Bueno bodybuilding stage performance' },

  { id: 11, image: image5_11, alt: 'Duda Bueno bodybuilding career highlight' },

];



export function MyBuilder() {

  const [slidesToShow, setSlidesToShow] = useState(3);

  const [paused, setPaused] = useState(false);

  const [slideAnnouncement, setSlideAnnouncement] = useState('');

  const sliderRef = useRef<Slider>(null);

  const prefersReducedMotion = useReducedMotion();



  useEffect(() => {

    const updateSlidesToShow = () => {

      const width = window.innerWidth;

      if (width < 800) {

        setSlidesToShow(1);

      } else if (width < 1024) {

        setSlidesToShow(2);

      } else {

        setSlidesToShow(3);

      }

    };



    updateSlidesToShow();

    window.addEventListener('resize', updateSlidesToShow);

    return () => window.removeEventListener('resize', updateSlidesToShow);

  }, []);



  useEffect(() => {

    if (prefersReducedMotion) {

      sliderRef.current?.slickPause();

      setPaused(true);

    }

  }, [prefersReducedMotion]);



  const togglePause = () => {

    if (paused) {

      sliderRef.current?.slickPlay();

    } else {

      sliderRef.current?.slickPause();

    }

    setPaused(!paused);

  };



  const settings = {

    dots: true,

    infinite: true,

    speed: prefersReducedMotion ? 0 : 500,

    slidesToShow,

    slidesToScroll: 1,

    autoplay: !prefersReducedMotion,

    autoplaySpeed: 4000,

    nextArrow: <NextArrow />,

    prevArrow: <PrevArrow />,

    beforeChange: (_current: number, next: number) => {

      setSlideAnnouncement(`Showing bodybuilding photo ${next + 1} of ${myBuilder.length}`);

    },

    ...getSlickDotsProps(myBuilder.length, 'bodybuilding photo'),

  };



  return (

    <section id="bodybuilding" tabIndex={-1} aria-labelledby="bodybuilding-heading" className="py-20 px-6 bg-white overflow-hidden">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">

          <h2 id="bodybuilding-heading" className="mb-2 text-5xl md:text-6xl font-black" style={{ fontSize: '1.3rem', fontWeight: '500' }}>

            Bodybuilding years

          </h2>

          <div className="mt-4">

            <CarouselPauseButton

              paused={paused}

              onToggle={togglePause}

              label="bodybuilding photo carousel"

            />

          </div>

          <div aria-live="polite" aria-atomic="true" className="sr-only">

            {slideAnnouncement}

          </div>

        </div>



        <div className="relative overflow-hidden mybuilder-carousel" role="region" aria-label="Bodybuilding photo carousel" aria-roledescription="carousel">

          <style>{`

            .mybuilder-carousel .slick-slide > div {

              padding: 0 16px;

              height: 100%;

            }

            .mybuilder-carousel .slick-slide {

              margin: 0;

              height: 550px;

            }

            .mybuilder-carousel .slick-list {

              margin: 0 -16px;

              overflow: hidden;

            }

            .mybuilder-carousel .slick-track {

              display: flex;

              align-items: stretch;

            }

            .mybuilder-carousel .slick-slide > div > div {

              height: 100%;

            }

            .mybuilder-carousel .slick-slider {

              position: relative;

              overflow: hidden;

            }

          `}</style>

          <Slider ref={sliderRef} {...settings}>

            {myBuilder.map((item) => (

              <div key={item.id} className="outline-none">

                <div className="relative h-[550px] w-full max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg" style={{ maxWidth: '600px', height: '650px' }}>

                  <img

                    src={item.image}

                    alt={item.alt}

                    className="w-full h-full object-cover rounded-2xl"

                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}

                    loading="lazy"

                    decoding="async"

                  />

                </div>

              </div>

            ))}

          </Slider>

        </div>

      </div>

    </section>

  );

}

