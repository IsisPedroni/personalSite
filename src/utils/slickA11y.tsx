import React from 'react';

export function getSlickDotsProps(slideCount: number, itemLabel = 'slide') {
  return {
    appendDots: (dots: React.ReactNode) => (
      <ul role="list" aria-label="Carousel pagination">
        {dots}
      </ul>
    ),
    customPaging: (index: number) => (
      <button
        type="button"
        className="carousel-dot-button"
        aria-label={`Go to ${itemLabel} ${index + 1} of ${slideCount}`}
      >
        <span className="sr-only">{`Go to ${itemLabel} ${index + 1} of ${slideCount}`}</span>
      </button>
    ),
  };
}
