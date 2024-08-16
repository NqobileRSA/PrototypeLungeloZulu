import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

type Props = {};

const Archives = (props: Props) => {
  const imageStyle =
    'relative overflow-hidden w-full h-64 sm:h-80 md:h-96 lg:h-[400px] bg-fill bg-center bg-no-repeat cur';

  const bgImageStyle =
    'absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in-out hover:scale-110';

  return (
    <div id="archives" className="container mx-auto bg-[#0a0000]">
      <SectionTitle title="Archives" />
      <div className="grid gap-4 p-4">
        {/* 1st row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          <div className={imageStyle}>
            <div className={`${bgImageStyle} bg-[url('/radio.jpg')]`} />
          </div>
          <div className={`${imageStyle} sm:col-span-2`}>
            <div className={`${bgImageStyle} bg-[url('/bluegray.jpg')]`} />
          </div>
          <div className={imageStyle}>
            <div className={`${bgImageStyle} bg-[url('/wearhouz.jpg')]`} />
          </div>
          <div className={imageStyle}>
            <div className={`${bgImageStyle} bg-[url('/themba.jpg')]`} />
          </div>
          <div className={imageStyle}>
            <div className={`${bgImageStyle} bg-[url('/cusuin.jpg')]`} />
          </div>
        </div>

        {/* 2nd row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div className={imageStyle}>
            <div className={`${bgImageStyle} bg-[url('/skyf.jpg')]`} />
          </div>
          <div className={`${imageStyle} sm:col-span-2`}>
            <div className={`${bgImageStyle} bg-[url('/swag.jpg')]`} />
          </div>
          <div className={`${imageStyle} sm:col-span-2`}>
            <div className={`${bgImageStyle} bg-[url('/bittercure.jpg')]`} />
          </div>
        </div>

        {/* 3rd row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <div className={imageStyle}>
            <div className={`${bgImageStyle} bg-[url('/combo.png')]`} />
          </div>
          <div className={imageStyle}>
            <div className={`${bgImageStyle} bg-[url('/vibe.jpg')]`} />
          </div>
          <div className={imageStyle}>
            <div className={`${bgImageStyle} bg-[url('/half.jpg')]`} />
          </div>
          <div className={imageStyle}>
            <div className={`${bgImageStyle} bg-[url('/cusuin.jpg')]`} />
          </div>
        </div>

        {/* 4th row */}
        <div className="grid grid-cols-1 gap-2">
          <div className="relative overflow-hidden h-[300px] sm:h-[600px] md:h-[900px] lg:h-[1200px]">
            <div className={`${bgImageStyle} bg-[url('/yellow.png')]`} />
          </div>
        </div>

        {/* 5th row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div className={`${imageStyle} sm:col-span-2`}>
            <div className={`${bgImageStyle} bg-[url('/pink.png')]`} />
          </div>
          <div className={imageStyle}>
            <div className={`${bgImageStyle} bg-[url('/fb.jpg')]`} />
          </div>
          <div className={`${imageStyle} sm:col-span-2`}>
            <div className={`${bgImageStyle} bg-[url('/k1.png')]`} />
          </div>
        </div>

        {/* 6th row */}
        <div className="grid grid-cols-1 gap-2">
          <div className="relative overflow-hidden h-[300px] sm:h-[600px] md:h-[900px] lg:h-[95vh]">
            <div className={`${bgImageStyle} bg-[url('/sunday.jpg')]`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archives;
