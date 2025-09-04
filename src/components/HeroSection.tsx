"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  backgroundImage: string | StaticImageData; // path from assets/images
}

export default function HeroSection({
  title,
  subtitle,
  buttonText,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[50vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-4xl mx-auto">
          {subtitle}
        </p>
        {buttonText && (
          <button className=" bg-gradient-to-r from-cyan-700 via-cyan-600 to-emerald-600 mt-6 px-6 py-3 rounded-2xl  text-white font-medium  transition">
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}
