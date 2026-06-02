"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import Footer from "./components/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const [contactBarOpen, setContactBarOpen] = useState(true);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isFormHovered, setIsFormHovered] = useState(false);
  const [mobileFormOpen, setMobileFormOpen] = useState(false);
  const [showPopupForm, setShowPopupForm] = useState(false);

  const [contactFormData, setContactFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hearAboutUs: "",
    message: "",
  });

  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  // Video control states
  const [videoVolume, setVideoVolume] = useState(1);
  const [videoMuted, setVideoMuted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [controlsTimeout, setControlsTimeout] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopupForm(true);
    }, 3000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showPopupForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopupForm]);

  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactFormData);

    // Send email using EmailJS (same as main contact form)
    emailjs
      .send(
        "service_b769gdc",
        "template_0hzoxjk",
        {
          from_name: contactFormData.name,
          from_email: contactFormData.email,
          phone: contactFormData.phone,
          hear_about_us: contactFormData.hearAboutUs,
          message: contactFormData.message,
        },
        "VFpd616Sj6d9RlzWA",
      )
      .then(
        (result) => {
          console.log(
            "Home page popup contact email sent successfully:",
            result.text,
          );
          alert("Message sent successfully!");
          setContactFormData({
            name: "",
            phone: "",
            email: "",
            hearAboutUs: "",
            message: "",
          });
          setShowPopupForm(false);
        },
        (error) => {
          console.error(
            "Error sending home page popup contact email:",
            error.text,
          );
          alert("Error sending message. Please try again.");
        },
      );
  };

  // Video control functions
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (videoPlaying) {
        video.pause();
        setVideoPlaying(false);
      } else {
        video.play();
        setVideoPlaying(true);
      }
    }
  };

  const handleVideoProgress = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      const progress = (video.currentTime / video.duration) * 100;
      setVideoProgress(progress);
      setVideoCurrentTime(video.currentTime);
    }
  };

  const handleVideoLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      console.log("Video metadata loaded:", {
        duration: video.duration,
        readyState: video.readyState,
        networkState: video.networkState,
      });

      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        setVideoDuration(video.duration);
      }
    }
  };

  const handleVideoCanPlay = () => {
    const video = videoRef.current;
    if (video) {
      console.log("Video can play:", {
        duration: video.duration,
        readyState: video.readyState,
      });

      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        setVideoDuration(video.duration);
      }
    }
  };

  const handleVideoLoadStart = () => {
    console.log("Video load started");
  };

  const handleVideoLoadedData = () => {
    const video = videoRef.current;
    if (video) {
      console.log("Video loaded data:", {
        duration: video.duration,
        readyState: video.readyState,
      });

      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        setVideoDuration(video.duration);
      }
    }
  };

  // Force metadata loading effect
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force load metadata
      video.load();

      const checkMetadata = () => {
        if (video.duration && !isNaN(video.duration) && video.duration > 0) {
          setVideoDuration(video.duration);
        } else {
          // Retry after a short delay
          setTimeout(checkMetadata, 100);
        }
      };

      // Start checking after a brief delay
      setTimeout(checkMetadata, 500);
    }
  }, []);

  const handleVideoSeeking = (e) => {
    const video = videoRef.current;
    if (video && video.duration) {
      const seekTime = (parseFloat(e.target.value) / 100) * video.duration;
      video.currentTime = seekTime;
      setVideoProgress(parseFloat(e.target.value));
    }
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    const newVolume = parseFloat(e.target.value);
    if (video) {
      video.volume = newVolume;
      setVideoVolume(newVolume);
      setVideoMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      if (videoMuted) {
        video.volume = videoVolume;
        setVideoMuted(false);
      } else {
        video.volume = 0;
        setVideoMuted(true);
      }
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const toggleFullscreen = () => {
    const videoContainer = document.getElementById("video-container");
    if (videoContainer) {
      if (!isFullscreen) {
        if (videoContainer.requestFullscreen) {
          videoContainer.requestFullscreen();
        } else if (videoContainer.webkitRequestFullscreen) {
          videoContainer.webkitRequestFullscreen();
        } else if (videoContainer.mozRequestFullScreen) {
          videoContainer.mozRequestFullScreen();
        } else if (videoContainer.msRequestFullscreen) {
          videoContainer.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimeout) {
      clearTimeout(controlsTimeout);
    }
    const timeout = setTimeout(() => {
      if (videoPlaying) {
        setShowControls(false);
      }
    }, 3000);
    setControlsTimeout(timeout);
  };

  const handleKeyPress = (e) => {
    const video = videoRef.current;
    if (!video) return;

    switch (e.code) {
      case "Space":
        e.preventDefault();
        togglePlayPause();
        break;
      case "ArrowLeft":
        e.preventDefault();
        video.currentTime = Math.max(0, video.currentTime - 10);
        break;
      case "ArrowRight":
        e.preventDefault();
        video.currentTime = Math.min(video.duration, video.currentTime + 10);
        break;
      case "KeyM":
        e.preventDefault();
        toggleMute();
        break;
      case "KeyF":
        e.preventDefault();
        toggleFullscreen();
        break;
    }
  };

  // Effect to handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        !!(
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement
        ),
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange,
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange,
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange,
      );
    };
  }, []);

  // Effect to add keyboard event listeners
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [videoPlaying, videoMuted, videoVolume, isFullscreen, handleKeyPress]);

  return (
    <div className="font-sans relative min-h-screen bg-white overflow-x-hidden">
      {/* ✅ NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-white flex justify-between items-center w-full px-6 py-4 z-20 sm:grid sm:grid-cols-3 sm:items-center font-medium">
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
              <Link
                href="/project/interiors"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
              >
                Interiors
              </Link>
              <Link
                href="/project/events-experiences"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
              >
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
            style={{ fontFamily: "Didot, serif" }}
          >
            NICARA
          </Link>

          {/* Hamburger Menu (mobile only) */}
          <button
            className="sm:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* About and Contact (Desktop Right) */}
        <div className="hidden sm:flex sm:justify-end gap-5">
          <a href="/about" className="text-sm hover:underline text-black">
            About
          </a>
          <a href="/contact" className="text-sm hover:underline text-black">
            Contact
          </a>
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
                <ChevronDown
                  className={`w-5 h-5 ml-2 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
                />
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

      {/* Floating Contact Bar */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10 flex flex-col space-y-0">
        {/* Toggle Button */}
        <button
          onClick={() => setContactBarOpen(!contactBarOpen)}
          className={`bg-black flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen
              ? "w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] translate-x-0"
              : "w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full translate-x-1/2"
          }`}
        >
          {contactBarOpen ? (
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
        {/* Contact Us Button */}
        <div
          onMouseEnter={() => setIsContactHovered(true)}
          onMouseLeave={() => setIsContactHovered(false)}
          onClick={() => setMobileFormOpen(!mobileFormOpen)}
          className={`w-[40px] h-[120px] sm:w-[50px] sm:h-[150px] bg-[#7E6BF2] flex flex-col items-center justify-start pt-12 sm:pt-15 text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <span className="text-xs sm:text-sm transform -rotate-90 whitespace-nowrap mb-6 sm:mb-8">
            Contact Us
          </span>
          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8559901234"
          className={`w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-[#2C2C2C] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>
        {/* Call Button */}
        <a
          href="tel:8559901234"
          className={`w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-[#25D366] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-200 ${
            contactBarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>

      {/* Contact Form */}
      {contactBarOpen &&
        (isContactHovered || isFormHovered || mobileFormOpen) && (
          <div
            onMouseEnter={() => setIsFormHovered(true)}
            onMouseLeave={() => setIsFormHovered(false)}
            className="fixed right-0 top-1/2 transform -translate-y-3/5 sm:-translate-y-2/4 z-20 bg-white shadow-lg p-6 rounded w-80 sm:w-96 mr-12"
            style={{ marginTop: "50px" }}
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
                <label className="block text-sm font-medium mb-2 text-black">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactFormData.name}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded text-black"
                />
              </div>
              <div className="mb-4 text-black">
                <label className="block text-sm font-medium mb-2 text-black">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={contactFormData.phone}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded"
                />
              </div>
              <div className="mb-4 text-black">
                <label className="block text-sm font-medium mb-2 text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded"
                />
              </div>
              <div className="mb-4 text-black">
                <label className="block text-sm font-medium mb-2 text-black">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  name="hearAboutUs"
                  value={contactFormData.hearAboutUs}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded"
                />
              </div>
              <div className="mb-4 text-black">
                <label className="block text-sm font-medium mb-2 text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  value={contactFormData.message}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#7E6BF2] text-white px-4 py-2 rounded hover:bg-[#6a5acd] w-full"
              >
                Submit
              </button>
            </form>
          </div>
        )}

      {/* ✅ HERO SECTION */}
      <main className="relative flex aspect-[818/898] w-full overflow-hidden bg-white sm:aspect-[1600/898] lg:aspect-auto lg:min-h-[100svh]">
        <Image
          src="/hero.png"
          alt="Nicara cover image"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </main>

      {/* ✅ ABOUT SECTION */}
      <section
        id="about"
        className="bg-white px-4 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-24 xl:px-32"
      >
        <div className="mx-auto w-full max-w-[2200px] grid grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-10 items-start">
          <div className="text-black leading-8 md:sticky md:top-28 pl-0 sm:pl-4 md:pl-0 -ml-0 md:-ml-22">
            <p className="text-sm sm:text-base md:text-sm mb-4 font-avenir-next-lt-pro-light font-medium">
              NICARA is a Interior Architecture & Lifestyle
              Studio shaping luxury residential, commercial, and hospitality
              projects across India.{" "}
            </p>
            <p className="text-sm sm:text-base md:text-sm mb-4 font-avenir-next-lt-pro-light font-medium">
              We craft thoughtful, bespoke interiors, curate signature furniture
              and decor, provide styling, and design exclusive events and
              experiences - all infused with warmth, playfulness, and subtle
              theatricality.{" "}
            </p>
            <p className="text-sm sm:text-base md:text-sm font-avenir-next-lt-pro-light font-medium">
              For our clients, we also scout and curate handpicked spaces
              aligned with their lifestyle vision, including apartments, villas,
              residential <br />
              and farm plots, holiday homes, and select commercial spaces. From
              discovering the right space to designing and executing the
              complete environment, NICARA offers a seamless path to refined,
              effortless living.
            </p>

            <div className="relative inline-block">
              <Link
                href="/project/interiors"
                className="inline-block mt-8 text-sm sm:text-base underline underline-offset-4 hover:opacity-70 ml-2 md:ml-0 font-medium"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:translate-x-25">
            <Link
              href="/project/interiors"
              className="w-full aspect-[4/5] bg-gray-100 overflow-hidden"
            >
              <Image
                src="/home/hero1.png"
                alt="Project 1"
                width={1200}
                height={1500}
                className="w-full h-full object-cover"
              />
            </Link>
            <Link
              href="/project/interiors"
              className="w-full aspect-[4/5] bg-gray-100 overflow-hidden"
            >
              <Image
                src="/home/hero2.png"
                alt="Project 2"
                width={1200}
                height={1500}
                className="w-full h-full object-cover"
              />
            </Link>
            <Link
              href="/project/interiors"
              className="w-full aspect-[4/5] bg-gray-100 overflow-hidden"
            >
              <Image
                src="/home/hero3.png"
                alt="Project 3"
                width={1200}
                height={1500}
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ NEXT SECTION */}
      <section id="next" className="bg-white w-screen">
        <div className="w-full">
          <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[100vh]">
            <Image
              src="/hero5.png"
              alt="Showcase image"
              fill
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ✅ TESTIMONIALS SECTION */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32 ">
        <div className="mx-auto w-full max-w-[2200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "“From design concept to completion, Nicara handled everything with precision and care. Their project management made the entire process smooth and stress-free.”",
                cite: "— Meera T., Private Residence, Bengaluru",
              },
              {
                quote:
                  '"We spent months looking for a holiday home but nothing matched our vision - until Nicara took charge. They found us the perfect space & beautifully executed the interiors with every detail in place. The result is a space that feels personal, peaceful, & meaningful to us."',
                cite: "— Vikram P., Investor, Goa",
              },
              {
                quote:
                  '"We had a vision for our restaurant but struggled to translate it into reality. Nicara stepped in, refined our concept, and executed layout, lighting, seating and decor beautifully. Today, customers praise the ambience as much as the food its truly the space we imagined."',
                cite: "— Sanya R., Restaurant Owner, Hyderabad",
              },
            ].map((t, i) => (
              <div key={i} className="text-black">
                <blockquote className="text-sm md:text-md leading-relaxed mb-4 font-avenir-next-lt-pro-light font-medium">
                  {t.quote}
                </blockquote>
                <cite className="text-sm underline font-avenir-next-lt-pro-light font-medium">
                  {t.cite}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FULL VIDEO */}
      <section className="bg-white min-h-screen">
        <div
          id="video-container"
          className="
            relative w-full 
            h-[30vh]              /* 📱 mobile height */
            sm:h-[70vh]           /* 📱 large mobile */
            md:h-[100vh]          /* 💻 desktop untouched */
            bg-black overflow-hidden
          "
          onMouseMove={showControlsTemporarily}
          onMouseLeave={() => videoPlaying && setShowControls(false)}
          onClick={togglePlayPause}
        >
          <video
            ref={videoRef}
            src="/nicara.mp4"
            poster="/IMG_9927.jpg"
            playsInline
            preload="metadata"
            className="w-full h-full object-cover cursor-pointer"
            onTimeUpdate={handleVideoProgress}
            onLoadedMetadata={handleVideoLoadedMetadata}
            onLoadStart={handleVideoLoadStart}
            onLoadedData={handleVideoLoadedData}
            onPlay={() => setVideoPlaying(true)}
            onPause={() => setVideoPlaying(false)}
            onWaiting={() => setIsBuffering(true)}
            onCanPlay={() => {
              handleVideoCanPlay();
              setIsBuffering(false);
            }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Loading Spinner */}
          {isBuffering && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Video Controls Overlay */}
          <div
            className={`
              absolute bottom-0 left-0 right-0 
              bg-gradient-to-t from-black/80 via-black/40 to-transparent
              p-4 transition-opacity duration-300
              ${showControls ? "opacity-100" : "opacity-0"}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max="100"
                value={videoProgress}
                onChange={handleVideoSeeking}
                className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${videoProgress}%, #6b7280 ${videoProgress}%, #6b7280 100%)`,
                }}
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-white">
              {/* Left Controls */}
              <div className="flex items-center space-x-4">
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlayPause}
                  className="hover:scale-110 transition-transform"
                >
                  {videoPlaying ? (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                {/* Volume Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleMute}
                    className="hover:scale-110 transition-transform"
                  >
                    {videoMuted || videoVolume === 0 ? (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                      </svg>
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={videoMuted ? 0 : videoVolume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${(videoMuted ? 0 : videoVolume) * 100}%, #6b7280 ${(videoMuted ? 0 : videoVolume) * 100}%, #6b7280 100%)`,
                    }}
                  />
                </div>

                {/* Time Display */}
                <div className="text-sm font-mono">
                  {formatTime(videoCurrentTime)} / {formatTime(videoDuration)}
                </div>
              </div>

              {/* Right Controls */}
              <div className="flex items-center space-x-4">
                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  className="hover:scale-110 transition-transform"
                >
                  {isFullscreen ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Center Play Button (when paused) */}
          {!videoPlaying && !isBuffering && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlayPause}
                className="
                  w-20 h-20 
                  bg-white bg-opacity-90 
                  rounded-full 
                  flex items-center justify-center 
                  hover:bg-opacity-100 
                  hover:scale-110
                  transition-all duration-200
                  cursor-pointer
                  shadow-lg
                "
              >
                <svg
                  className="w-8 h-8 text-black ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Slider Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 12px;
            width: 12px;
            border-radius: 50%;
            background: #ef4444;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          
          .slider::-moz-range-thumb {
            height: 12px;
            width: 12px;
            border-radius: 50%;
            background: #ef4444;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
        `,
        }}
      />

      {/* Popup Contact Form */}
      {showPopupForm && (
        <div
          className="fixed inset-0 bg-opacity-0 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowPopupForm(false)}
        >
          <div
            className="bg-white p-6 shadow-lg w-96 relative flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopupForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-lg font-bold mb-4 text-black text-center font-poppins">
              Get a Free Curated Consultation
            </h3>
            <form
              onSubmit={handleContactSubmit}
              className="flex flex-col space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactFormData.name}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={contactFormData.phone}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  name="hearAboutUs"
                  value={contactFormData.hearAboutUs}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  value={contactFormData.message}
                  onChange={handleContactInputChange}
                  required
                  className="w-full p-2 border border-black rounded text-black"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#7E6BF2] text-white px-4 py-2 rounded hover:bg-[#6a5acd] w-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ✅ FOOTER */}
      <Footer className="-mt-138 sm:-mt-8 md:mt-0" />
    </div>
  );
}
