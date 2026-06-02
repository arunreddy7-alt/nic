"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import FloatingContactBar from "../../../components/FloatingContactBar";
import Footer from "../../../components/Footer";

const images = {
  cover: {
    src: "/p6/p_img1.png",
    alt: "Aparna",
    width: 1920,
    height: 1080,
  },
  gallery: [
    {
      src: "/p6/p_img2.png",
      alt: "Aparna living room",
      width: 1920,
      height: 1080,
    },
    {
      src: "/p6/p_img4.png",
      alt: "Aparna accent detail",
      width: 920,
      height: 580,
    },
    {
      src: "/p6/p_img7.png",
      alt: "Aparna lounge",
      width: 920,
      height: 580,
    },
    {
      src: "/p6/p_img5.png",
      alt: "Aparna dining area",
      width: 920,
      height: 580,
    },
    {
      src: "/p6/p_img3.png",
      alt: "Aparna dining wall",
      width: 920,
      height: 580,
    },
    {
      src: "/p6/p_img6.png",
      alt: "Aparna kitchen",
      width: 1920,
      height: 1080,
    },
    {
      src: "/p6/p_img8.png",
      alt: "Aparna bedroom",
      width: 920,
      height: 580,
    },
    {
      src: "/p6/p_img9.png",
      alt: "Aparna wardrobe",
      width: 920,
      height: 580,
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

export default function ApartmentAtAparna() {
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
          <h1 className="mb-6 text-sm font-semibold text-[#1f1d18]">Aparna</h1>

          <ProjectImage
            image={images.cover}
            priority
            className="aspect-[4/3] rounded-[22px] sm:aspect-[16/7]"
            sizes="(max-width: 768px) 100vw, 92vw"
          />

          {/* Intro — living room sets the scene */}
          <CopyBlock className="py-10 md:py-12">
            <p>
              We framed the entryway with a classic arched mirror set against a marble panel, flanked by wall sconces that add a soft glow, while the opposite wall features a full height lit display unit with textured stone cladding and wooden shelves that give the space depth, character, and a really refined finish.
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

          {/* Dining space — a natural pause between living and kitchen */}
          <CopyBlock className="py-10 text-center md:py-12">
            <p>
              They wanted each room to feel different yet connected so we gave them an elegant entryway, a peaceful living room with a gorgeous lit wall, and a super cute kids bedroom with a bunny and stars that made their little one jump with joy.
            </p>
          </CopyBlock>

          <section className="grid gap-4 lg:grid-cols-2">
            <ProjectImage image={images.gallery[3]} className="aspect-[3/4] lg:aspect-auto lg:h-[760px]" sizes="(max-width: 1024px) 100vw, 46vw" />
            <ProjectImage image={images.gallery[4]} className="aspect-[3/4] lg:aspect-auto lg:h-[760px]" sizes="(max-width: 1024px) 100vw, 46vw" />
          </section>

          {/* Kitchen & bedroom — the home gets deeply personal */}
          <CopyBlock className="py-10 text-center md:py-12">
            <p>
              We listen carefully to what each client pictures for their home and then make sure every detail reflects that from picking the right light fixture that becomes a talking point, to designing a shelf wall that is both useful and beautiful, nothing is done without a reason behind it.
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