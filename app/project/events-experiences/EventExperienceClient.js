"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Mail, Phone, ChevronRight, ChevronLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';
import FloatingContactBar from '../../components/FloatingContactBar';
import Footer from '../../components/Footer';

export default function EventsExperiences() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);


  return (
    <div className="font-sans relative min-h-screen overflow-x-hidden">
      {/* ✅ NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 bg-grey flex justify-between items-center w-full px-6 py-4 z-20 sm:grid sm:grid-cols-3 sm:items-center font-medium"
      >
        {/* Projects (Desktop Left) */}
        <div className="hidden sm:flex sm:justify-start relative">
          <div
            className="text-sm hover:underline text-white cursor-pointer flex items-center justify-between w-full"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            Projects
          </div>
          {dropdownOpen && (
            <div
              className="absolute top-full left-0 bg-grey shadow-lg py-2 w-48 z-30"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link href="/project/interiors" className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-black">
                Interiors
              </Link>
              
              <Link href="/project/events-experiences" className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-black">
                Events & Experiences
              </Link>
            </div>
          )}
        </div>

        {/* NICARA (Centered on Desktop, Left on Mobile) */}
        <div className="flex items-center justify-between w-full sm:w-auto sm:justify-center sm:col-start-2">
          <Link
            href="/"
            className="text-lg text-white font-bold"
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
            {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* About and Contact (Desktop Right) */}
        <div className="hidden sm:flex sm:justify-end gap-5">
          <a href="/about" className="text-sm hover:underline text-white">About</a>
          <a href="/contact" className="text-sm hover:underline text-white">Contact</a>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[rgb(31,44,32)] z-50 flex flex-col items-center justify-center slide-up-menu">
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-200"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center space-y-4 text-white text-lg font-medium">
              <div
                className="py-2 text-white hover:underline cursor-pointer flex items-center justify-center w-full"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Projects
                <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              {mobileDropdownOpen && (
                <div className="flex flex-col items-center w-full space-y-2">
                  <a
                    href="/project/interiors"
                    className="py-2 text-white hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Interiors
                  </a>
                  
                  <a
                    href="/project/events-experiences"
                    className="py-2 text-white hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Events & Experiences
                  </a>
                </div>
              )}
              <a
                href="/about"
                className="py-2 text-white hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="py-2 text-white hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="h-screen relative">
        <Image
          src="/event.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 to-transparent"></div>
        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white font-poppins opacity-60 text-center font-avenir-next-lt-pro-light font-bold">Something exciting coming up, Stay Tuned!</h1>
        </div>
      </div>
     <Footer />
              <FloatingContactBar />
    </div>
  );
}