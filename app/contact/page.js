"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function ContactSection() {
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
    <div className="relative h-screen bg-[#845547] overflow-x-hidden">
      {/* ✅ NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 bg-[#845547] flex justify-between items-center w-full px-6 py-4 z-20 transition-transform duration-700 sm:grid sm:grid-cols-3 sm:items-center ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Projects (Desktop Left) */}
        <div className="hidden sm:flex sm:justify-start">
          <a href="#" className="text-sm hover:underline text-[#fffbea]">Projects</a>
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
            {menuOpen ? <X className="w-6 h-6 text-[#fffbea]" /> : <Menu className="w-6 h-6 text-[#fffbea]" />}
          </button>
        </div>

        {/* About and Contact (Desktop Right) */}
        <div className="hidden sm:flex sm:justify-end gap-5">
          <a href="/about" className="text-sm hover:underline text-[#fffbea]">About</a>
          <a href="/contact" className="text-sm hover:underline text-[#fffbea]">Contact</a>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#845547] flex flex-col items-center py-4 border-t border-gray-200 sm:hidden animate-slide-down">
            <a
              href="#"
              className="py-2 text-sm text-[#fffbea] hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="/about"
              className="py-2 text-sm text-[#fffbea] hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="py-2 text-sm text-[#fffbea] hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
      <section className="min-h-screen bg-[#845547] text-[#fffbea] flex items-center justify-center py-34 px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 md:translate-x-19 md:translate-y-27">
        {/* Left Column - Form */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="mb-8 text-sm leading-relaxed">
            Questions or ready to get started? Fill out the form below and we’ll get back to you soon.
          </p>

          <form className="space-y-6">
            {/* Name Fields */}
            <div>
              <label className="block text-xs font- mb-1">
                Name <span className="text-xs opacity-70">(required)</span>
              </label>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-xs opacity-">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[#fffbea]/30 bg-white p-2 mt-1  focus:outline-none focus:ring-1 focus:ring-[#fffbea] text-black"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-xs opacity-">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[#fffbea]/30 bg-white p-2 mt-1  focus:outline-none focus:ring-1 focus:ring-[#fffbea] text-black"
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs font- mb-1">
                Email Address <span className="text-xs opacity-70">(required)</span>
              </label>
              <input
                type="email"
                required
                className="w-full border border-[#fffbea]/30 bg-white p-2  focus:outline-none focus:ring-1 focus:ring-[#fffbea] text-black"
              />
            </div>

            {/* How did you hear about us */}
            <div>
              <label className="block text-xs font- mb-1">
                How did you hear about us?{" "}
                <span className="text-xs opacity-70">(required)</span>
              </label>
              <input
                type="text"
                required
                className="w-full border border-[#fffbea]/30 bg-white p-2  focus:outline-none focus:ring-1 focus:ring-[#fffbea] text-black"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font- mb-1">
                Message <span className="text-xs opacity-70">(required)</span>
              </label>
              <textarea
                rows="5"
                required
                className="w-full border border-[#fffbea]/30 bg-white p-2 focus:outline-none focus:ring-1 focus:ring-[#fffbea] text-black"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#fffbea] text-black py-3 font- hover:bg-[#f5e6c4] transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-6 text-sm transform md:translate-x-19">
          <p>
            <span className="font-">NICARA</span> is now offering
            1-on-1<br/> consultations via <em>the expert</em>.
          </p>
          <a
            href="#"
            className="underline font- hover:text-[#f5e6c4]"
          >
            Book Now
          </a>

          <hr className="border-[#fffbea]/30 my-4" />

          <div className="space-y-3">
            <p>
              <span className="font- ">Email:</span><br />
              <a href="mailto:hello@dwelltales.com" className="underline">
              hello@dwelltales.com
              </a>
            </p>

            <p>
              <span className="font-">Instagram:</span><br/>
              <a
                href="https://www.instagram.com/nicaradesign?igsh=MTRyZHkzeDNtMGRoeg=="
                target="_blank"
                className="underline"
              >
                @nicaradesign
              </a>
            </p>

            <p>
              <span className="font-">Phone:</span><br/> 8559901234
            </p>

            <p>
              <span className="font-semibold">Office:</span> <br />
              2nd Floor, 232, Kavuri Hills Phase 2 Rd, beside HDFC Bank,<br/> CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033
            </p>

            <p>
            Visitation is by appointment only&mdash;<br/>send us an email to set up a
            meeting.
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer
    className="text-amber-50 py-16 sm:py-24 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32"
    style={{ backgroundColor: '#755306' }}
  >
    <div className="mx-auto w-full max-w-[2200px] space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Links section */}
        <div className="flex gap-2 sm:gap-4 justify-center md:justify-start text-center md:text-left">
          <a href="#" className="text-sm hover:underline">Projects</a>
          <a href="/about" className="text-sm hover:underline">About</a>
          <a href="#" className="text-sm hover:underline">Contact</a>
          <a href="#" className="text-sm hover:underline">Press</a>
          <a href="#" className="text-sm hover:underline">Work for AC.D</a>
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
