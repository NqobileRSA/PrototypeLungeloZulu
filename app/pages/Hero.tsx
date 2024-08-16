import React from 'react';
import Image from 'next/image';

interface Info {
  name: string;
  title: string;
  imageUrl: string;
}

const Hero: React.FC = () => {
  const information: Info = {
    name: 'LUNGELO ZULU',
    title: 'Freelance Journalist',
    imageUrl: '/Lungelo.png',
  };

  return (
    <section id="home" className="bg-[#0a0000]">
      <div className="text-white h-screen flex flex-col items-center justify-center p-4">
        <div className="relative w-64 h-64 rounded-full overflow-hidden mb-8">
          <Image
            src={information.imageUrl}
            alt={information.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale"
          />
        </div>
        <h1 className="text-4xl font-bold tracking-wider mb-2 text-center">
          {information.name}
        </h1>
        <p className="text-xl uppercase tracking-wide text-center">
          {information.title}
        </p>
      </div>
    </section>
  );
};

export default Hero;
