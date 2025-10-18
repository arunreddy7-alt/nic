'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function About() {
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans relative min-h-screen bg-white overflow-x-hidden">

      {/* ✅ NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 bg-white flex justify-between items-center w-full px-6 py-4 z-20 transition-transform duration-700 sm:grid sm:grid-cols-3 sm:items-center ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        }`} 
      >
        {/* Projects (Desktop Left) */}
        <div className="hidden sm:flex sm:justify-start">
          <a href="#" className="text-sm hover:underline text-black">Projects</a>
        </div>

        {/* NICARA (Centered on Desktop, Left on Mobile) */}
        <div className="flex items-center justify-between w-full sm:w-auto sm:justify-center sm:col-start-2">
          <Link
            href="/"
            className="text-lg text-black font-bold"
            style={{ fontFamily: 'Didot, serif' }}
          >
            NICARA
          </Link>

          {/* Hamburger Menu (mobile only) */}
          <button
            className="sm:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </button>
        </div>

        {/* About and Contact (Desktop Right) */}
        <div className="hidden sm:flex sm:justify-end gap-5">
          <a href="/about" className="text-sm hover:underline text-black">About</a>
          <a href="/contact" className="text-sm hover:underline text-black">Contact</a>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center py-4 border-t border-gray-200 sm:hidden animate-slide-down">
            <a
              href="#"
              className="py-2 text-sm text-black hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="/about"
              className="py-2 text-sm text-black hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="py-2 text-sm text-black hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      <section className="min-h-screen bg-white pt-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="mx-auto w-full max-w-[2200px] grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 h-[160vh]">
          <div className="relative w-full h-full overflow-hidden transform md:-translate-x-32 md:translate-y-16">
            <Image src="/about1.png" alt="About image" fill className="object-cover" />
          </div>
          <div className="text-black leading-7 md:sticky md:top-28 ml-0 md:-ml-23 transform md:translate-x-13 md:translate-y-19">
          <h2 className="text-sm md:text-xl font mb-4">Our Story</h2>
            <p className="text-xs md:text-sm mb-4">
            Every space has a story, and every story deserves to be lived beautifully. NICARA began in Hyderabad with a simple vision: to transform interiors into experiences, and experiences into memories. What started as a passion for luxury residential, commercial, and hospitality design soon evolved into a broader vision &mdash; a lifestyle brand that curates not just interiors, but furniture, d&eacute;cor, events, and extraordinary experiences.            </p>
            <p className="text-xs md:text-sm mb-4">
            Our team believes that design is more than aesthetics. It&apos;s about creating warmth, joy, and theatrical moments in everyday life. Each project is approached as a bespoke journey, where interiors, curated furniture, styling, and immersive events come together to reflect the unique personality and aspirations of our clients.            </p>
            <p className="text-xs md:text-sm">
            As NICARA grew, we expanded into handpicked properties for purchase and stay, helping clients discover spaces &mdash; from residences to holiday homes &mdash; that resonate with their lifestyle and taste. Today, NICARA is a celebration of living elegantly, effortlessly, and intentionally, turning spaces into stories, moments into memories, and dreams in            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-10">
          <div className="relative h-[80vh] md:h-[140vh] overflow-visible md:overflow-hidden transform md:-translate-x-38 md:translate-y-50 -mt-110 md:mt-8">
            <Image src="/about2.png" alt="Additional about image" fill className="object-cover" />
          </div>
          <div className="text-black leading-7 mt-10 md:mt-0 md:translate-y-67 md:-translate-x-13">
            <h2 className="text-sm md:text-xl font mb-4">To reality</h2>
            <p className="text-xs md:text-sm mb-4">
            Nishanth is the co-founder of NICARA, holding a Master&rsquo;s in Design from London and an MBA from Bangalore. He is inspired by the idea of turning spaces into experiences, creating interiors that are luxurious, warm, playful, and deeply personal.</p>
             <p className="text-xs md:text-sm mb-4">
             A traveler with a love for beautiful homes, boutique stays, and curated experiences, Nishanth finds inspiration in every journey and every unique space he encounters. With a background in real estate and lifestyle consulting, he combines design, property insight, and<br/> refined living to craft projects that are thoughtful, elegant, and<br/> effortlessly luxurious.</p>
            <p className="text-xs md:text-sm mb-4">
            Sriniketh is the co-founder of NICARA, with a background in Structural Engineering from BITS Pilani. He started his professional journey with a Corporator, building a foundation in operations, systems, and on-ground project execution.</p>
            <p className="text-xs md:text-sm mb-4">
            With strong expertise in operations and project management, Sriniketh ensures that every NICARA project is delivered with precision, efficiency, and attention to detail. He believes in the power of well-structured systems, blending creativity with discipline to bring ambitious designs<br/> to life seamlessly.</p>
            <p className="text-xs md:text-sm">
            At NICARA, Sriniketh&rsquo;s ability to balance design vision with flawless execution makes him an integral force behind the studio&rsquo;s commitment to luxury, reliability, and refined living.</p>
          </div>
        </div>
            </section>
            <footer
  className="mt-30 md:mt-60 text-amber-50 py-16 sm:py-24 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32"
  style={{ backgroundColor: '#755306' }}
>
  <div className="mx-auto w-full max-w-[2200px] space-y-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {/* Links section */}
      <div className="flex flex-wrap gap-3 sm:gap-6 justify-center md:justify-start text-center md:text-left">
        <a href="#" className="text-sm hover:underline">Projects</a>
        <a href="/about" className="text-sm hover:underline">About</a>
        <a href="#" className="text-sm hover:underline">Contact</a>
        <a href="#" className="text-sm hover:underline">Press</a>
        <a href="#" className="text-sm hover:underline">Work for AC. D</a>
      </div>

      {/* Description section */}
      <div className="text-sm text-center md:text-left md:-mr-39 md:ml-80 px-4 md:px-0">
        Established in 2020, Nicara Design is a full-service design firm based in Hyderabad, India.
      </div>

      {/* Social section */}
      <div className="text-sm text-center md:text-left md:-mr-19 md:ml-52 space-y-1 px-4 md:px-0">
        <div>
          IG: <a href="https://www.instagram.com/nicaradesign?igsh=MTRyZHkzeDNtMGRoeg==" className="underline hover:no-underline">@nicaradesign</a>
        </div>
        <div>
          <a href="#" className="underline hover:no-underline">AC.D on The Expert</a> and
        </div>
        <div>
          <a href="#" className="underline hover:no-underline">AD&apos;s Pro Directory</a>
        </div>
      </div>
    </div>

    {/* Bottom section */}
    <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-center md:text-left">
      <div>
        Questions? Reach out:<br />
        <a href="mailto:hello@dwelltales.com" className="underline hover:no-underline">
        hello@dwelltales.com
        </a>
      </div>
      <div>Nicara Design © 2025</div>
    </div>
  </div>
</footer>
    </div>
  );
}
