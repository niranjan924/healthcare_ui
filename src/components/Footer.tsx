import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/healthcare-logo.png";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full mt-16 bg-white text-black border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand / Description */}
          <div className="space-y-3">
              <Link href="/" className="flex items-center">
                <Image
                    src={logo}
                    alt="HealthCare Association logo"
                    width={100}
                    height={30}
                    priority
                />
              </Link>
            <p className="text-sm leading-6">
              Providing exceptional healthcare services with compassion, innovation, and excellence.
              Your health and well-being are our top priorities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-base font-semibold mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline underline-offset-4">Home</a></li>
              <li><a href="/about" className="hover:underline underline-offset-4">About Us</a></li>
              <li><a href="/contact" className="hover:underline underline-offset-4">Contact Us</a></li>
              <li><a href="/blog" className="hover:underline underline-offset-4">Blog</a></li>
              <li><a href="#" className="hover:underline underline-offset-4">Patient Portal</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-base font-semibold mb-3">Our Services</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline underline-offset-4">Emergency Care</a></li>
              <li><a href="#" className="hover:underline underline-offset-4">Cardiology</a></li>
              <li><a href="#" className="hover:underline underline-offset-4">Orthopedics</a></li>
              <li><a href="#" className="hover:underline underline-offset-4">Pediatrics</a></li>
              <li><a href="#" className="hover:underline underline-offset-4">Surgery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2 text-sm">
            <p className="text-base font-semibold">Contact Information</p>
            <p>123 Medical Center Drive</p>
            <p>Healthcare City, HC 12345</p>
            <p>(555) 123-4567</p>
            <p>info@medcarehospital.com</p>
            <p className="mt-2">Emergency: 24/7</p>
            <p>General: Mon-Fri 8AM-6PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {year} MedCare Hospital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:underline underline-offset-4">Terms of Service</a>
            <a href="#" className="hover:underline underline-offset-4">HIPAA Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


