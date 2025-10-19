'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerDropdownOpen, setFooterDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
        <div className="hidden sm:flex sm:justify-start relative">
          <div
            className="text-sm hover:underline text-black cursor-pointer flex items-center justify-between w-full"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            Projects
            
          </div>
          {dropdownOpen && (
            <div
              className="absolute top-full left-0 bg-white shadow-lg py-2 w-48 z-30"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link href="/project/interiors" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                Interiors
              </Link>
              <Link href="/project/buy-stay" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                Buy & Stay
              </Link>
              <Link href="/project/events-experiences" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                Events & Experiences
              </Link>
            </div>
          )}
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
            <div
              className="py-2 text-sm text-black hover:underline cursor-pointer flex items-center justify-center w-full"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Projects
              <ChevronDown className={`w-4 h-5 ml-2 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            {mobileDropdownOpen && (
              <div className="flex flex-col items-center w-full">
                <a
                  href="/project/interiors"
                  className="py-2 text-sm text-black hover:underline pl-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Interiors
                </a>
                <a
                  href="/project/buy-stay"
                  className="py-2 text-sm text-black hover:underline pl-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Buy & Stay
                </a>
                <a
                  href="/project/events-experiences"
                  className="py-2 text-sm text-black hover:underline pl-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Events & Experiences
                </a>
              </div>
            )}
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

      {/* ✅ HERO SECTION */}
      <main
        className="flex flex-col items-center sm:items-start w-full"
        style={{
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        }}
      ></main>

      {/* ✅ ABOUT SECTION */}
      <section id="about" className="min-h-screen bg-white pt-24 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="mx-auto w-full max-w-[2200px] grid grid-cols-1 md:grid-cols-[160px_minmax(0,1fr)] gap-10 items-start">
        <div className="text-black leading-7 md:sticky md:top-28 pl-0 sm:pl-4 md:pl-0 -ml-0 md:-ml-22">
      <p className="text-sm sm:text-base md:text-sm mb-4 px-2 sm:px-0">
        NICARA Design is a Hyderabad-based interior and lifestyle studio focusing on luxury residential,
        commercial, and hospitality projects across India. We craft thoughtful, bespoke interiors, curate
        signature furniture and décor, provide styling, and design exclusive events and experiences, all infused
        with a spirit of warmth, playfulness, and subtle theatricality.
      </p>

      <p className="text-sm sm:text-base md:text-sm px-2 sm:px-0">
        We also curate and showcase handpicked properties for purchase and stay, including residences and holiday
        homes, offering clients&apos; a seamless path to refined, effortless living.
      </p>

      <a
        href="/project"
        className="inline-block mt-8 sm:mt-10 md:mt-8 text-sm sm:text-base underline underline-offset-4 hover:opacity-70 ml-2 md:ml-0"
      >
        View Projects
      </a>
    </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:translate-x-25">
            <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden">
              <Image src="/hero1.png" alt="Project 1" width={1200} height={1500} className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden">
              <Image src="/hero2.png" alt="Project 2" width={1200} height={1500} className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden">
              <Image src="/hero3.png" alt="Project 3" width={1200} height={1500} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ NEXT SECTION */}
      <section id="next" className="bg-white w-screen mt-4 md:-mt-42">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="relative w-full h-[60vh] sm:h-[100vh]">
            <Image src="/hero4.png" alt="Showcase image 1" fill priority className="object-cover" />
          </div>
          <div className="relative w-full h-[60vh] sm:h-[100vh]">
            <Image src="/hero5.png" alt="Showcase image 2" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ✅ TESTIMONIALS SECTION */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="mx-auto w-full max-w-[2200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  '“From design concept to completion, Nicara handled everything with precision and care. Their project management made the entire process smooth and stress-free.”',
                cite: '— Meera T., Private Residence, Bengaluru',
              },
              {
                quote:
                  '“Nicara’s curated property listings helped us find a home that perfectly matched our lifestyle and aspirations. Their expertise made the search effortless and enjoyable.”',
                cite: '— Vikram P., Investor, Hyderabad',
              },
              {
                quote:
                  '“Nicara’s curated holiday homes and retreats offered us unique and unforgettable experiences. Every property they recommended was stylish, charming, and perfectly suited for a luxurious getaway.”',
                cite: '— Sanya R., Luxury Traveler, Goa',
              },
            ].map((t, i) => (
              <div key={i} className="text-black">
                <blockquote className="text-sm md:text-md leading-relaxed mb-4">{t.quote}</blockquote>
                <cite className="text-sm underline">{t.cite}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FULL IMAGE */}
      <section className="bg-white">
        <div className="relative w-full h-[60vh] sm:h-[100vh]">
          <Image src="/hero6.png" alt="Full page showcase" fill priority className="object-cover" />
        </div>
      </section>

      {/* ✅ FOOTER */}
      <footer
  className="text-amber-50 py-16 sm:py-24 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32"
  style={{ backgroundColor: '#755306' }}
>
  <div className="mx-auto w-full max-w-[2200px] space-y-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {/* Links section */}
      <div className="flex flex-wrap gap-3 sm:gap-6 justify-center md:justify-start text-center md:text-left relative">
        <div className="relative">
          <button
            className="md:hidden text-sm hover:underline flex items-center"
            onClick={() => setFooterDropdownOpen(!footerDropdownOpen)}
          >
            Projects
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${footerDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          <a
            href="#"
            className="hidden md:block text-sm hover:underline"
            onMouseEnter={() => setFooterDropdownOpen(true)}
            onMouseLeave={() => setFooterDropdownOpen(false)}
          >
            Projects
          </a>
          {footerDropdownOpen && (
            <div
              className="absolute bottom-full left-0 bg-[#755306] shadow-lg py-2 w-48 z-30"
              onMouseEnter={() => setFooterDropdownOpen(true)}
              onMouseLeave={() => setFooterDropdownOpen(false)}
            >
              <a href="/project/interiors" className="block px-4 py-2 text-sm text-amber-50 hover:bg-amber-50 hover:text-[#755306]">
                Interiors
              </a>
              <a href="/project/buy-stay" className="block px-4 py-2 text-sm text-amber-50 hover:bg-amber-50 hover:text-[#755306]">
                Buy & Stay
              </a>
              <a href="/project/events-experiences" className="block px-4 py-2 text-sm text-amber-50 hover:bg-amber-50 hover:text-[#755306]">
                Events & Experiences
              </a>
            </div>
          )}
        </div>
        <a href="/about" className="text-sm hover:underline">About</a>
        <a href="/contact" className="text-sm hover:underline">Contact</a>
        <a href="#" className="text-sm hover:underline">Press</a>
        <a href="#" className="text-sm hover:underline whitespace-nowrap">Work for AC. D</a>
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
