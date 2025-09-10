"use client";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import banner from "@/assets/services/banner.png";
import {
  Stethoscope,
  HeartPulse,
  Bone,
  Syringe,
  PhoneCall,
  ChevronRight,
  Shield,
  CheckCircle2,
} from "lucide-react";
import React from "react";
import {
  Heart,
  Activity,
  Brain,
  Phone,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Users,
  Award,
  Target,
} from "lucide-react";

export default function Surgeries() {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Heart Surgery",
      description:
        "Comprehensive cardiac care including angioplasty, valve replacement, and minimally invasive procedures.",
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-500" />,
      title: "Urology Surgery",
      description:
        "Advanced treatment for kidney, bladder, and urinary tract conditions with precision and care.",
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Laparoscopic Surgery",
      description:
        "Minimally invasive procedures ensuring faster recovery, less pain, and minimal scarring.",
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "Orthopedic Surgery",
      description:
        "Joint replacement, spine surgery, and advanced sports injury treatments for mobility restoration.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-6 h-6" />,
      text: "Expert and experienced team of surgeons",
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "State-of-the-art operation theaters and technology",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Minimally invasive and advanced treatment options",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Personalized pre-surgery and post-surgery care",
    },
  ];

  const handleCallClick = () => {
    window.location.href = "tel:+919228852751";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      {/* Hero Section */}
      <HeroSection
        title="World-class Surgical Care"
        subtitle="Advanced and trusted treatments in Urology, Cardiac Surgery, Laparoscopy, and Orthopedics, delivered by highly skilled and experienced doctors."
        buttonText="Book Appointment"
        backgroundImage={banner}
      />
      {/* <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white rounded-full shadow-lg">
              <Stethoscope className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            World-class <span className="text-blue-600">Surgical</span> Care
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            Advanced and trusted treatments in Urology, Cardiac Surgery, Laparoscopy, and Orthopedics, 
            delivered by highly skilled and experienced doctors.
          </p>
          
          
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-6 h-6 text-green-500" />
                <div className="text-left">
                  <p className="text-sm text-gray-600">Call us</p>
                  <a href="tel:+919228825251" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    +91 92288 5251
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-red-500" />
                <div className="text-left">
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-lg font-semibold text-gray-900">Ahmedabad</p>
                </div>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105">
                <Calendar className="w-5 h-5" />
                <span>Schedule Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section> */}

      {/* Features Banner */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* text-center */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center space-x-4">
              <Phone className="w-8 h-8 text-purple-500" />
              <p className="text-gray-700 font-medium">
                Schedule an appointment with top surgeons.{" "}
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <CheckCircle className="w-10 h-10 text-green-500" />
              <p className="text-gray-700 font-medium">
                Expert consultation for 15+ health conditions across India
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-10 h-10 text-blue-500" />
              <p className="text-gray-700 font-medium">
                Choose from in-person or online consultations with specialists
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Heart className="w-12 h-12 text-red-500" />
              <p className="text-gray-700 font-medium">
                Comprehensive guidance and support at every stage of your
                treatment
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={handleCallClick}
            className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-emerald-600 text-white px-6 py-3 rounded-md text-lg font-medium"
          >
            Call Us: +91 92288 52751
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Surgical Specialties
          </h2> */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 md:mb-8">
              Comprehensive surgical care at the best surgery hospital in
              Ahmedabad
            </h1>
            {/* <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive surgical care at the best surgery hospital in Ahmedabad
          </p> */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl mx-auto">
              At our hospital, we take pride in being recognized as one of the
              best surgery hospitals in{" "}
              <span className="font-semibold">Ahmedabad</span>, offering
              advanced and patient-centric surgical care. With a team of highly
              qualified surgeons, modern technology, and state-of-the-art
              infrastructure, we ensure safe, effective, and minimally invasive
              treatments tailored to your health needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-md text-md font-medium mt-4 text-center mx-auto block">
                  Know More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-red-100 rounded-lg mr-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Heart Surgery
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                As one of the leading centers for cardiac surgery in Ahmedabad,
                we offer comprehensive heart care including angioplasty, valve
                replacement, and minimally invasive cardiac surgery. Our cardiac
                surgeons combine years of expertise with cutting-edge technology
                to ensure the highest success rates and safer outcomes for
                patients with complex heart conditions.
              </p>
              <div className="flex items-center space-x-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-gray-600">
                  Leading cardiac surgery center in Ahmedabad
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl h-64 flex items-center justify-center">
              <Heart className="w-24 h-24 text-red-300" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl h-64 flex items-center justify-center order-2 lg:order-1">
              <Activity className="w-24 h-24 text-blue-300" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
                  <Activity className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Urology Surgery
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our urology department specializes in the diagnosis and surgical
                management of kidney, bladder, and urinary tract conditions.
                From kidney stone removal to prostate and reconstructive urology
                procedures, our expert surgeons provide world-class care with
                precision and compassion.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">
                  Advanced kidney, bladder & urinary tract treatments
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-lg mr-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Laparoscopic Surgery
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are pioneers in laparoscopic (minimally invasive) surgery,
                ensuring faster recovery, less pain, and minimal scarring. Our
                skilled laparoscopic surgeons perform a wide range of procedures
                including gallbladder removal, hernia repair, and
                gastrointestinal surgeries using the latest equipment and
                techniques.
              </p>
              <div className="flex items-center space-x-4">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">
                  Minimally invasive with faster recovery
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl h-64 flex items-center justify-center">
              <Target className="w-24 h-24 text-green-300" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl h-64 flex items-center justify-center order-2 lg:order-1">
              <Brain className="w-24 h-24 text-purple-300" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 rounded-lg mr-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Orthopedic Surgery
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our orthopedic unit is dedicated to restoring mobility and
                improving quality of life. We specialize in joint replacement
                surgeries, spine surgeries, fracture management, and advanced
                sports injury treatments. With a focus on innovative surgical
                techniques and rehabilitation, we help patients regain strength
                and movement with confidence.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="w-5 h-5 text-purple-500" />
                <span className="text-sm text-gray-600">
                  Joint replacement & mobility restoration specialists
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 md:mb-8">
              Why Choose Us?
            </h1>
            {/* <p className="text-xl text-gray-700">
            Your health and safety come first with our commitment to surgical excellence
          </p> */}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-blue-100 rounded-full">{item.icon}</div>
                <p className="text-lg text-gray-800 font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* <p className="text-lg text-gray-700 mb-8">
            Whether it's urology, orthopedics, laparoscopy, or cardiac surgery, we are committed to delivering the highest standards of surgical excellence.
          </p> */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl mx-auto">
              At our hospital, your health and safety come first. Whether it’s
              urology, orthopedics, laparoscopy, or cardiac surgery, we are
              committed to delivering the highest standards of surgical
              excellence.
            </p>
            {/* <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Book Your Consultation Today
          </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
