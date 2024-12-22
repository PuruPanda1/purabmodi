import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const ImageCarousel = ({ images, contain = false }) => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            transitionTime={500}
            showStatus={false}
            emulateTouch={true}
            dynamicHeight={false}>

            {images.map((image, index) => (
                <img key={index}
                    className={`mb-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-lg 
                    ${contain ? 'object-contain' : 'object-cover'} 
                    md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] md:aspect-[9/16]`}
                    src={image}
                />
            ))}

        </Carousel>
    );
};

export default ImageCarousel;
