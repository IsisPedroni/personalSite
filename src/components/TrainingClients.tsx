import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { CarouselPauseButton } from './CarouselPauseButton';
import { ModalPortal } from './ModalPortal';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useInertBackground } from '../hooks/useInertBackground';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { getSlickDotsProps } from '../utils/slickA11y';
import video1 from '../assets/2 (1).mp4';
import video2 from '../assets/2 (2).mp4';
import video3 from '../assets/2 (3).mp4';
import video4 from '../assets/2 (4).mp4';
import video5 from '../assets/2 (5).mp4';
import video3_1 from '../assets/3 (1).mp4';
import video3_2 from '../assets/3 (2).mp4';

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
      aria-label="Next training video"
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
      aria-label="Previous training video"
    >
      <ChevronLeft className="w-6 h-6 text-gray-800" aria-hidden="true" />
    </button>
  );
}

const videos = [
  { id: 1, video: video1, label: 'Client training session 1', description: 'Video of Duda Bueno coaching a client through a strength training workout.' },
  { id: 2, video: video2, label: 'Client training session 2', description: 'Video of a one-on-one personal training session at the gym.' },
  { id: 3, video: video3, label: 'Client training session 3', description: 'Video showing guided exercises and form correction during training.' },
  { id: 4, video: video4, label: 'Client training session 4', description: 'Video of a client performing resistance training with coach supervision.' },
  { id: 5, video: video5, label: 'Client training session 5', description: 'Video of an intense personal training workout session.' },
  { id: 6, video: video3_1, label: 'Client training session 6', description: 'Video of Duda Bueno training a client with free weights.' },
  { id: 7, video: video3_2, label: 'Client training session 7', description: 'Video showing a personalized fitness coaching session in San Diego.' },
];

export function TrainingClients() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[number] | null>(null);
  const [paused, setPaused] = useState(false);
  const [slideAnnouncement, setSlideAnnouncement] = useState('');
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<Slider>(null);
  const prefersReducedMotion = useReducedMotion();

  useFocusTrap(dialogRef, !!selectedVideo);
  useInertBackground(!!selectedVideo);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedVideo) {
        closeVideo();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedVideo]);

  useEffect(() => {
    if (selectedVideo) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  useEffect(() => {
    if (prefersReducedMotion) {
      sliderRef.current?.slickPause();
      setPaused(true);
    }
  }, [prefersReducedMotion]);

  const openVideo = (item: (typeof videos)[number]) => {
    triggerRef.current = document.activeElement as HTMLElement;
    setSelectedVideo(item);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !prefersReducedMotion,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_current: number, next: number) => {
      setSlideAnnouncement(`Showing training video ${next + 1} of ${videos.length}`);
    },
    ...getSlickDotsProps(videos.length, 'training video'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <section id="training-clients" tabIndex={-1} aria-labelledby="training-clients-heading" className="py-20 px-6 bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="training-clients-heading" className="mb-4 text-5xl md:text-6xl font-black text-white" style={{ fontSize: '1.3rem', fontWeight: '500' }}>
              Training clients
            </h2>
            <div className="mt-4">
              <CarouselPauseButton
                paused={paused}
                onToggle={togglePause}
                label="training video carousel"
                variant="dark"
              />
            </div>
            <div aria-live="polite" aria-atomic="true" className="sr-only">
              {slideAnnouncement}
            </div>
          </div>

          <div className="relative overflow-hidden training-clients-carousel" role="region" aria-label="Client training videos" aria-roledescription="carousel">
            <style>{`
              .training-clients-carousel .slick-slide > div {
                padding: 0;
                height: 100%;
              }
              .training-clients-carousel .slick-slide {
                margin: 0;
                height: auto;
              }
              .training-clients-carousel .slick-list {
                margin: 0;
                overflow: hidden;
              }
              .training-clients-carousel .slick-track {
                display: flex;
                align-items: stretch;
              }
              .training-clients-carousel .slick-slider {
                position: relative;
                overflow: hidden;
              }
            `}</style>
            <Slider ref={sliderRef} {...settings}>
              {videos.map((item) => (
                <div key={item.id} className="outline-none carousel-slide-target">
                  <button
                    type="button"
                    className="relative w-full max-w-[400px] mx-auto rounded-2xl overflow-hidden shadow-lg cursor-pointer group block min-h-[400px]"
                    onClick={() => openVideo(item)}
                    aria-label={`Play ${item.label}`}
                  >
                    <video
                      src={item.video}
                      className="w-full h-full object-cover rounded-2xl pointer-events-none"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                      onLoadedMetadata={(e) => {
                        const video = e.currentTarget;
                        video.currentTime = 0.1;
                      }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl group-hover:bg-black/20 transition-colors">
                      <span className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-black" fill="black" aria-hidden="true" />
                      </span>
                    </span>
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {selectedVideo && (
        <ModalPortal>
          <div
            ref={dialogRef}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-dialog-title"
            aria-describedby="video-dialog-description"
            onClick={closeVideo}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <X className="w-8 h-8" aria-hidden="true" />
            </button>
            <div
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 id="video-dialog-title" className="sr-only">{selectedVideo.label}</h3>
              <p id="video-dialog-description" className="sr-only">{selectedVideo.description}</p>
              <video
                src={selectedVideo.video}
                className="w-full h-auto max-h-[70vh] rounded-lg"
                controls
                autoPlay
                muted
                playsInline
                aria-label={selectedVideo.label}
                aria-describedby="video-dialog-description"
              />
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
}
