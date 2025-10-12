import React from "react";
import Link from 'next/link';

export default function ContactSection() {
  return (
    <div className="relative min-h-screen bg-[#845547]">
      <nav className="absolute top-0 left-0 right-0 bg-[#845547] flex gap-5 items-center flex-col sm:flex-row w-full justify-center py-4 z-10">
        <a href="#" className="text-sm hover:underline mr-280 text-[#fffbea]">Projects</a>
        <Link href="/" className="text-lg text-black font-bold transform -translate-x-135" style={{ fontFamily: 'Didot, serif' }}>NICARA</Link>
        <a href="/about" className="text-sm hover:underline text-[#fffbea]">About</a>
        <a href="/contact" className="text-sm hover:underline text-[#fffbea]">Contact</a>
      </nav>
      <section className="min-h-screen bg-[#845547] text-[#fffbea] flex items-center justify-center py-16 px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 translate-x-19 translate-y-27">
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
        <div className="space-y-6 text-sm transform translate-x-19">
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
              <a href="mailto:howdy@averycoxdesign.com" className="underline">
                howdy@averycoxdesign.com
              </a>
            </p>

            <p>
              <span className="font-">Instagram:</span><br/>
              <a
                href="https://instagram.com/averycoxdesign"
                target="_blank"
                className="underline"
              >
                @averycoxdesign
              </a>
            </p>

            <p>
              <span className="font-">Phone:</span><br/> 512-368-3433
            </p>

            <p>
              <span className="font-semibold">Office:</span> <br />
              1401 Concordia Avenue <br />
              Austin, TX 78722
            </p>

            <p>
            Visitation is by appointment only&mdash;<br/>send us an email to set up a
            meeting.
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer className="mt-30 text-amber-50 py-15 px-15 sm:px-10 md:px-16 lg:px-24 xl:px-32" style={{ backgroundColor: '#755306' }}>
      <div className="mx-auto w-full max-w-[2200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-wrap gap-12 -ml-25">
            <a href="#" className="text-sm hover:underline">Projects</a>
            <a href="/about" className="text-xs hover:underline">About</a>
            <a href="#" className="text-xs hover:underline">Contact</a>
            <a href="#" className="text-xs hover:underline">Press</a>
            <a href="#" className="text-xs hover:underline">Work for AC. D</a>
          </div>
          <div className="text-sm ml-24 md:ml-44">
            Established in 2014, Avery Cox Design is a full-service design firm based in Austin, Texas.
          </div>
          <div className="text-sm ml-26 md:ml-52">
            <div>IG: <a href="#" className="underline hover:no-underline">@averycoxdesign</a></div>
            <div><a href="#" className="underline hover:no-underline">AC.D on The Expert</a> and</div>
              <div><a href="#" className="underline hover:no-underline">AD&apos;s Pro Directory</a></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-18">
          <div className="text-sm ml-72 md:ml-146">
            Questions? Reach out:<br />
            <a href="mailto:howdy@averycoxdesign.com" className="underline hover:no-underline">howdy@averycoxdesign.com</a>
          </div>
          <div className="text-sm ml-20 md:ml-40">
            Avery Cox Design © 2024
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
