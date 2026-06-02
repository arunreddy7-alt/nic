"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <footer className="w-full bg-[#755306] text-[#FAF6EB]">
      {/* Top Section - Responsive Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-12 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12">
          
          {/* Navigation - Left on Desktop */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
                <li 
                  className="relative"
                  onMouseEnter={() => setProjectsOpen(true)}
                  onMouseLeave={() => setProjectsOpen(false)}
                >
                  <button className="flex items-center gap-1 text-[0.95rem] font-light tracking-wide opacity-90 hover:opacity-100 transition-opacity">
                    Projects
                    <ChevronDown className={`w-4 h-4 transition-transform ${projectsOpen ? "rotate-180" : ""}`} />
                  </button>

                  {projectsOpen && (
                    <div className="absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 mt-2 w-52 z-50">
                      <Link 
                        href="/project/interiors" 
                        className="block py-2 text-[0.9rem] font-light tracking-wide hover:underline"
                        onClick={() => setProjectsOpen(false)}
                      >
                        Interiors
                      </Link>
                      <Link 
                        href="/project/events-experiences" 
                        className="block py-2 text-[0.9rem] font-light tracking-wide hover:underline"
                        onClick={() => setProjectsOpen(false)}
                      >
                        Events & Experiences
                      </Link>
                    </div>
                  )}
                </li>

                <li>
                  <Link href="/about" className="text-[0.95rem] font-light tracking-wide opacity-90 hover:opacity-100 transition-opacity">
                    About
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="text-[0.95rem] font-light tracking-wide opacity-90 hover:opacity-100 transition-opacity">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Description - Centered on Desktop */}
          <div className="lg:col-span-4 flex justify-center">
            <p className="text-[0.95rem] leading-relaxed font-light opacity-85 max-w-xs text-center lg:text-center">
              Established in 2019, Nicara is a full-service design and lifestyle studio based in Hyderabad, India.
            </p>
          </div>

          {/* Contact Info - Vertically Stacked on Desktop, Centered on Mobile/Tablet */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-right gap-6">
            
            {/* Social & Phone - Vertically aligned on Desktop */}
            <div className="space-y-4 w-full flex flex-col items-center lg:items-end">
              <p className="flex items-center justify-center lg:justify-end gap-2.5 text-[0.95rem] font-light opacity-90">
                <Instagram className="w-4 h-4 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/nicaradesign" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:underline-offset-2 transition-all"
                >
                  @nicaradesign
                </a>
              </p>
              <p className="flex items-center justify-center lg:justify-end gap-2.5 text-[0.95rem] font-light opacity-90">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a 
                  href="tel:+918559901234" 
                  className="underline underline-offset-4 hover:underline-offset-2 transition-all"
                >
                  +91 855 990 1234
                </a>
              </p>
            </div>

            {/* Questions Section - Below on All Screens, Especially Tablets */}
            <div className="pt-6 border-t border-[#FAF6EB]/20 w-full lg:w-auto lg:text-right">
              <p className="flex items-center justify-center lg:justify-end gap-2.5 text-[0.9rem] font-light opacity-80 mb-1">
                <Mail className="w-4 h-4 flex-shrink-0" />
                Questions? Reach out:
              </p>
              <a 
                href="mailto:hello@dwelltales.com" 
                className="text-[0.95rem] font-light underline underline-offset-4 hover:underline-offset-2 transition-all"
              >
                hello@dwelltales.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FAF6EB]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[0.85rem] font-light opacity-70">
            <p>Nicara Design © 2026</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}