import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useState } from 'react';
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
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full"
      style={{ right: '1rem' }}
      aria-label="Próximo"
    >
      <ChevronRight className="w-6 h-6 text-gray-800" />
    </button>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full"
      style={{ left: '1rem' }}
      aria-label="Anterior"
    >
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    </button>
  );
}

const videos = [
  { id: 1, video: video1 },
  { id: 2, video: video2 },
  { id: 3, video: video3 },
  { id: 4, video: video4 },
  { id: 5, video: video5 },
  { id: 6, video: video3_1 },
  { id: 7, video: video3_2 },
];

export function TrainingClients() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
      <section className="py-20 px-6 bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-5xl md:text-6xl font-black text-white" style={{ fontSize: '1.3rem', fontWeight: '500' }}>Training clients</h2>
          </div>

          <div className="relative overflow-hidden training-clients-carousel">
            <style>{`
              .training-clients-carousel .slick-slide > div {
                padding: 0 8px;
                height: 100%;
              }
              .training-clients-carousel .slick-slide {
                margin: 0;
                height: 400px;
              }
              .training-clients-carousel .slick-list {
                margin: 0 -8px;
                overflow: hidden;
              }
              .training-clients-carousel .slick-track {
                display: flex;
                align-items: stretch;
              }
              .training-clients-carousel .slick-slide > div > div {
                height: 100%;
              }
              .training-clients-carousel .slick-slider {
                position: relative;
                overflow: hidden;
              }
              .training-clients-carousel .slick-dots li button:before {
                color: white;
              }
            `}</style>
            <Slider {...settings}>
              {videos.map((item) => (
                <div key={item.id} className="outline-none">
                  <div 
                    className="relative h-[400px] w-full max-w-[400px] mx-auto rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                    style={{ maxWidth: '400px', height: '400px' }}
                    onClick={() => setSelectedVideo(item.video)}
                  >
                    <video
                      src={item.video}
                      className="w-full h-full object-cover rounded-2xl"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl group-hover:bg-black/20 transition-colors">
                      <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-black" fill="black" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedVideo(null)}
            aria-label="Fechar vídeo"
          >
            <ChevronLeft className="w-8 h-8 rotate-180" />
          </button>
          <div 
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              className="w-full h-auto max-h-[70vh] rounded-lg"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}

