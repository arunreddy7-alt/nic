"use client";

import React from "react";
import Link from 'next/link';

export default function BuyStay() {
  return (
    <div className="font-sans min-h-screen bg-[#845547] text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Didot, serif' }}>Buy & Stay</h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        Discover buy & stay options that combine comfort, style, and lasting value.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {/* Placeholder for buy & stay projects */}
        <div className="bg-[#fffbea] text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Property 1</h3>
          <p className="text-sm">Description of buy & stay property 1.</p>
        </div>
        <div className="bg-[#fffbea] text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Property 2</h3>
          <p className="text-sm">Description of buy & stay property 2.</p>
        </div>
        <div className="bg-[#fffbea] text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Property 3</h3>
          <p className="text-sm">Description of buy & stay property 3.</p>
        </div>
      </div>
      <Link href="/project" className="mt-8 text-white underline hover:no-underline">
        Back to Projects
      </Link>
    </div>
  );
}
