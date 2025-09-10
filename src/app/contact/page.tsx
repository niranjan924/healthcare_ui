"use client";
import HeroSection from "@/components/HeroSection";
import banner from "@/assets/services/banner.png";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <section>
      <HeroSection
        title="Get in Touch"
        subtitle="Appointments, queries, or feedback — we're here to help."
        buttonText="Call Us Now"
        backgroundImage={banner}
      />

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl mx-auto pb-5">
              Send us a message and our team will get back to you shortly.
            </p>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="mt-1 w-full h-11 rounded-md border border-gray-300 bg-transparent px-3"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@email.com"
                  className="mt-1 w-full h-11 rounded-md border border-gray-300 bg-transparent px-3"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Appointment request"
                  className="mt-1 w-full h-11 rounded-md border border-gray-300 bg-transparent px-3"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-gradient-to-r from-cyan-700 via-cyan-600 to-emerald-600 text-white font-semibold hover:opacity-95 w-full sm:w-auto"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          <aside className="space-y-4 rounded-2xl border border-gray-200 p-6 h-fit bg-gradient-to-br from-gray-50 to-cyan-50">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-cyan-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-sm text-gray-700">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-sm text-gray-700">info@healthcare.org</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Hours</p>
                <p className="text-sm text-gray-700">
                  Mon–Fri, 9:00 AM – 5:00 PM
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Address</p>
                <p className="text-sm text-gray-700">
                  123 Wellness Ave, Suite 100
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
