'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '@/components/ui/SectionTitle';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Archives = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'radio.jpg',
    'bluegray.jpg',
    'wearhouz.jpg',
    'themba.jpg',
    'cusuin.jpg',
    'skyf.jpg',
    'swag.jpg',
    'bittercure.jpg',
    'combo.png',
    'vibe.jpg',
    'half.jpg',
    'cusuin.jpg',
    'yellow.png',
    'pink.png',
    'fb.jpg',
    'k1.png',
    'sunday.jpg',
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const imageStyle =
    'relative overflow-hidden w-full h-64 sm:h-80 md:h-96 lg:h-[400px] cursor-pointer';

  return (
    <div id="archives" className="container mx-auto bg-[#0a0000]">
      <SectionTitle title="Archives" />
      <div className="grid gap-4 p-4">
        {/* 1st row */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
          data-aos="fade-up"
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`${imageStyle} ${index === 1 ? 'sm:col-span-2' : ''}`}
            >
              <Image
                src={`/${images[index]}`}
                alt={`Archive image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>

        {/* 2nd row */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[5, 6, 7].map((index) => (
            <div
              key={index}
              className={`${imageStyle} ${index !== 5 ? 'sm:col-span-2' : ''}`}
            >
              <Image
                src={`/${images[index]}`}
                alt={`Archive image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>

        {/* 3rd row */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {[8, 9, 10, 11].map((index) => (
            <div key={index} className={imageStyle}>
              <Image
                src={`/${images[index]}`}
                alt={`Archive image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>

        {/* 4th row */}
        <div
          className="grid grid-cols-1 gap-2"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="relative overflow-hidden h-[300px] sm:h-[600px] md:h-[900px] lg:h-[1200px]">
            <Image
              src={`/${images[12]}`}
              alt="Archive image 13"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
              onClick={() => openLightbox(12)}
            />
          </div>
        </div>

        {/* 5th row */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {[13, 14, 15].map((index) => (
            <div
              key={index}
              className={`${imageStyle} ${index !== 14 ? 'sm:col-span-2' : ''}`}
            >
              <Image
                src={`/${images[index]}`}
                alt={`Archive image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>

        {/* 6th row */}
        <div
          className="grid grid-cols-1 gap-2"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <div className="relative overflow-hidden h-[300px] sm:h-[600px] md:h-[900px] lg:h-[95vh]">
            <Image
              src={`/${images[16]}`}
              alt="Archive image 17"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
              onClick={() => openLightbox(16)}
            />
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={`/${images[currentImageIndex]}`}
              alt={`Archive image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Archives;
