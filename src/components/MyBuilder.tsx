import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

const myBuilder = [
  { id: 1, image: image5_1 },
  { id: 2, image: image5_2 },
  { id: 3, image: image5_3 },
  { id: 4, image: image5_4 },
  { id: 5, image: image5_5 },
  { id: 6, image: image5_6 },
  { id: 7, image: image5_7 },
  { id: 8, image: image5_8 },
  { id: 9, image: image5_9 },
  { id: 10, image: image5_10 },
  { id: 11, image: image5_11 },
];

export function MyBuilder() {
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
    <section className="py-20 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">My Builder</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos mais recentes e veja como transformamos 
            ideias em construções excepcionais
          </p>
        </div>

        <div className="relative overflow-hidden">
          <style>{`
            .slick-slide > div {
              padding: 0 8px;
              height: 100%;
            }
            .slick-slide {
              margin: 0;
              height: 550px;
            }
            .slick-list {
              margin: 0 -8px;
              overflow: hidden;
            }
            .slick-track {
              display: flex;
              align-items: stretch;
            }
            .slick-slide > div > div {
              height: 100%;
            }
            .slick-slider {
              position: relative;
              overflow: hidden;
            }
          `}</style>
          <Slider {...settings}>
            {myBuilder.map((item) => (
              <div key={item.id} className="outline-none">
                <div className="relative h-[550px] w-full max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-lg" style={{  maxWidth: '600px', height: '650px' }}>
                  <img
                    src={item.image}
                    alt="My Builder"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
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