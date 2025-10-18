"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Projects() {
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
    <div className="font-sans relative min-h-screen bg-[#845547] overflow-x-hidden">
      {/* ✅ NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 bg-[#845547] flex justify-between items-center w-full px-6 py-4 z-20 transition-transform duration-700 sm:grid sm:grid-cols-3 sm:items-center ${
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

      <div className="relative min-h-screen bg-[#845547] overflow-x-hidden flex items-center justify-center py-20">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full px-6">
        <Link href="/project/interiors">
          <div
            className="drop-animation zoom-pulse bg-[#fffbea] text-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            style={{ animationDelay: '0s' }}
          >
            <h3 className="text-2xl font-bold mb-4">Interiors</h3>
            <p className="text-sm leading-relaxed">
              Explore our stunning interior design projects that transform spaces into personalized havens.
            </p>
          </div>
        </Link>
        <Link href="/project/buy-stay">
          <div
            className="drop-animation zoom-pulse bg-[#fffbea] text-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-bold mb-4">Buy & Stay</h3>
            <p className="text-sm leading-relaxed">
            Discover buy & stay options that combine comfort, style, and lasting value.          </p>
          </div>
        </Link>
        <Link href="/project/events-experiences">
          <div
            className="drop-animation zoom-pulse bg-[#fffbea] text-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            style={{ animationDelay: '0.4s' }}
          >
            <h3 className="text-2xl font-bold mb-4">Events & Experiences</h3>
            <p className="text-sm leading-relaxed">
            Explore our portfolio of unforgettable events and immersive experiences that showcase creativity and excellence.          </p>
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
}
