"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import FloatingContactBar from "../../../components/FloatingContactBar";
import Footer from "../../../components/Footer";

const images = {
  cover: {
    src: "/p1/p_img1.png",
    alt: "Rajapushpa Eterna",
    width: 1920,
    height: 1080,
  },
  gallery: [
    {
      src: "/p1/p_img2.png",
      alt: "Rajapushpa Eterna living room",
      width: 1125,
      height: 1500,
    },
    {
      src: "/p1/p_img3.png",
      alt: "Rajapushpa Eterna interior view",
      width: 1500,
      height: 2000,
    },
    {
      src: "/p1/p_img4.png",
      alt: "Rajapushpa Eterna lounge",
      width: 1500,
      height: 2000,
    },
    {
      src: "/p1/p_img5.png",
      alt: "Rajapushpa Eterna dining area",
      width: 1500,
      height: 2000,
    },
    {
      src: "/p1/p_img6.png",
      alt: "Rajapushpa Eterna kitchen",
      width: 1500,
      height: 2000,
    },
    {
      src: "/p1/p_img9.png",
      alt: "Rajapushpa Eterna bedroom",
      width: 1920,
      height: 1080,
    },
    {
      src: "/p1/p_img7.png",
      alt: "Rajapushpa Eterna detail",
      width: 1125,
      height: 1500,
    },
    {
      src: "/p1/p_img8.png",
      alt: "Rajapushpa Eterna shelving wall",
      width: 1920,
      height: 1080,
    },
  ],
};

function ProjectImage({ image, className = "", sizes = "100vw", priority = false }) {
  return (
    <figure className={`group overflow-hidden rounded-[18px] bg-[#eee8de] shadow-[0_18px_50px_rgba(36,31,24,0.10)] ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes={sizes}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
    </figure>
  );
}

function CopyBlock({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-3xl space-y-4 text-sm font-medium leading-7 text-[#1f1d18] ${className}`}>
      {children}
    </div>
  );
}

export default function ApartmentAtRajapushpaEterna() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);


  return (
    <div className="font-sans relative min-h-screen overflow-x-hidden bg-[#f7f4ee] text-black">
      <nav className="fixed left-0 right-0 top-0 z-20 flex w-full items-center justify-between bg-white px-6 py-4 font-medium sm:grid sm:grid-cols-3 sm:items-center">
        <div className="relative hidden sm:flex sm:justify-start">
          <div
            className="flex w-full cursor-pointer items-center justify-between text-sm font-medium text-black hover:underline"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            Projects
          </div>
          {dropdownOpen && (
            <div
              className="absolute left-0 top-full z-30 w-48 bg-white py-2 shadow-lg"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link href="/project/interiors" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                Interiors
              </Link>
              <Link href="/project/events-experiences" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                Events & Experiences
              </Link>
            </div>
          )}
        </div>

        <div className="flex w-full items-center justify-between sm:col-start-2 sm:w-auto sm:justify-center">
          <Link href="/" className="text-lg font-bold text-black" style={{ fontFamily: "Didot, serif" }}>
            NICARA
          </Link>
          <button className="p-2 sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
          </button>
        </div>

        <div className="hidden gap-5 sm:flex sm:justify-end">
          <a href="/about" className="text-sm font-medium text-black hover:underline">
            About
          </a>
          <a href="/contact" className="text-sm font-medium text-black hover:underline">
            Contact
          </a>
        </div>

        {menuOpen && (
          <div className="slide-up-menu fixed inset-0 z-50 flex flex-col items-center justify-center bg-[rgb(31,44,32)]">
            <button
              className="absolute right-6 top-6 text-white hover:text-gray-200"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="flex flex-col items-center space-y-4 text-lg font-medium text-white">
              <div
                className="flex w-full cursor-pointer items-center justify-center py-2 text-white hover:underline"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Projects
                <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} />
              </div>
              {mobileDropdownOpen && (
                <div className="flex w-full flex-col items-center space-y-2">
                  <a href="/project/interiors" className="py-2 text-white hover:underline" onClick={() => setMenuOpen(false)}>
                    Interiors
                  </a>
                  <a href="/project/events-experiences" className="py-2 text-white hover:underline" onClick={() => setMenuOpen(false)}>
                    Events & Experiences
                  </a>
                </div>
              )}
              <a href="/about" className="py-2 text-white hover:underline" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="/contact" className="py-2 text-white hover:underline" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pb-16 pl-5 pr-12 pt-24 sm:px-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="mb-6 text-sm font-semibold text-[#1f1d18]">Rajapushpa Eterna</h1>

          <ProjectImage
            image={images.cover}
            priority
            className="aspect-[4/3] rounded-[22px] sm:aspect-[16/7]"
            sizes="(max-width: 768px) 100vw, 92vw"
          />

          <CopyBlock className="py-10 md:py-12">
            <p>A modern kitchen with warm wood cabinets, dark marble countertops, and soft natural light coming through the window. Clean lines and thoughtful details like open shelving and matching appliances give the space a calm, put-together feel.
            </p>
          </CopyBlock>

          <section className="grid gap-4 md:grid-cols-3">
            {images.gallery.slice(0, 3).map((image, index) => (
              <ProjectImage
                key={image.src}
                image={image}
                priority={index === 0}
                className="aspect-[3/4]"
                sizes="(max-width: 768px) 100vw, 31vw"
              />
            ))}
          </section>

          <CopyBlock className="py-10 text-center md:py-12">
            <p>
              Our client wanted their home to look nice and feel comfortable at the same time so we kept things simple, warm, and modern throughout every room.
            </p>
          </CopyBlock>

          <section className="grid gap-4 lg:grid-cols-2">
            <ProjectImage image={images.gallery[3]} className="aspect-[3/4] lg:aspect-auto lg:h-[760px]" sizes="(max-width: 1024px) 100vw, 46vw" />
            <ProjectImage image={images.gallery[4]} className="aspect-[3/4] lg:aspect-auto lg:h-[760px]" sizes="(max-width: 1024px) 100vw, 46vw" />
          </section>

          <CopyBlock className="py-10 text-center md:py-12">
            <p>
              The brief was simple a home that feels bold yet inviting, so we layered textured grey walls with rich wood tones, soft ambient lighting, and statement art to create a dining and living space that has real personality without trying too hard.
            </p>
          </CopyBlock>

          <ProjectImage image={images.gallery[5]} className="aspect-[16/7]" sizes="92vw" />

          <section className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ProjectImage image={images.gallery[6]} className="h-full" sizes="(max-width: 768px) 100vw, 31vw" />
            <ProjectImage image={images.gallery[7]} className="aspect-[4/3] md:col-span-1 lg:col-span-2" sizes="(max-width: 768px) 100vw, 62vw" />
          </section>

        </div>
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}