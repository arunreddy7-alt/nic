"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Mail, Phone, ChevronRight, ChevronLeft, Train, Building, MapPin, Waves, Home, Dumbbell, Route, Trophy, Baby, Church, Heart, DoorOpen, Music, Sparkles, GraduationCap, ShoppingBag, Trees, Plane, Stethoscope } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function EventsExperiences() {

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
  const [brochureFormOpen, setBrochureFormOpen] = useState(false);
  const [brochureFormData, setBrochureFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [costSheetFormOpen, setCostSheetFormOpen] = useState(false);
  const [costSheetFormData, setCostSheetFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryImages = ['/gallery1.png', '/gallery2.png', '/gallery3.png', '/gallery7.png', '/gallery5.png', '/gallery8.png', '/gallery4.png', '/gallery6.png', '/gallery9.png'];
  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages]; // 27 images for infinite sliding
  const [imagesPerView, setImagesPerView] = useState(3);
  const [navbarBg, setNavbarBg] = useState('bg-grey');
  const [navbarTextColor, setNavbarTextColor] = useState('text-white');
  const [dropdownBg, setDropdownBg] = useState('bg-grey');

  const nextSlide = useCallback(() => {
    setGalleryIndex((prev) => (prev + 1) % duplicatedImages.length);
  }, [duplicatedImages.length]);

  const prevSlide = useCallback(() => {
    setGalleryIndex((prev) => (prev - 1 + duplicatedImages.length) % duplicatedImages.length);
  }, [duplicatedImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [nextSlide]); // Include nextSlide in dependencies

  useEffect(() => {
    const handleScroll = () => {
      const overviewSection = document.getElementById('overview');
      if (overviewSection) {
        const rect = overviewSection.getBoundingClientRect();
        if (rect.top <= 0) {
          setNavbarBg('bg-white');
          setNavbarTextColor('text-black');
          setDropdownBg('bg-white');
        } else {
          setNavbarBg('bg-grey');
          setNavbarTextColor('text-white');
          setDropdownBg('bg-grey');
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImagesPerView(1);
      } else {
        setImagesPerView(3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        hear_about_us: 'Events & Experiences Page Floating Contact Form',
        message: contactFormData.message,
      },
      'VFpd616Sj6d9RlzWA'
    ).then((result) => {
      console.log('Events & Experiences page floating contact email sent successfully:', result.text);
      alert('Message sent successfully!');
      setContactFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }, (error) => {
      console.error('Error sending Events & Experiences page floating contact email:', error.text);
      alert('Error sending message. Please try again.');
    });
  };

  const handleBrochureInputChange = (e) => {
    const { name, value } = e.target;
    setBrochureFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    console.log('Brochure form submitted:', brochureFormData);

    // Send email using EmailJS
    emailjs.send(
      'service_b769gdc',
      'template_0hzoxjk',
      {
        from_name: brochureFormData.name,
        from_email: brochureFormData.email,
        phone: brochureFormData.phone,
        hear_about_us: 'Avinea Brochure Download',
        message: 'Request for brochure download',
      },
      'VFpd616Sj6d9RlzWA'
    ).then((result) => {
      console.log('Brochure request email sent successfully:', result.text);
      const link = document.createElement('a');
      link.href = '/AVINEA by Vyom-Sigma.pdf';
      link.download = 'AVINEA by Vyom-Sigma.pdf';
      link.click();
      alert('Brochure downloaded successfully!');
      setBrochureFormData({
        name: '',
        phone: '',
        email: ''
      });
      setBrochureFormOpen(false);
    }, (error) => {
      console.error('Error sending brochure request email:', error.text);
      alert('Error sending request. Please try again.');
    });
  };

  const handleCostSheetInputChange = (e) => {
    const { name, value } = e.target;
    setCostSheetFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCostSheetSubmit = (e) => {
    e.preventDefault();
    console.log('Cost Sheet form submitted:', costSheetFormData);

    // Send email using EmailJS
    emailjs.send(
      'service_b769gdc',
      'template_0hzoxjk',
      {
        from_name: costSheetFormData.name,
        from_email: costSheetFormData.email,
        phone: costSheetFormData.phone,
        hear_about_us: 'Avinea Cost Sheet Download',
        message: 'Request for cost sheet download',
      },
      'VFpd616Sj6d9RlzWA'
    ).then((result) => {
      console.log('Cost Sheet request email sent successfully:', result.text);
      // Trigger download
      const link = document.createElement('a');
      link.href = '/AVINEA - General Cost Sheet.pdf';
      link.download = 'AVINEA - General Cost Sheet.pdf';
      link.click();
      alert('Cost Sheet downloaded!');
      setCostSheetFormData({
        name: '',
        phone: '',
        email: ''
      });
      setCostSheetFormOpen(false);
    }, (error) => {
      console.error('Error sending cost sheet request email:', error.text);
      alert('Error sending request. Please try again.');
    });
  };

  return (
    <div className="font-sans relative min-h-screen overflow-x-hidden">
      {/* ✅ NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 ${navbarBg} flex justify-between items-center w-full px-6 py-4 z-20 sm:grid sm:grid-cols-3 sm:items-center font-medium transition-colors duration-300`}
      >
        {/* Projects (Desktop Left) */}
        <div className="hidden sm:flex sm:justify-start relative">
          <div
            className={`text-sm hover:underline ${navbarTextColor} cursor-pointer flex items-center justify-between w-full`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            Projects
          </div>
          {dropdownOpen && (
            <div
              className={`absolute top-full left-0 ${dropdownBg} shadow-lg py-2 w-48 z-30`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link href="/project/interiors" className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-black">
                Interiors
              </Link>
              <Link href="/project/buy-stay" className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-black">
                Buy & Stay
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
            className={`text-lg ${navbarTextColor} font-bold`}
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
            {menuOpen ? <X className={`w-6 h-6 ${navbarTextColor}`} /> : <Menu className={`w-6 h-6 ${navbarTextColor}`} />}
          </button>
        </div>

        {/* About and Contact (Desktop Right) */}
        <div className="hidden sm:flex sm:justify-end gap-5">
          <a href="/about" className={`text-sm hover:underline ${navbarTextColor}`}>About</a>
          <a href="/contact" className={`text-sm hover:underline ${navbarTextColor}`}>Contact</a>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[rgb(31,44,32)] z-50 flex flex-col items-center justify-center slide-up-menu">
            <button
              className={`absolute top-6 right-6 ${navbarTextColor} hover:text-gray-200`}
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="w-8 h-8" />
            </button>
            <div className={`flex flex-col items-center space-y-4 ${navbarTextColor} text-lg font-medium`}>
              <div
                className={`py-2 ${navbarTextColor} hover:underline cursor-pointer flex items-center justify-center w-full`}
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Projects
                <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              {mobileDropdownOpen && (
                <div className="flex flex-col items-center w-full space-y-2">
                  <a
                    href="/project/interiors"
                    className={`py-2 ${navbarTextColor} hover:underline`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Interiors
                  </a>
                  <a
                    href="/project/buy-stay"
                    className={`py-2 ${navbarTextColor} hover:underline`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Buy & Stay
                  </a>
                  <a
                    href="/project/events-experiences"
                    className={`py-2 ${navbarTextColor} hover:underline`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Events & Experiences
                  </a>
                </div>
              )}
              <a
                href="/about"
                className={`py-2 ${navbarTextColor} hover:underline`}
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className={`py-2 ${navbarTextColor} hover:underline`}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-0 pointer-events-auto">
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
            className="fixed right-0 top-1/2 transform -translate-y-3/5 sm:-translate-y-2/4 z-20 bg-white shadow-lg p-6 rounded w-80 sm:w-96 mr-13"
                  style={{ marginTop: '50px' }}
                >
                  <button
                    onClick={() => {
                      setMobileFormOpen(false);
                      setIsFormHovered(false);
                      setIsContactHovered(false);
                    }}
              className="absolute top-6 right-4 text-gray-500 hover:text-gray-700"
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

              {/* Brochure Form */}
              {brochureFormOpen && (
                <div className="fixed inset-0 bg- bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                  <div className="relative bg-white p-6 shadow-lg w-96">
                    <button
                      onClick={() => setBrochureFormOpen(false)}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    <h3 className="text-lg font-bold mb-4 text-black">Download Brochure</h3>
                    <form onSubmit={handleBrochureSubmit}>
                      <div className="mb-4 text-black">
                        <label className="block text-sm font-medium mb-2 text-black">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={brochureFormData.name}
                          onChange={handleBrochureInputChange}
                          required
                          className="w-full p-2 border border-black rounded-4xl"
                        />
                      </div>
                      <div className="mb-4 text-black">
                        <label className="block text-sm font-medium mb-2 text-black">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={brochureFormData.phone}
                          onChange={handleBrochureInputChange}
                          required
                          className="w-full p-2 border border-black rounded-4xl"
                        />
                      </div>
                      <div className="mb-4 text-black">
                        <label className="block text-sm font-medium mb-2 text-black">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={brochureFormData.email}
                          onChange={handleBrochureInputChange}
                          required
                          className="w-full p-2 border border-black rounded-4xl"
                        />
                      </div>
                      <button type="submit" className="bg-[#7E6BF2] text-white px-4 py-2 rounded-4xl hover:bg-[#6a5acd] w-full">Submit</button>
                    </form>
                  </div>
                </div>
              )}

              {/* Cost Sheet Form */}
              {costSheetFormOpen && (
                <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                  <div className="relative bg-white p-6 shadow-lg w-96">
                    <button
                      onClick={() => setCostSheetFormOpen(false)}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    <h3 className="text-lg font-bold mb-4 text-black">Download Cost Sheet</h3>
                    <form onSubmit={handleCostSheetSubmit}>
                      <div className="mb-4 text-black">
                        <label className="block text-sm font-medium mb-2 text-black">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={costSheetFormData.name}
                          onChange={handleCostSheetInputChange}
                          required
                          className="w-full p-2 border border-black rounded-4xl"
                        />
                      </div>
                      <div className="mb-4 text-black">
                        <label className="block text-sm font-medium mb-2 text-black">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={costSheetFormData.phone}
                          onChange={handleCostSheetInputChange}
                          required
                          className="w-full p-2 border border-black rounded-4xl"
                        />
                      </div>
                      <div className="mb-4 text-black">
                        <label className="block text-sm font-medium mb-2 text-black">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={costSheetFormData.email}
                          onChange={handleCostSheetInputChange}
                          required
                          className="w-full p-2 border border-black rounded-4xl"
                        />
                      </div>
                      <button type="submit" className="bg-[#7E6BF2] text-white px-4 py-2 rounded-4xl hover:bg-[#6a5acd] w-full">Submit</button>
                    </form>
                  </div>
                </div>
              )}

      <div className="h-screen relative">
        <Image
          src="/avinea.png"
          alt="Hero Image"
          fill
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 to-transparent"></div>
        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 -mb-14">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white font-poppins opacity-60 text-center font-avenir-next-lt-pro-light font-bold">AVINEA by Vyom-Sigma</h1>
          <button
            className="mt-8 px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition text-sm sm:text-base"
            onClick={() => document.getElementById('overview').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Now
          </button>
        </div>
      </div>

      <div id="overview" className="bg-white text-black px-6 py-16 flex flex-col md:flex-row md:items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-left" style={{ fontFamily: 'Didot, serif' }}>Overview</h2>
          <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>
          Avinea by Vyom Sigma is an exquisite residential development nestled in the heart of Pune. Designed to elevate modern living, this premium project offers spacious and elegantly crafted 2, 3, and 4 BHK apartments that cater to the needs of families, professionals, and investors alike. With a perfect mix of luxury, comfort, and connectivity, Avinea promises to be your ideal home for a lifetime.
          <br /><br />
          The development focuses on upgraded living, high-quality construction, ample green spaces, and world-class amenities, providing an exceptional lifestyle experience to its residents.
          </p>
        </div>
        <div className="flex-1">
          <Image src="/avinea.png" alt="Avinea Overview" width={800} height={600} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="bg-gray-50 text-black px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'Didot, serif' }}>Connectivity Highlights</h2>
        <p className="text-lg leading-relaxed max-w-4xl text-center mb-8 mx-auto" style={{ fontFamily: 'Crimson Text, serif' }}>
          Avinea enjoys an excellent location with seamless access to Pune&apos;s major roads and business districts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-start gap-6">
            <Train className="w-10 h-10 text-gray-600 flex-shrink-0 mt-2" />
            <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>
              Located near major metro stations, bus stops, and transport hubs for easy commuting.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-start gap-4">
            <Building className="w-8 h-8 text-gray-600 flex-shrink-0 mt-2" />
            <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>
              Close to leading corporate offices and tech parks, making it perfect for working professionals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-start gap-4">
            <MapPin className="w-8 h-8 text-gray-600 flex-shrink-0 mt-2" />
            <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>
              Prime connectivity next to Amanora Township, with 8 International schools, 2 Malls, 2 Prestigious hospitals - All within minutes of drive
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white text-black px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'Didot, serif' }}>Amenities</h2>
        <p className="text-lg leading-relaxed max-w-4xl text-center mb-8 mx-auto" style={{ fontFamily: 'Crimson Text, serif' }}>
          55+ Thoughtfully curated expansive Lifestyle Amenities, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <Waves className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>3 Swimming Pools</p>
            </div>
            <div className="flex items-center mb-4">
              <Home className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>3 Clubhouses</p>
            </div>
            <div className="flex items-center mb-4">
              <Dumbbell className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>12000 SQFT - Fitness Centre</p>
            </div>
            <div className="flex items-center">
              <Route className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>1 KM - Jogging Trail</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <Trophy className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Unmatched Sports Facilities</p>
            </div>
            <div className="flex items-center mb-4">
              <Baby className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Extensive Kid&apos;s Centric Amenities</p>
            </div>
            <div className="flex items-center mb-4">
              <Church className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Krushna Temple</p>
            </div>
            <div className="flex items-center">
              <Heart className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Pet Park</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <DoorOpen className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>3 Entrance Gates</p>
            </div>
            <div className="flex items-center mb-4">
              <Music className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Exclusive Music & Dance Training</p>
            </div>
            <div className="flex items-center">
              <Sparkles className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Convenience at doorstep: Movie Theatre, Spa, Cafeteria & Guest Suites</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 text-black px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'Didot, serif' }}>Master Layout</h2>
        <div className="flex justify-center px-4">
          <Image src="/layout.jpg" alt="Master Layout" width={1200} height={800} className="w-full max-w-4xl h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="bg-gray-50 text-black px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'Didot, serif' }}>Gallery</h2>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${galleryIndex * (100 / imagesPerView)}%)` }}
            >
              {duplicatedImages.map((image, index) => (
                <div key={index} className={`flex-shrink-0 px-2 ${imagesPerView === 1 ? 'w-full' : 'w-1/3'}`}>
                  <Image
                    src={image}
                    alt={`Gallery Image ${(index % galleryImages.length) + 1}`}
                    width={400}
                    height={imagesPerView === 1 ? 300 : (index % 3 === 1 ? 288 : 256)}
                    className={`w-full object-cover rounded-lg shadow-md ${
                      imagesPerView === 1 ? 'h-80' : (index % 3 === 1 ? 'h-72' : 'h-64')
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="bg-white text-black px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'Didot, serif' }}>Price Plan</h2>
        <div className="flex justify-center mb-8">
        </div>
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300 border-r border-gray-300">Configuration</th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300 border-r border-gray-300">Built Up Area (sq.ft.)</th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300 border-r border-gray-300">Price</th>
                <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">Brochure</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b border-gray-300 border-r border-gray-300">2 BHK</td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-300 border-r border-gray-300">
                  <button
                    onClick={() => setCostSheetFormOpen(true)}
                    className="bg-[#755306] text-white px-4 py-2 rounded-lg hover:bg-[#5e4204] transition text-xs md:text-sm"
                  >
                    On Request
                  </button>
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-300 border-r border-gray-300">
                  <button
                    onClick={() => setCostSheetFormOpen(true)}
                    className="bg-[#755306] text-white px-4 py-2 rounded-lg hover:bg-[#5e4204] transition text-xs md:text-sm"
                  >
                    On Request
                  </button>
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-300">
                  <button
                    onClick={() => setBrochureFormOpen(true)}
                    className="bg-[#755306] text-white px-4 py-2 rounded-lg hover:bg-[#5e4204] transition text-xs md:text-sm"
                  >
                    Download
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b border-gray-300 border-r border-gray-300">3 BHK</td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-300 border-r border-gray-300">
                  <button
                    onClick={() => setCostSheetFormOpen(true)}
                    className="bg-[#755306] text-white px-4 py-2 rounded-lg hover:bg-[#5e4204] transition text-xs md:text-sm"
                  >
                    On Request
                  </button>
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-300 border-r border-gray-300">
                  <button
                    onClick={() => setCostSheetFormOpen(true)}
                    className="bg-[#755306] text-white px-4 py-2 rounded-lg hover:bg-[#5e4204] transition text-xs md:text-sm"
                  >
                    On Request
                  </button>
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-300">
                  <button
                    onClick={() => setBrochureFormOpen(true)}
                    className="bg-[#755306] text-white px-4 py-2 rounded-lg hover:bg-[#5e4204] transition text-xs md:text-sm"
                  >
                    Download
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">4 BHK</td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300">
                  <button
                    onClick={() => setCostSheetFormOpen(true)}
                    className="bg-[#755306] text-white px-4 py-2 rounded-lg hover:bg-[#5e4204] transition text-xs md:text-sm"
                  >
                    On Request
                  </button>
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300">
                  <button
                    onClick={() => setCostSheetFormOpen(true)}
                    className="bg-[#755306] text-white px-4 py-2 rounded-lg hover:bg-[#5e4204] transition text-xs md:text-sm"
                  >
                    On Request
                  </button>
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => setBrochureFormOpen(true)}
                    className="bg-[#755306] text-white px-4 py-2 rounded-lg hover:bg-[#5e4204] transition text-xs md:text-sm"
                  >
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white text-black px-6 py-16 flex flex-col md:flex-row md:items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-9 text-center" style={{ fontFamily: 'Didot, serif' }}>Location Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <GraduationCap className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Wisdom World School - <span className="font-bold">1 Min</span></p>
            </div>
            <div className="flex items-center">
              <GraduationCap className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Amanora School - <span className="font-bold">4 Min</span></p>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Falcon Street - <span className="font-bold">0 Min</span></p>
            </div>
            <div className="flex items-center">
              <ShoppingBag className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Seasons Mall - <span className="font-bold">5 Min</span></p>
            </div>
            <div className="flex items-center">
              <Building className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Magarpatta IT Park - <span className="font-bold">5 Min</span></p>
            </div>
            <div className="flex items-center">
              <Trees className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Koregaon Park - <span className="font-bold">16 Min</span></p>
            </div>
            <div className="flex items-center">
              <Building className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Hinjewadi IT Park - <span className="font-bold">15 Min</span></p>
            </div>
            <div className="flex items-center">
              <Train className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Hadapsar Railway Station - <span className="font-bold">7 Min</span></p>
            </div>
            <div className="flex items-center">
              <Plane className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Pune International Airport - <span className="font-bold">35 Min</span></p>
            </div>
            <div className="flex items-center">
              <Stethoscope className="w-6 h-6 text-gray-600 mr-3" />
              <p className="text-lg leading-relaxed text-left" style={{ fontFamily: 'Crimson Text, serif' }}>Umang Hospital - <span className="font-bold">1 Min</span></p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image src="/location.png" alt="Location Map" width={800} height={600} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="bg-gray-50 text-black px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'Didot, serif' }}>About the Developer</h2>
        <p className="text-lg leading-relaxed max-w-4xl text-center mx-auto px-4" style={{ fontFamily: 'Crimson Text, serif' }}>
          Vyom Sigma Developers is a trusted name in Pune&apos;s real estate market, known for its commitment to quality, innovation, and customer satisfaction. Focused on blending luxury, functionality, and sustainability, they deliver world-class residential and commercial projects. With a portfolio of successful developments, Vyom Sigma continues to create timeless homes that offer not just properties, but a superior lifestyle.
        </p>
      </div>

     <footer
     className="text-amber-50 py-16 sm:py-24 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32"
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
