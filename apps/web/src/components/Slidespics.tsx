import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Image from 'next/image';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';

const Slidepics = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: slide1, alt: 'Slide 1' },
    { src: slide2, alt: 'Slide 2' },
    { src: slide3, alt: 'Slide 3' },
    { src: slide4, alt: 'Slide 4' },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1,
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
    );
  };

  return (
    <div className="slideContainer">
      <div className="slideImage">
        <Image
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          layout="fill" // This will make the image fill the container
          objectFit="cover" // This will ensure the aspect ratio is maintained and the image covers the area
        />
      </div>
      <div className="arrow leftArrow" onClick={handlePrevSlide}>
        <BsChevronCompactLeft size={30} />
      </div>
      <div className="arrow rightArrow" onClick={handleNextSlide}>
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
};

export default Slidepics;
