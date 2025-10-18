"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Interiors() {
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
          <a href="/project" className="text-sm hover:underline text-black">Projects</a>
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

      <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
        <div className="flex space-x-4 mb-10">
          <div className="flex flex-col items-center">
            <Image src="/int1.png" alt="Image 1" width={700} height={400} />
            <p className="mt-4 text-black -ml-135" style={{ fontFamily: 'Marist' }}>Stunning Home Interiors</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/int2.png" alt="Image 2" width={700} height={400} />
            <p className="mt-4 text-black -ml-135" style={{ fontFamily: 'Marist' }}>Elegant Living Spaces</p>
          </div>
        </div>
        <div className="flex space-x-4 ">
          <div className="flex flex-col items-center">
            <Image src="/int1.png" alt="Image 1" width={700} height={400} />
            <p className="mt-4 text-black -ml-135" style={{ fontFamily: 'Marist' }}>Stunning Home Interiors</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/int2.png" alt="Image 2" width={700} height={400} />
            <p className="mt-4 text-black -ml-135" style={{ fontFamily: 'Marist' }}>Elegant Living Spaces</p>
          </div>
        </div>
      </div>
    </div>
  );
}
