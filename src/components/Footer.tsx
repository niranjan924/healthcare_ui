import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/healthcare-logo.png";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    //  bg-[#2a3f7e]
    <footer className="w-full bg-gradient-to-r from-gray-900 to-cyan-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand / Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="HealthCare Association logo"
                width={120}
                height={36}
                priority
                className="brightness-0 invert" // Makes logo white on dark background
              />
            </Link>
            <p className="text-sm leading-6 text-blue-100">
              Providing exceptional healthcare services with compassion,
              innovation, and excellence. Your health and well-being are our top
              priorities.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Health Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/patient-portal"
                  className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/emergency"
                  className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cardiology"
                  className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Cardiology
                </Link>
              </li>
              <li>
                <Link
                  href="/services/orthopedics"
                  className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pediatrics"
                  className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/surgery"
                  className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Surgery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/radiology"
                  className="text-blue-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Radiology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">
              Contact Information
            </h3>

            <div className="space-y-3 text-sm text-blue-100">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={16}
                  className="text-blue-300 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p>123 Medical Center Drive</p>
                  <p>Healthcare City, HC 12345</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-300 flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="hover:text-white transition-colors duration-200"
                >
                  (555) 123-4567
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-300 flex-shrink-0" />
                <a
                  href="mailto:info@medcarehospital.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@medcarehospital.com
                </a>
              </div>

              <div className="pt-2 border-t border-blue-600">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock size={16} className="text-blue-300 flex-shrink-0" />
                  <span className="font-medium text-white">Hours</span>
                </div>
                <div className="ml-7 space-y-1">
                  <p className="text-red-300 font-medium">Emergency: 24/7</p>
                  <p>General: Mon-Fri 8AM-6PM</p>
                  <p>Weekends: 9AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 pt-8 border-t border-blue-600">
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-2">Accreditations</h4>
              <p className="text-blue-100">Joint Commission Accredited • AHRQ Certified</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Quality Care</h4>
              <p className="text-blue-100">5-Star CMS Rating • Magnet Recognition</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Languages</h4>
              <p className="text-blue-100">English • Spanish • Interpreter Services Available</p>
            </div>
          </div> */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-blue-100">
              © {year} MedCare Hospital. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-blue-200 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-blue-200 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/hipaa"
                className="text-blue-200 hover:text-white transition-colors duration-200"
              >
                HIPAA Notice
              </Link>
              <Link
                href="/accessibility"
                className="text-blue-200 hover:text-white transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="border-t border-blue-600 bg-[#1e2f5a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-blue-100">
              © {year} MedCare Hospital. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-blue-200 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/hipaa" className="text-blue-200 hover:text-white transition-colors duration-200">
                HIPAA Notice
              </Link>
              <Link href="/accessibility" className="text-blue-200 hover:text-white transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
}
