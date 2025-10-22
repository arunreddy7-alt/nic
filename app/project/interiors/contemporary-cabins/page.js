"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Menu, X, ChevronDown, Mail, Phone, ChevronRight, ChevronLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContemporaryCabins() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [footerDropdownOpen, setFooterDropdownOpen] = useState(false);
  const [contactBarOpen, setContactBarOpen] = useState(true);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isFormHovered, setIsFormHovered] = useState(false);
  const [mobileFormOpen, setMobileFormOpen] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactFormData);

    // Send email using EmailJS (same as main contact form)
    emailjs.send(
      'service_b769gdc',
      'template_0hzoxjk',
      {
        from_name: contactFormData.name,
        from_email: contactFormData.email,
        phone: contactFormData.phone,
        hear_about_us: 'Contemporary Cabins Page Floating Contact Form',
        message: contactFormData.message,
      },
      'VFpd616Sj6d9RlzWA'
    ).then((result) => {
      console.log('Contemporary Cabins page floating contact email sent successfully:', result.text);
      alert('Message sent successfully!');
      setContactFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }, (error) => {
      console.error('Error sending Contemporary Cabins page floating contact email:', error.text);
      alert('Error sending message. Please try again.');
    });
  };

  return (
    <div className="font-sans relative min-h-screen bg-white overflow-x-hidden">

      {/* ✅ NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 bg-white flex justify-between items-center w-full px-6 py-4 z-20 sm:grid sm:grid-cols-3 sm:items-center font-medium"
      >
        {/* Projects (Desktop Left) */}
        <div className="hidden sm:flex sm:justify-start relative">
          <div
            className="text-sm hover:underline text-black cursor-pointer flex items-center justify-between w-full font-avenir-next-lt-pro-light font-medium"
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
              <Link href="/project/interiors" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 font-avenir-next-lt-pro-light font-medium">
                Interiors
              </Link>
              <Link href="/project/buy-stay" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 font-avenir-next-lt-pro-light font-medium">
                Buy & Stay
              </Link>
              <Link href="/project/events-experiences" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 font-avenir-next-lt-pro-light font-medium">
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
          <a href="/about" className="text-sm hover:underline text-black font-avenir-next-lt-pro-light font-medium">About</a>
          <a href="/contact" className="text-sm hover:underline text-black font-avenir-next-lt-pro-light font-medium">Contact</a>
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
                    href="/project/buy-stay"
                    className="py-2 text-white hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Buy & Stay
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

      {/* Floating Contact Bar */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10 flex flex-col space-y-0">
        {/* Toggle Button */}
        <button
          onClick={() => setContactBarOpen(!contactBarOpen)}
          className={`bg-black flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? 'w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] translate-x-0' : 'w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full translate-x-1/2'
          }`}
        >
          {contactBarOpen ? <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" /> : <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
        {/* Contact Us Button */}
        <div
          onMouseEnter={() => setIsContactHovered(true)}
          onMouseLeave={() => setIsContactHovered(false)}
          onClick={() => setMobileFormOpen(!mobileFormOpen)}
          className={`w-[40px] h-[120px] sm:w-[50px] sm:h-[150px] bg-[#7E6BF2] flex flex-col items-center justify-start pt-12 sm:pt-15 text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <span className="text-xs sm:text-sm transform -rotate-90 whitespace-nowrap mb-6 sm:mb-8">Contact Us</span>
          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8559901234"
          className={`w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-[#2C2C2C] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
        {/* Call Button */}
        <a
          href="tel:8559901234"
          className={`w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-[#25D366] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>

        {/* Contact Form */}
        {contactBarOpen && ((isContactHovered || isFormHovered) || mobileFormOpen) && (
          <div
            onMouseEnter={() => setIsFormHovered(true)}
            onMouseLeave={() => setIsFormHovered(false)}
            className="fixed right-0 top-1/2 transform -translate-y-3/5 sm:-translate-y-2/4 z-20 bg-white shadow-lg p-6 rounded w-80 sm:w-96 mr-12"
            style={{ marginTop: '50px' }}
          >
            <button
              onClick={() => {
                setMobileFormOpen(false);
                setIsFormHovered(false);
                setIsContactHovered(false);
              }}
              className="absolute top-6 right-4 text-gray-500 hover:text-gray-700 sm:hidden"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-lg font-bold mb-4 text-black">Contact Form</h3>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-4 text-black">
                <label className="block text-sm font-medium mb-2 text-black">Name</label>
                <input
                  type="text"
                  name="name"
                  value={contactFormData.name}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded-4xl"
                />
              </div>
              <div className="mb-4 text-black">
                <label className="block text-sm font-medium mb-2 text-black">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={contactFormData.phone}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded-4xl"
                />
              </div>
              <div className="mb-4 text-black">
                <label className="block text-sm font-medium mb-2 text-black">Email</label>
                <input
                  type="email"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded-4xl"
                />
              </div>
              <div className="mb-4 text-black">
                <label className="block text-sm font-medium mb-2 text-black">Message</label>
                <textarea
                  name="message"
                  value={contactFormData.message}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded-2xl"
                  rows="2"
                ></textarea>
              </div>
              <button type="submit" className="bg-[#7E6BF2] text-white px-4 py-2 rounded-4xl hover:bg-[#6a5acd] w-full">Submit</button>
            </form>
          </div>
        )}

      <div className="pt-24 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center">
          <Image src="/int4-1.png" alt="Contemporary Cabins" width={700} height={400} className="w-[700px] h-[400px] object-cover" />
          <h1 className="mt-4 text-black text-center font-avenir-next-lt-pro-light font-medium text-2xl">Contemporary Cabins, Washington - In Process</h1>
          <p className="mt-2 text-black text-center font-avenir-next-lt-pro-light font-light">Modern cabin designs blending contemporary aesthetics with natural surroundings.</p>
          <Link href="/project/interiors" className="mt-4 text-black hover:underline font-avenir-next-lt-pro-light font-medium">← Back to Interiors</Link>
        </div>
      </div>
      <footer
      className="mt-15 md:mt-30 text-amber-50 py-16 sm:py-24 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32"
      style={{ backgroundColor: '#755306' }}
    >
      <div className="mx-auto w-full max-w-[2200px] space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Links section */}
          <div className="flex flex-wrap gap-3 sm:gap-6 justify-center md:justify-start text-center md:text-left relative md:-ml-4">
                        <div className="relative ">
                    <button
                      className="md:hidden text-md hover:underline flex items-center font-avenir-next-lt-pro-light font-light"
                      onClick={() => setFooterDropdownOpen(!footerDropdownOpen)}
                    >
                      Projects
                            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${footerDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>
                          <a
                            href="#"
                            className="hidden md:block text-md hover:underline font-avenir-next-lt-pro-light font-light"
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
                              <a href="/project/interiors" className="block px-4 py-2 text-sm text-amber-50 hover:bg-amber-50 hover:text-[#755306] font-avenir-next-lt-pro-light font-light">
                                Interiors
                              </a>
                              <a href="/project/buy-stay" className="block px-4 py-2 text-sm text-amber-50 hover:bg-amber-50 hover:text-[#755306] font-avenir-next-lt-pro-light font-light">
                                Buy & Stay
                              </a>
                              <a href="/project/events-experiences" className="block px-4 py-2 text-sm text-amber-50 hover:bg-amber-50 hover:text-[#755306] font-avenir-next-lt-pro-light font-light">
                                Events & Experiences
                              </a>
                            </div>
                          )}
                        </div>
                        <a href="/about" className="text-md hover:underline ml-4 font-avenir-next-lt-pro-light font-light">About</a>
                        <a href="/contact" className="text-md hover:underline ml-4 font-avenir-next-lt-pro-light font-light">Contact</a>
                      </div>
                
                      {/* Description section */}
                      <div className="text-[1.05rem] text-center md:text-left md:-mr-39 md:ml-80 px-4 md:px-0" style={{ fontFamily: 'Crimson Text, serif' }}>
                         Established in 2019, Nicara Design is a full-service design firm based in Hyderabad, India.
                      </div>
          
                      {/* Social section */}
                      <div className="text-[1.05rem] text-center md:text-left md:-mr-19 md:ml-52 space-y-1 px-4 md:px-0" style={{ fontFamily: 'Crimson Text, serif' }}>
                        <div>
                          IG: <a href="https://www.instagram.com/nicaradesign?igsh=MTRyZHkzeDNtMGRoeg==" className="underline hover:no-underline">@nicaradesign</a>
                        </div>
                        <div>
                          Phone: <a href="tel:8559901234" className="underline hover:no-underline">+91 855 990 1234</a>
                        </div>
                      </div>
                    </div>
          
                    {/* Bottom section */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-[1.05rem] gap-4 text-center md:text-left -ml-5" style={{ fontFamily: 'Crimson Text, serif' }}>
                      <div>
                        Questions? Reach out:<br />
                        <a href="mailto:hello@dwelltales.com" className="underline hover:no-underline">
                        hello@dwelltales.com
                        </a>
                      </div>
                      </div>
                      <div className="ml-256 text-md -mb-12 -mt-18" style={{ fontFamily: 'font-avenir-next-lt-pro-light, serif' }}>Nicara Design © 2025</div>
                  </div>
                </footer>
    </div>
  );
}
