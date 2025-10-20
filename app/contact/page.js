"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Menu, X, ChevronDown, Mail, Phone, ChevronRight, ChevronLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';


export default function ContactSection() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [footerDropdownOpen, setFooterDropdownOpen] = useState(false);
  const [contactBarOpen, setContactBarOpen] = useState(true);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isFormHovered, setIsFormHovered] = useState(false);
  const [mobileFormOpen, setMobileFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    altContact: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });
  const [bookings, setBookings] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([
    '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ]);
  const [mainContactFormData, setMainContactFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    hearAboutUs: '',
    message: ''
  });

  const [contactFormData, setContactFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });



  useEffect(() => {
    // Load bookings from JSON file
    const loadBookings = async () => {
      try {
        const response = await fetch('/bookings.json');
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error loading bookings:', error);
      }
    };
    loadBookings();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
        hear_about_us: 'Floating Contact Form',
        message: contactFormData.message,
      },
      'VFpd616Sj6d9RlzWA'
    ).then((result) => {
      console.log('Floating contact email sent successfully:', result.text);
      alert('Message sent successfully!');
      setContactFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }, (error) => {
      console.error('Error sending floating contact email:', error.text);
      alert('Error sending message. Please try again.');
    });
  };

  const handleMainContactInputChange = (e) => {
    const { name, value } = e.target;
    setMainContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMainContactSubmit = (e) => {
    e.preventDefault();
    console.log('Main contact form submitted:', mainContactFormData);

    // Send email using EmailJS
    emailjs.send(
      'service_b769gdc',
      'template_0hzoxjk',
      {
        from_name: mainContactFormData.firstName + ' ' + mainContactFormData.lastName,
        from_email: mainContactFormData.email,
        hear_about_us: mainContactFormData.hearAboutUs,
        message: mainContactFormData.message,
      },
      'VFpd616Sj6d9RlzWA'
    ).then((result) => {
      console.log('Main contact email sent successfully:', result.text);
      alert('Message sent successfully!');
      setMainContactFormData({
        firstName: '',
        lastName: '',
        email: '',
        hearAboutUs: '',
        message: ''
      });
    }, (error) => {
      console.error('Error sending main contact email:', error.text);
      alert('Error sending message. Please try again.');
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);

    // Check if the selected date and time is already booked
    const isBooked = bookings.some(booking => booking.date === formData.date && booking.time === formData.time);
    if (isBooked) {
      alert('This date and time is already booked. Please select another slot.');
      return;
    }

    // Add new booking
    const newBooking = { ...formData };
    const updatedBookings = [...bookings, newBooking];

    // Save to JSON file (in a real app, this would be done on the server)
    try {
      await fetch('/api/saveBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBooking),
      });
      setBookings(updatedBookings);

    // Send email using EmailJS
    emailjs.send(
      'service_dnpy3z5',
      'template_2fe0lt9',
      {
        from_name: newBooking.name,
        from_email: newBooking.email,
        contact: newBooking.contact,
        alt_contact: newBooking.altContact,
        date: newBooking.date,
        time: newBooking.time,
        message: newBooking.message,
      },
      'VFpd616Sj6d9RlzWA'
    ).then((result) => {
        console.log('Booking email sent successfully:', result.text);
      }, (error) => {
        console.error('Error sending booking email:', error.text);
      });

      alert('Booking submitted successfully!');
    } catch (error) {
      console.error('Error saving booking:', error);
      alert('Error saving booking. Please try again.');
    }

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
    <div className="relative h-screen bg-[#845547] overflow-x-hidden font-avenir-next-lt-pro-light font-medium">
      <div className={isModalOpen ? 'blur-sm pointer-events-none' : ''}>
        {/* ✅ NAVBAR */}
        <nav
        className="fixed top-0 left-0 right-0 bg-[#845547] flex justify-between items-center w-full px-6 py-4 z-20 sm:grid sm:grid-cols-3 sm:items-center font-medium"
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
                <label className="block text-sm font-medium mb-2 text-black ">Name</label>
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

      <section className="min-h-screen bg-[#845547] text-[#fffbea] flex items-center justify-center py-34 px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 md:translate-x-19 md:translate-y-11">
        {/* Left Column - Form */}
        <div>
          <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: 'serif' }}>Contact Us</h2>
          <p className="mb-8 text-sm leading-relaxed font-avenir-next-lt-pro-light font-medium">
            Questions or ready to get started? Fill out the form below and we’ll get back to you soon.
          </p>

          <form onSubmit={handleMainContactSubmit} className="space-y-6">
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
                    name="firstName"
                    value={mainContactFormData.firstName}
                    onChange={handleMainContactInputChange}
                    required
                    className="w-full border border-[#fffbea]/30 bg-white p-2 mt-1  focus:outline-none focus:ring-1 focus:ring-[#fffbea] text-black"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-xs opacity-">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={mainContactFormData.lastName}
                    onChange={handleMainContactInputChange}
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
                name="email"
                value={mainContactFormData.email}
                onChange={handleMainContactInputChange}
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
                name="hearAboutUs"
                value={mainContactFormData.hearAboutUs}
                onChange={handleMainContactInputChange}
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
                name="message"
                value={mainContactFormData.message}
                onChange={handleMainContactInputChange}
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
              <div className="relative ">
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
              <a href="/about" className="text-sm hover:underline ml-4">About</a>
              <a href="/contact" className="text-sm hover:underline ml-4">Contact</a>
            </div>
      
            {/* Description section */}
            <div className="text-sm text-center md:text-left md:-mr-39 md:ml-80 px-4 md:px-0">
              Established in 2019, Nicara Design is a full-service design firm based in Hyderabad, India.
            </div>
      
            {/* Social section */}
            <div className="text-sm text-center md:text-left md:-mr-19 md:ml-52 space-y-1 px-4 md:px-0">
              <div>
                IG: <a href="https://www.instagram.com/nicaradesign?igsh=MTRyZHkzeDNtMGRoeg==" className="underline hover:no-underline">@nicaradesign</a>
              </div>
            </div>
          </div>
      
          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-center md:text-left -ml-5">
            <div>
              Questions? Reach out:<br />
              <a href="mailto:hello@dwelltales.com" className="underline hover:no-underline">
              hello@dwelltales.com
              </a>
            </div>
            </div>
            <div className="ml-256 text-sm -mb-12 -mt-18">Nicara Design © 2025</div>
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
                  {availableTimes.map(time => {
                    const isBooked = bookings.some(booking => booking.date === formData.date && booking.time === time);
                    return (
                      <option key={time} value={time} disabled={isBooked}>
                        {time} {isBooked ? '(Booked)' : ''}
                      </option>
                    );
                  })}
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
