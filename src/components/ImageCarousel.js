import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const ImageCarousel = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            transitionTime={500}
            showStatus={false}
            emulateTouch={true}
            dynamicHeight={false}>

            <img
                className='mb-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-lg object-cover md:rounded-lg
                md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] md:aspect-[9/16]'
                src={require(`../images/hero_image.jpg`)}
            />
            <img
                className='mb-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-lg object-cover md:rounded-lg
                md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] md:aspect-[9/16]'
                src={require(`../images/pm_image_1.jpg`)}
            />
            <img
                className='mb-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-lg object-cover md:rounded-lg
                md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] md:aspect-[9/16]'
                src={require(`../images/pm_image_2.jpg`)}
            />
            <img
                className='mb-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-lg object-cover md:rounded-lg
                md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] md:aspect-[9/16]'
                src={require(`../images/pm_image_3.jpg`)}
            />

        </Carousel>
    );
};

export default ImageCarousel;
