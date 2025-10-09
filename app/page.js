'use client';

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        setShowNav(false);
      } else {
        setShowNav(true);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="font-sans relative min-h-screen p-8 pb-28 gap-16 sm:p-0">
      <nav className={`absolute top-0 left-0 right-0 bg-white flex gap-5 items-center flex-col sm:flex-row w-full justify-center py-4 z-10 transition-transform duration-3000 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <a href="#" className="text-sm hover:underline mr-280 text-black">Projects</a>
        <span className="text-lg text-black font-bold transform -translate-x-135" style={{ fontFamily: 'Didot, serif' }}>NICARA</span>
        <a href="#about" className="text-sm hover:underline text-black">About</a>
        <a href="#" className="text-sm hover:underline text-black">Contact</a>
      </nav>
      <main className="flex flex-col gap-[23px] row-start-0 items-center sm:items-start" style={{ backgroundImage: 'url(/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', minHeight: '1000px', width: '100%' }}>
      </main>
      <section id="about" className="min-h-screen flex items-center justify-center bg-white">
        <h2 className="text-4xl font-bold text-black">About Section</h2>
      </section>
    </div>
  );
}
