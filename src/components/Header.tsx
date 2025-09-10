"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Menu, X, MapPin, ChevronDown, Plus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/healthcare-logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSurgeriesDropdownOpen, setIsSurgeriesDropdownOpen] = useState(false);
  const [isHeartDropdownOpen, setIsHeartDropdownOpen] = useState(false);
  const surgeriesRef = useRef<HTMLDivElement | null>(null);
  const heartRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const heartCloseTimerRef = useRef<number | null>(null);

  const heartSurgeryProcedures = [
    "Vascular Surgery",
    "Pacemaker Surgery", 
    "Open Heart Surgery",
    "Angiography",
    "Minimally Invasive Cardiovascular Surgery (MICS)",
    "Digital Subtraction Angiography (DSA)",
    "Angioplasty",
    "Heart Valve Surgery",
    "Bypass Surgery",
    "Aortic Valve Replacement",
    "Coronary Angiography",
    "Coronary Artery Bypass Surgery (CABG)",
    "Mitral Valve Replacement (MVR) Surgery",
    "Cardiothoracic Surgery",
    "Balloon Angioplasty",
  ];

  function openSurgeriesMenu() {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsSurgeriesDropdownOpen(true);
  }

  function scheduleCloseSurgeriesMenu() {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = window.setTimeout(() => {
      setIsSurgeriesDropdownOpen(false);
    }, 150);
  }

  function openHeartMenu() {
    if (heartCloseTimerRef.current) {
      window.clearTimeout(heartCloseTimerRef.current);
      heartCloseTimerRef.current = null;
    }
    setIsHeartDropdownOpen(true);
  }

  function scheduleCloseHeartMenu() {
    if (heartCloseTimerRef.current) {
      window.clearTimeout(heartCloseTimerRef.current);
    }
    heartCloseTimerRef.current = window.setTimeout(() => {
      setIsHeartDropdownOpen(false);
    }, 150);
  }

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      const isDesktop =
        typeof window !== "undefined" ? window.innerWidth >= 768 : true;
      if (!isDesktop) return; // Ignore outside-click closing on mobile
      if (isMenuOpen) return; // Ignore when mobile menu is open
      const target = event.target as Node | null;
      if (
        surgeriesRef.current &&
        target &&
        !surgeriesRef.current.contains(target)
      ) {
        setIsSurgeriesDropdownOpen(false);
      }
      if (
        heartRef.current &&
        target &&
        !heartRef.current.contains(target)
      ) {
        setIsHeartDropdownOpen(false);
      }
    }
    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", handleDocumentClick);
      return () =>
        document.removeEventListener("mousedown", handleDocumentClick);
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="HealthCare Association logo"
              width={200}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/treatment"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Treatment
            </Link>
            <div
              className="relative"
              ref={surgeriesRef}
              onMouseEnter={openSurgeriesMenu}
              onMouseLeave={scheduleCloseSurgeriesMenu}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/surgeries"
                  onClick={() => setIsSurgeriesDropdownOpen(true)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Surgeries
                </Link>
                <button
                  aria-label="Open surgeries menu"
                  onClick={openSurgeriesMenu}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <ChevronDown className="h-6 w-6 mt-1" />
                  {/* <ChevronDown
                    className={`h-6 w-6 mt-1 transform transition-transform duration-200 ${
                      isSurgeriesDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  /> */}
                </button>
              </div>

              {isSurgeriesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={openSurgeriesMenu}
                  onMouseLeave={scheduleCloseSurgeriesMenu}
                >
                  <Link
                    href="/surgeries/urology"
                    onClick={() => setIsSurgeriesDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Urology Surgery
                  </Link>
                  <Link
                    href="/surgeries/laparoscopic"
                    onClick={() => setIsSurgeriesDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Laparoscopic Surgery
                  </Link>
                  <Link
                    href="/surgeries/orthopedic"
                    onClick={() => setIsSurgeriesDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Orthopedic Surgery
                  </Link>
                  <div
                    className="relative"
                    ref={heartRef}
                    onMouseEnter={openHeartMenu}
                    onMouseLeave={scheduleCloseHeartMenu}
                  >
                    <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">
                      <Link
                        href="/surgeries/heart"
                        onClick={() => setIsSurgeriesDropdownOpen(false)}
                        className="flex-1"
                      >
                        Heart Surgery
                      </Link>
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </div>
                    
                    {isHeartDropdownOpen && (
                      <div
                        className="absolute right-full top-0 mt-0 w-80 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto"
                        onMouseEnter={openHeartMenu}
                        onMouseLeave={scheduleCloseHeartMenu}
                      >
                        {/* <div className="px-4 py-2 border-b border-gray-100">
                          <h4 className="font-semibold text-gray-900 text-sm">Heart Surgery Procedures</h4>
                        </div> */}
                        {heartSurgeryProcedures.map((procedure, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                          >
                            {procedure}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Blog
            </Link> */}
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </Link>
            <button className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-emerald-600 text-white px-4 py-2 rounded-md">
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t text-lg">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                About Us
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Services
              </Link>
              <Link
                href="/treatment"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Treatment
              </Link>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Link
                    href="/surgeries"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 font-medium"
                  >
                    Surgeries
                  </Link>
                  <button
                    aria-label="Open surgeries menu"
                    onClick={() => setIsSurgeriesDropdownOpen((prev) => !prev)}
                    className="text-gray-700"
                  >
                    <Plus
                      className={`h-6 w-6 transition-transform duration-200 text-2xl ${
                        isSurgeriesDropdownOpen ? "rotate-45" : "rotate-0"
                      }`}
                    />
                  </button>
                </div>
                {isSurgeriesDropdownOpen && (
                  <div className="ml-4 space-y-2 text-base">
                    <Link
                      href="/surgeries/urology"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsSurgeriesDropdownOpen(false);
                      }}
                      className="block text-gray-600 hover:text-blue-600 font-medium "
                    >
                      Urology Surgery
                    </Link>
                    <Link
                      href="/surgeries/laparoscopic"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsSurgeriesDropdownOpen(false);
                      }}
                      className="block text-gray-600 hover:text-blue-600 font-medium"
                    >
                      Laparoscopic Surgery
                    </Link>
                    <Link
                      href="/surgeries/orthopedic"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsSurgeriesDropdownOpen(false);
                      }}
                      className="block text-gray-600 hover:text-blue-600 font-medium"
                    >
                      Orthopedic Surgery
                    </Link>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href="/surgeries/heart"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsSurgeriesDropdownOpen(false);
                          }}
                          className="text-gray-600 font-medium"
                        >
                          Heart Surgery
                        </Link>
                        <button
                          aria-label="Open heart surgery menu"
                          onClick={() => setIsHeartDropdownOpen((prev) => !prev)}
                          className="text-gray-600"
                        >
                          <Plus
                            className={`h-5 w-5 transition-transform duration-200 ${
                              isHeartDropdownOpen ? "rotate-45" : "rotate-0"
                            }`}
                          />
                        </button>
                      </div>
                      {isHeartDropdownOpen && (
                        <div className="ml-4 space-y-1 text-sm">
                          {heartSurgeryProcedures.map((procedure, index) => (
                            <div
                              key={index}
                              className="text-gray-500 hover:text-blue-600 transition-colors"
                            >
                              {procedure}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {/* <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Blog
              </Link> */}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-emerald-600 text-white w-full px-4 py-2 rounded-md"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}