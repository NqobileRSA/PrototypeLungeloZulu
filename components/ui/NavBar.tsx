'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {};

const NavBar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '/Work' },
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

  const activeLinkStyle = 'text-white bg-[#0a0000] font-bold py-6';
  const defaultLinkStyle =
    'text-black hover:bg-[#0a000064] hover:text-white transition-colors py-5 px-10';

  const getLinkStyle = (href: string) =>
    `${defaultLinkStyle} ${
      activeSection === href.substring(1) ? activeLinkStyle : ''
    }`;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 px-[50px] text-lg absolute top-0 left-0 right-0 z-50"
      style={{
        background: '#fff',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(6.4px)',
        WebkitBackdropFilter: 'blur(6.4px)',

        // background: 'rgba(255, 255, 255, 0.14)',
        // borderRadius: '16px',
        // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        // backdropFilter: 'blur(6.4px)',
        // WebkitBackdropFilter: 'blur(6.4px)',
        // border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-black">LUNGELO ZULU</h2>
        </div>
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none text-black"
          >
            <Menu size={24} />
          </motion.button>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className={getLinkStyle(item.href)}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    onClick={() => handleClick(item.href)}
                    className={`${getLinkStyle(
                      item.href
                    )} block w-full text-center text-black`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
