import Image from "next/image";
import Link from 'next/link';

export default function About() {
  return (
    <div className="font-sans relative min-h-screen bg-white">
      <nav className="absolute top-0 left-0 right-0 bg-white flex gap-5 items-center flex-col sm:flex-row w-full justify-center py-4 z-10">
        <Link href="/"><a className="text-sm hover:underline mr-280 text-black">Projects</a></Link>
        <Link href="/"><a className="text-lg text-black font-bold transform -translate-x-135 " style={{ fontFamily: 'Didot, serif' }}>NICARA</a></Link>
        <a href="/about" className="text-sm hover:underline text-black">About</a>
        <a href="/contact" className="text-sm hover:underline text-black">Contact</a>
      </nav>
      <section className="min-h-screen bg-white pt-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="mx-auto w-full max-w-[2200px] grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 h-[160vh]">
          <div className="relative w-full h-full overflow-hidden transform -translate-x-32 translate-y-16">
            <Image src="/about1.png" alt="About image" fill className="object-cover" />
          </div>
          <div className="text-black leading-7 md:sticky md:top-28 -ml-10 md:-ml-23 transform translate-x-13 translate-y-19">
            <h2 className="text-sm md:text-xl font mb-4">Our Story</h2>
            <p className="text-xs md:text-sm mb-4">
            Every space has a story, and every story deserves to be lived beautifully.<br/> NICARA began in Hyderabad with a simple vision: to transform<br/> interiors into experiences, and experiences into memories. What started<br/> as a passion for luxury residential, commercial, and hospitality design<br/> soon evolved into a broader vision &mdash; a lifestyle brand that curates not just<br/> interiors, but furniture, d&eacute;cor, events, and extraordinary experiences.            </p>
            <p className="text-xs md:text-sm mb-4">
            Our team believes that design is more than aesthetics. It&apos;s about<br/> creating warmth, joy, and theatrical moments in everyday life. Each project<br/> is approached as a bespoke journey, where interiors, curated furniture,<br/> styling, and immersive events come together to reflect the unique<br/> personality and aspirations of our clients.            </p>
            <p className="text-xs md:text-sm">
            As NICARA grew, we expanded into handpicked properties for purchase<br/> and stay, helping clients discover spaces &mdash; from residences to holiday<br/> homes &mdash; that resonate with their lifestyle and taste. Today, NICARA is a<br/> celebration of living elegantly, effortlessly, and intentionally, turning spaces<br/> into stories, moments into memories, and dreams in            </p>
          </div>
        </div>
        <div className="relative h-[140vh] overflow-hidden transform -translate-x-38 translate-y-50 mt-8" style={{ width: '60%' }}>
          <Image src="/about2.png" alt="Additional about image" fill className="object-cover" />
        </div>
        <div className="text-black leading-7 md:sticky md:top-28 -ml-10 md:-ml-23 transform translate-x-200 -translate-y-225">
            <h2 className="text-sm md:text-xl font mb-4">To reality</h2>
            <p className="text-xs md:text-sm mb-4">
            Nishanth is the co-founder of NICARA, holding a Master&rsquo;s in Design<br/> from London and an MBA from Bangalore. He is inspired by the idea<br/> of turning spaces into experiences, creating interiors that are<br/> luxurious, warm, playful, and deeply personal.</p>
             <p className="text-xs md:text-sm mb-4">
             A traveler with a love for beautiful homes, boutique stays, and<br/> curated experiences, Nishanth finds inspiration in every journey and<br/> every unique space he encounters. With a background in real estate<br/> and lifestyle consulting, he combines design, property insight, and<br/> refined living to craft projects that are thoughtful, elegant, and<br/> effortlessly luxurious.</p>
            <p className="text-xs md:text-sm mb-4">
            Sriniketh is the co-founder of NICARA, with a background in Structural<br/> Engineering from BITS Pilani. He started his professional journey with<br/> a Corporator, building a foundation in operations, systems, and on-ground<br/> project execution.</p>
            <p className="text-xs md:text-sm mb-4">
            With strong expertise in operations and project management, Sriniketh<br/> ensures that every NICARA project is delivered with precision, efficiency,<br/> and attention to detail. He believes in the power of well-structured<br/> systems, blending creativity with discipline to bring ambitious designs<br/> to life seamlessly.</p>
            <p className="text-xs md:text-sm">
            At NICARA, Sriniketh&rsquo;s ability to balance design vision with flawless<br/> execution makes him an integral force behind the studio&rsquo;s commitment<br/> to luxury, reliability, and refined living.</p>
            </div>
            </section>
      <footer className="-mt-80 text-amber-50 py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32" style={{ backgroundColor: '#755306' }}>
        <div className="mx-auto w-full max-w-[2200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-wrap gap-12 -ml-25">
              <a href="#" className="text-sm hover:underline">Projects</a>
              <a href="/about" className="text-sm hover:underline">About</a>
              <a href="/contact" className="text-sm hover:underline">Contact</a>
              <a href="#" className="text-sm hover:underline">Press</a>
              <a href="#" className="text-sm hover:underline">Work for AC. D</a>
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
