'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

type Props = {};

const NavBar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Archives', href: '#archives' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = navItems.map((item) => item.href.substring(1));
      const sectionElements = sections.map((section) =>
        document.getElementById(section)
      );

      let currentSection = '';
      sectionElements.forEach((element, index) => {
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = sections[index];
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeLinkStyle = 'text-white bg-[#0a0000] font-bold';
  const defaultLinkStyle =
    'text-black hover:bg-[#0a000064]  hover:text-white transition-colors py-7 px-10';

  const getLinkStyle = (href: string) =>
    `${defaultLinkStyle} ${
      activeSection === href.substring(1) ? activeLinkStyle : ''
    }`;

  return (
    <nav className="bg-white w-full py-4 px-[50px] text-lg absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-black">LUNGELO ZULU</h2>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none text-black"
          >
            <Menu size={24} />
          </button>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center ">
            {navItems.map((item) => (
              <li key={item.name} className="">
                <Link
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className={getLinkStyle(item.href)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item.name} className="py-2">
                <Link
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className={getLinkStyle(item.href)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
