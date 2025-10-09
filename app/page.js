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
      <section id="about" className="min-h-screen bg-white pt-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="mx-auto w-full max-w-[2200px] grid grid-cols-1 md:grid-cols-[160px_minmax(0,1fr)] gap-10 items-start">
          <div className="text-black leading-7 md:sticky md:top-28 -ml-10 md:-ml-23">
            <p className="text-sm md:text-base">
              Avery Cox Design is a Texas-based interior design studio focusing on luxury residential and hospitality projects. We craft thoughtful custom interiors with a spirit of warmth, playfulness, and theatricality.
            </p>
            <a href="#projects" className="inline-block mt-40 md:mt-52 text-base underline underline-offset-4 hover:opacity-70">View Projects</a>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-8 md:ml-20">
            <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden">
              <Image src="/hero.png" alt="Project 1" width={1200} height={1500} className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden">
              <Image src="/window.svg" alt="Project 2" width={1200} height={1500} className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden">
              <Image src="/globe.svg" alt="Project 3" width={1200} height={1500} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section id="next" className="bg-white -mt-28 md:-mt-42">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="relative w-full h-[100vh]">
            <Image src="/hero.png" alt="Showcase image 1" fill priority className="object-cover" />
          </div>
          <div className="relative w-full h-[100vh]">
            <Image src="/hero.png" alt="Showcase image 2" fill className="object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="mx-auto w-full max-w-[2200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-black">
              <blockquote className="text-base md:text-lg leading-relaxed mb-4">
                "Avery is a true artist and creative who strives to get to know you and what you want before jumping in with her own agenda. She's such a warm human and I feel lucky to have her imprint throughout my homes."
              </blockquote>
              <cite className="text-sm underline">
                — Jordan Fronk
              </cite>
            </div>
            <div className="text-black">
              <blockquote className="text-base md:text-lg leading-relaxed mb-4">
                "Working with Avery was an absolute dream. Her attention to detail and ability to transform spaces is unmatched. She truly understands how to make a house feel like home."
              </blockquote>
              <cite className="text-sm underline">
                — Sarah Mitchell
              </cite>
            </div>
            <div className="text-black">
              <blockquote className="text-base md:text-lg leading-relaxed mb-4">
                "Avery's design vision brought our space to life in ways we never imagined. Her creativity and professionalism made the entire process seamless and enjoyable."
              </blockquote>
              <cite className="text-sm underline">
                — Michael Chen
              </cite>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="relative w-full h-[100vh]">
          <Image src="/hero.png" alt="Full page showcase" fill priority className="object-cover" />
        </div>
      </section>
      <footer className="text-amber-50 py-12 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32" style={{ backgroundColor: '#755306' }}>
        <div className="mx-auto w-full max-w-[2200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-wrap gap-12 -ml-25">
              <a href="#" className="text-sm hover:underline">Projects</a>
              <a href="#about" className="text-sm hover:underline">About</a>
              <a href="#" className="text-sm hover:underline">Contact</a>
              <a href="#" className="text-sm hover:underline">Press</a>
              <a href="#" className="text-sm hover:underline">Work for AC. D</a>
            </div>
            <div className="text-md ml-20 md:ml-40">
              Established in 2014, Avery Cox Design is a full-service design firm based in Austin, Texas.
            </div>
            <div className="text-md ml-26 md:ml-52">
              <div>IG: <a href="#" className="underline hover:no-underline">@averycoxdesign</a></div>
              <div><a href="#" className="underline hover:no-underline">AC.D on The Expert</a> and</div>
              <div><a href="#" className="underline hover:no-underline">AD's Pro Directory</a></div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-18">
            <div className="text-2xl">✦</div>
            <div className="text-md ml-61 md:ml-122">
              Questions? Reach out:<br />
              <a href="mailto:howdy@averycoxdesign.com" className="underline hover:no-underline">howdy@averycoxdesign.com</a>
            </div>
            <div className="text-sm ml-25 md:ml-50">
              Avery Cox Design © 2024
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
