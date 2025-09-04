"use client";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import banner from "@/assets/home/banner.png"
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    // <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    //   <div className="space-y-6">
    //     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
    //       Compassionate care for every patient
    //     </h1>
    //     <p className="text-base sm:text-lg text-black/70 max-w-prose">
    //       Welcome to HealthCare Association. We connect hospitals, clinics, and
    //       caregivers to deliver better outcomes, modern facilities, and 24/7 support.
    //     </p>
    //     <div className="flex flex-col sm:flex-row gap-3">
    //       <Link
    //         href="/contact"
    //         className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-foreground text-background font-medium hover:opacity-90"
    //       >
    //         Book an appointment
    //       </Link>
    //       <Link
    //         href="/about"
    //         className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-black/[.08] hover:bg-black/[.04] font-medium"
    //       >
    //         Learn more
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="aspect-video md:aspect-[4/3] w-full rounded-xl border border-black/[.08] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
    //     <div className="text-center p-6">
    //       <p className="text-sm uppercase tracking-widest text-black/60">Our Network</p>
    //       <p className="text-2xl font-semibold mt-2">120+ Hospitals | 2K+ Doctors</p>
    //     </div>
    //   </div>
    // </section>
    
    <section>
      <HeroSection
        title="Welcome to Our Platform"
        subtitle="Delivering excellence with every solution."
        buttonText="Get Started"
        backgroundImage={banner}
      />
    </section>
  );
}
