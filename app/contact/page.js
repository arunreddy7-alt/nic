"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function ContactSection() {
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [footerDropdownOpen, setFooterDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    altContact: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    // Here you can add logic to send the data to a server
    setIsModalOpen(false);
    setFormData({
      name: '',
      contact: '',
      altContact: '',
      email: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <div className="relative h-screen bg-[#845547] overflow-x-hidden">
      <div className={isModalOpen ? 'blur-sm pointer-events-none' : ''}>
        {/* ✅ NAVBAR */}
        <nav
        className={`fixed top-0 left-0 right-0 bg-[#845547] flex justify-between items-center w-full px-6 py-4 z-20 transition-transform duration-700 sm:grid sm:grid-cols-3 sm:items-center ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Projects (Desktop Left) */}
        <div className="hidden sm:flex sm:justify-start relative">
          <div
            className="text-sm hover:underline text-[#fffbea] cursor-pointer flex items-center justify-between w-full"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            Projects
          </div>
          {dropdownOpen && (
            <div
              className="absolute top-full left-0 bg-[#845547] shadow-lg py-2 w-48 z-30"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link href="/project/interiors" className="block px-4 py-2 text-sm text-[#fffbea] hover:bg-[#fffbea] hover:text-[#845547]">
                Interiors
              </Link>
              <Link href="/project/buy-stay" className="block px-4 py-2 text-sm text-[#fffbea] hover:bg-[#fffbea] hover:text-[#845547]">
                Buy & Stay
              </Link>
              <Link href="/project/events-experiences" className="block px-4 py-2 text-sm text-[#fffbea] hover:bg-[#fffbea] hover:text-[#845547]">
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
            <div
              className="py-2 text-sm text-[#fffbea] hover:underline cursor-pointer flex items-center justify-center w-full"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Projects
              <ChevronDown className={`w-4 h-5 ml-2 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            {mobileDropdownOpen && (
              <div className="flex flex-col items-center w-full">
                <a
                  href="/project/interiors"
                  className="py-2 text-sm text-[#fffbea] hover:underline pl-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Interiors
                </a>
                <a
                  href="/project/buy-stay"
                  className="py-2 text-sm text-[#fffbea] hover:underline pl-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Buy & Stay
                </a>
                <a
                  href="/project/events-experiences"
                  className="py-2 text-sm text-[#fffbea] hover:underline pl-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Events & Experiences
                </a>
              </div>
            )}
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
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 md:translate-x-19 md:translate-y-11">
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
          <button
            onClick={() => setIsModalOpen(true)}
            className="underline font- hover:text-[#f5e6c4] bg-transparent border-none cursor-pointer"
          >
            Book Now
          </button>

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
      <div className="flex flex-wrap gap-3 sm:gap-6 justify-center md:justify-start text-center md:text-left relative md:-ml-4">
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
      {/* Modal for Booking Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-0 backdrop-blur-sm flex items-center justify-center z-50 pointer-events-auto">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-5 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4 text-black">Book Now</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#845547] text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#845547] text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Alternate Number</label>
                <input
                  type="tel"
                  name="altContact"
                  value={formData.altContact}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#845547] text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#845547] text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Booking Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#845547] text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#845547] text-black"
                >
                  <option value="">Select a time</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#845547] text-black"
                ></textarea>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#845547] text-white py-2 rounded hover:bg-[#6a3f3a] transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-300 text-black py-2 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
