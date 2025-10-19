'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Menu, X, ChevronDown, Mail, Phone, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerDropdownOpen, setFooterDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [contactBarOpen, setContactBarOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showPopupForm, setShowPopupForm] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopupForm(true);
    }, 3000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showPopupForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPopupForm]);

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

      {/* Floating Contact Bar */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10 flex flex-col space-y-0">
        {/* Toggle Button */}
        <button
          onClick={() => setContactBarOpen(!contactBarOpen)}
          className={`bg-black flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? 'w-[50px] h-[50px] translate-x-0' : 'w-[40px] h-[40px] rounded-full translate-x-1/2'
          }`}
        >
          {contactBarOpen ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
        {/* Contact Us Button */}
        <div
          onMouseEnter={() => setShowForm(true)}
          onMouseLeave={() => setShowForm(false)}
          className={`w-[50px] h-[150px] bg-[#7E6BF2] flex flex-col items-center justify-start pt-15 text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <span className="text-sm transform -rotate-90 whitespace-nowrap mb-8">Contact Us</span>
          <Mail className="w-6 h-6" />
        </div>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8559901234"
          className={`w-[50px] h-[50px] bg-[#2C2C2C] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
        {/* Call Button */}
        <a
          href="tel:8559901234"
          className={`w-[50px] h-[50px] bg-[#25D366] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

        {/* Contact Form */}
        {contactBarOpen && (
          <div
            onMouseEnter={() => setShowForm(true)}
            onMouseLeave={() => setShowForm(false)}
            className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg p-6 rounded-l-lg w-80 transition-transform duration-300 ${
              showForm ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ marginTop: '50px' }}
          >
            <h3 className="text-lg font-bold mb-4 text-black">Contact Us</h3>
            <form>
              <div className="mb-4 text-black">
                <label className="block text-sm font-medium mb-2 text-black">Name</label>
                <input type="text" className="w-full p-2 border border-black rounded" />
              </div>
              <div className="mb-4 text-black">
                <label className="block text-sm font-medium mb-2 text-black">Email</label>
                <input type="email" className="w-full p-2 border border-black rounded" />
              </div>
              <div className="mb-4 text-black">
                <label className="block text-sm font-medium mb-2 text-black">Message</label>
                <textarea className="w-full p-2 border border-black rounded" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-[#7E6BF2] text-white px-4 py-2 rounded hover:bg-[#6a5acd]">Send</button>
            </form>
          </div>
        )}

      {/* ✅ HERO SECTION */}
      <main
        className="flex flex-col items-center sm:items-start w-full"
        style={{
          backgroundImage: 'url(/int6.png)',
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

      {/* Popup Contact Form */}
      {showPopupForm && (
        <div
          className="fixed inset-0 bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowPopupForm(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopupForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-lg font-bold mb-4 text-black">Contact Us</h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-black">Name</label>
                <input type="text" className="w-full p-2 border border-black rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-black">Email</label>
                <input type="email" className="w-full p-2 border border-black rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-black">Message</label>
                <textarea className="w-full p-2 border border-black rounded" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-[#7E6BF2] text-white px-4 py-2 rounded hover:bg-[#6a5acd]">Send</button>
            </form>
          </div>
        </div>
      )}

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
