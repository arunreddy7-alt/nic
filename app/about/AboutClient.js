"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import FloatingContactBar from "../components/FloatingContactBar";
import Footer from "../components/Footer";

const storyParagraphs = [
  "Every space has a story, and every story deserves to be lived beautifully.",
  "NICARA began in Hyderabad with a simple belief - that design is not just about aesthetics, but about creating experiences that linger as memories. What started as a passion for luxury residential, commercial, and hospitality interior architecture soon evolved into a broader lifestyle philosophy.",
  "At NICARA, each project is approached as a deeply personal journey. Interiors, curated furniture, styling, and immersive experiences come together to reflect the individuality, aspirations, and rhythm of our clients' lives.",
  "As our work deepened, clients began seeking our perspective even before a space was chosen. Naturally, our role expanded into helping them discover spaces aligned with their sensibility and long-term vision - from apartments and villas to plots and holiday homes. Designing and shaping these environments then became a seamless continuation of that trust.",
  "Today, NICARA stands for living elegantly, effortlessly, and intentionally - turning spaces into stories, moments into memories, and dreams into reality.",
];

const founders = [
  {
    image: "/about3.png",
    alt: "Nishanth",
    paragraphs: [
      "Nishanth is the co-founder of NICARA. With a Master's from London and an MBA from Bangalore, he is driven by the belief that spaces should be experienced, not just designed. His work blends luxury with warmth, playfulness, and a deeply personal sensibility.",
      "A passionate traveler with a love for beautiful homes, boutique stays, and curated experiences, Nishanth draws inspiration from every journey. With a background in real estate and lifestyle consulting, he brings together design vision, property insight, and refined living to shape environments that feel thoughtful, elegant, and effortless.",
    ],
  },
  {
    image: "/about4.png",
    alt: "Sriniketh",
    paragraphs: [
      "Sriniketh is the co-founder of NICARA, with a background in Structural Engineering from BITS Pilani. He brings clarity, structure, and precision to every project, ensuring that design intent is translated seamlessly into reality.",
      "With strong expertise in operations and project management, Sriniketh oversees systems, execution, and on-ground delivery. His ability to balance creative ambition with disciplined execution forms the backbone of NICARA's commitment to quality, reliability, and refined living.",
    ],
  },
];

function TextBlock({ title, children }) {
  return (
    <div className="max-w-xl text-[#171510]">
      <div className="mb-6 h-px w-12 bg-[#755306]/35" />
      {title && (
        <h2 className="mb-6 text-2xl font-medium leading-tight text-[#171510] sm:text-3xl" style={{ fontFamily: "serif" }}>
          {title}
        </h2>
      )}
      {children && <div className="space-y-5 text-[13px] font-medium leading-6 text-[#252119] sm:text-sm sm:leading-7">{children}</div>}
    </div>
  );
}

export default function About() {
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

      <main className="pt-20">
        <section className="mx-auto grid max-w-[1500px] gap-10 px-5 py-8 sm:px-8 md:px-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.72fr)] lg:items-stretch lg:px-12 lg:py-16">
          <div className="relative min-h-[430px] overflow-hidden rounded-[18px] bg-[#eee8de] shadow-[0_18px_50px_rgba(36,31,24,0.10)] sm:min-h-[620px] lg:min-h-0 lg:self-stretch">
            <Image src="/about1.png" alt="About image" fill priority sizes="(max-width: 1024px) 100vw, 56vw" className="object-cover" />
          </div>

          <div className="flex min-h-full items-center rounded-[18px] bg-[#fffdf8] px-6 py-10 shadow-[0_18px_50px_rgba(36,31,24,0.06)] sm:px-9 lg:px-12">
            <TextBlock title="Our Story">
              {storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </TextBlock>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:px-10 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1500px]">
            <TextBlock title="Founders" />

            <div className="mt-10 space-y-0 overflow-hidden border-y border-[#ded4c5]">
              {founders.map((founder, index) => (
                <article
                  key={founder.alt}
                  className={`grid gap-8 py-10 md:items-center md:gap-12 lg:gap-20 ${
                    index % 2 === 1 ? "md:grid-cols-[0.7fr_0.3fr]" : "md:grid-cols-[0.3fr_0.7fr]"
                  } ${
                    index > 0 ? "border-t border-[#ded4c5]" : ""
                  }`}
                >
                  <div className={`relative aspect-[5/4] overflow-hidden bg-[#f3f0ea] md:aspect-[1/1] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image
                      src={founder.image}
                      alt={founder.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 34vw"
                      className="object-contain object-center p-10 grayscale sm:p-14"
                    />
                  </div>
                  <div className="max-w-2xl space-y-5 text-[13px] font-medium leading-6 text-[#252119] sm:text-sm sm:leading-7 md:py-8">
                    {founder.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
