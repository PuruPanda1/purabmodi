import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ImageCarousel = ({ images, contain = false }) => {
    return (
        <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        transitionTime={500}
        showStatus={false}
        emulateTouch={true}
        dynamicHeight={false}
        renderArrowPrev={(onClickHandler) => (
          <button
            type="button"
            onClick={onClickHandler}
            className="absolute top-1/2 left-4 z-50 transform -translate-y-1/2 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-blue-600 transition duration-300 focus:outline-none"
            style={{ pointerEvents: "all" }}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
          </button>
        )}
        renderArrowNext={(onClickHandler) => (
          <button
            type="button"
            onClick={onClickHandler}
            className="absolute top-1/2 right-4 z-50 transform -translate-y-1/2 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-blue-600 transition duration-300 focus:outline-none"
            style={{ pointerEvents: "all" }}
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
          </button>
        )}
      >
        {images.map((image, index) => (
          <img
            key={index}
            className={`mb-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-lg 
              ${contain ? "object-contain" : "object-cover"} 
              md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] md:aspect-[9/16]`}
            src={image}
            alt={`carousel-${index}`}
          />
        ))}
      </Carousel>
      
    );
};

export default ImageCarousel;
