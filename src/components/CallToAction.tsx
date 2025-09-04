"use client";
import React from "react";
import { Phone } from "lucide-react";

export default function CallToAction() {
  const handleCallClick = () => {
    window.location.href = "tel:+919228852751";
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, #2a3f7e 0%, #45b649 100%)`,
        }}
      />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
          }}
        />
      </div>

      <div className="relative w-full max-w-4xl mx-auto text-center px-6 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get Your{" "}
          <span
            className="font-extrabold"
            style={{
              color: "#45b649",
              textShadow: "0 0 0px rgba(69, 182, 73, 0.5)",
            }}
          >
            FREE
          </span>{" "}
          Consultation
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Don't wait another day to start your journey. Speak directly with our
          specialists and discover what's possible.
        </p>

        <button
          onClick={handleCallClick}
          className="inline-flex items-center justify-center px-8 py-4 text-xl font-semibold text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Phone className="w-6 h-6 mr-3" />
          Get a FREE Consultation Now!
        </button>
      </div>
    </div>
  );
}
