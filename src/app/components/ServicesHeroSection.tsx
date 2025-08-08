import React from "react";

export default function ServicesHeroSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center bg-black/60 bg-blend-multiply" style={{backgroundImage: "url('/images/heroImage.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <span className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold mb-6">Services</span>
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-4 max-w-3xl">Transforming Governance with Digital Excellence in Imo State</h1>
      </div>
    </section>
  );
} 