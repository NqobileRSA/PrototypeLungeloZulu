'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowBigLeftIcon,
  ArrowBigRightIcon,
  XIcon,
  HouseIcon,
  Undo2,
} from 'lucide-react';

type Props = {};

interface PortfolioItemType {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  src: string;
  category: string;
  type: 'video' | 'image';
}

const portfolioItems: PortfolioItemType[] = [
  {
    id: 1,
    title: 'A Fruitful Venture',
    description: 'A documentary about sustainable farming',
    thumbnail: '/skyf.jpg',
    src: '/Videos/A FRUITFUL VENTURE.mp4',
    category: 'Films',
    type: 'video',
  },
  {
    id: 2,
    title: 'We Stayed True',
    description: 'Full documentary on cultural preservation',
    thumbnail: '/thumbnails/we-stayed-true-thumbnail.jpg',
    src: 'https://www.youtube.com/watch?v=fSVM_lLZY-o',
    category: 'Films',
    type: 'video',
  },
  {
    id: 3,
    title: 'What We Became',
    description: 'Official trailer for an upcoming documentary',
    thumbnail: '/thumbnails/what-we-became-thumbnail.jpg',
    src: 'https://www.youtube.com/watch?v=fSVM_lLZY-o',
    category: 'Films',
    type: 'video',
  },
  {
    id: 4,
    title: 'What We Became - Full Documentary',
    description: 'Full version of the acclaimed documentary',
    thumbnail: '/thumbnails/what-we-became-full-thumbnail.jpg',
    src: 'https://www.youtube.com/watch?v=fSVM_lLZY-o',
    category: 'Films',
    type: 'video',
  },
  {
    id: 5,
    title: 'App 2',
    description: 'Lorem ipsum',
    thumbnail: '/k1.png',
    src: '/k1.png',
    category: 'Articles',
    type: 'image',
  },
  {
    id: 6,
    title: 'Product 2',
    description: 'Lorem ipsum',
    thumbnail: '/themba.jpg',
    src: '/themba.jpg',
    category: 'Articles',
    type: 'image',
  },
  {
    id: 7,
    title: 'Branding 2',
    description: 'Lorem ipsum',
    thumbnail: '/bittercure.jpg',
    src: '/bittercure.jpg',
    category: 'Articles',
    type: 'image',
  },
  {
    id: 8,
    title: 'Books 2',
    description: 'Lorem ipsum',
    thumbnail: '/skyf.jpg',
    src: '/skyf.jpg',
    category: 'Events',
    type: 'image',
  },
  {
    id: 9,
    title: 'App 3',
    description: 'Lorem ipsum',
    thumbnail: '/fb.jpg',
    src: '/fb.jpg',
    category: 'Events',
    type: 'image',
  },
  {
    id: 10,
    title: 'Product 3',
    description: 'Lorem ipsum',
    thumbnail: '/sunday.jpg',
    src: '/sunday.jpg',
    category: 'Events',
    type: 'image',
  },
];

const categories = ['All', 'Films', 'Articles', 'Events'];

const PortfolioItem: React.FC<{
  item: PortfolioItemType;
  onClick: () => void;
}> = ({ item, onClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="relative group overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {item.type === 'video' ? (
        <div className="relative">
          <video
            ref={videoRef}
            src={item.src}
            poster={item.thumbnail}
            className="w-full h-auto"
            onClick={togglePlay}
          />
          <button
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white text-6xl"
            onClick={togglePlay}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
        </div>
      ) : (
        <Image
          src={item.thumbnail}
          alt={item.title}
          width={500}
          height={500}
          className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white">
          <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
          <p className="text-sm mb-4">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const FullScreenView: React.FC<{
  item: PortfolioItemType;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}> = ({ item, onClose, onPrev, onNext }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <button className="absolute top-4 right-4 text-white" onClick={onClose}>
        <XIcon size={32} />
      </button>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
        onClick={onPrev}
      >
        <ArrowBigLeftIcon size={48} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
        onClick={onNext}
      >
        <ArrowBigRightIcon size={48} />
      </button>
      <div className="max-w-4xl max-h-full">
        {item.type === 'video' ? (
          <div className="relative">
            <video
              ref={videoRef}
              src={item.src}
              className="max-w-full max-h-[80vh]"
              controls
            />
            <button
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white text-6xl"
              onClick={togglePlay}
            >
              {isPlaying ? '❚❚' : '▶'}
            </button>
          </div>
        ) : (
          <Image
            src={item.src}
            alt={item.title}
            width={1000}
            height={1000}
            className="max-w-full max-h-[80vh] object-contain"
          />
        )}
        <div className="mt-4 text-white">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="mt-2">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const Work: React.FC<Props> = () => {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(
    null
  );

  const filteredItems =
    filter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const handleItemClick = (item: PortfolioItemType) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const handlePrev = () => {
    if (selectedItem) {
      const currentIndex = filteredItems.findIndex(
        (item) => item.id === selectedItem.id
      );
      const prevIndex =
        (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedItem(filteredItems[prevIndex]);
    }
  };

  const handleNext = () => {
    if (selectedItem) {
      const currentIndex = filteredItems.findIndex(
        (item) => item.id === selectedItem.id
      );
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedItem(filteredItems[nextIndex]);
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <main className="container mx-auto px-4 py-16">
        <section id="portfolio" className="portfolio section">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            <div className="lg:w-7/12 mb-8 lg:mb-0">
              <h3 className="text-4xl font-bold mb-4">Lungelo Zulu</h3>
              <p className="text-gray-500">Browse my work</p>
            </div>
            <div className="lg:w-5/12 text-center lg:text-right">
              <ul className="inline-flex flex-wrap justify-center lg:justify-end">
                {categories.map((category) => (
                  <li
                    key={category}
                    className={`cursor-pointer mx-2 mb-2 pb-1 ${
                      filter === category
                        ? 'border-b-2 border-white'
                        : 'hover:border-b-2 hover:border-white'
                    }`}
                    onClick={() => setFilter(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <PortfolioItem
                key={item.id}
                item={item}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>
        </section>
      </main>
      <Link href="/" className="absolute top-5 right-5 ">
        <Undo2 size={64} color="#fff" />
      </Link>
      {selectedItem && (
        <FullScreenView
          item={selectedItem}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default Work;
