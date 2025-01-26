import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HeroText = ({text_list}) => {
  return (
    <div className="text-start">
      <h5 className="font-spaceGrotesk mb-2 text-5xl mt-5 md:mt-0 md:text-6xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">
        Hello, <br />
        I'm Purab Modi, <br />
        <span className="text-blue-500 dark:text-blue-300">
          <Typewriter
            words={text_list}
            loop={true} // Enable looping
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h5>
    </div>
  );
};

export default HeroText;
