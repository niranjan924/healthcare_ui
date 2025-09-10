"use client";
import { useState } from "react";
import {
  Heart,
  Users,
  Zap,
  User,
  DollarSign,
  ChevronRight,
  Stethoscope,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import banner from "@/assets/heartsurgery/banner.png";
import Image from "next/image";

export default function HeartSurgery() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const whyChooseCards = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Best Heart Doctors",
      description:
        "Our heart treatment hospital has the best team of top cardiologists, cardiac surgeons, anesthesiologists, cardiac interventionists, and specialized nurses who work together to give you customized care.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Advanced Technology",
      description:
        "We bring you the best cath lab in Ahmedabad with state-of-the-art equipment for accurate diagnosis and effective treatment.",
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Patient-Centered Approach",
      description:
        "Your comfort and well-being matter. We offer personalized care plans and support throughout your journey.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Comprehensive Care",
      description:
        "From preventive cardiology and diagnosis to treatment and rehabilitation, we provide a complete spectrum of services for a healthier heart.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable Treatment",
      description:
        "We are committed to providing accessible, high-quality medical care at affordable cost.",
    },
  ];

  const surgicalProcedures = [
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

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    // <div className="min-h-screen bg-gray-50">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    //     <div className="text-center mb-12">
    //       <h1 className="text-4xl font-bold text-gray-900 mb-4">
    //         Heart Surgery
    //       </h1>
    //       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    //         Advanced cardiac surgical procedures performed by experienced heart surgeons using cutting-edge technology.
    //       </p>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       <div className="bg-white rounded-lg shadow-md p-6">
    //         <h3 className="text-xl font-semibold text-gray-900 mb-3">
    //           Coronary Bypass
    //         </h3>
    //         <p className="text-gray-600 mb-4">
    //           Advanced coronary artery bypass grafting (CABG) procedures for blocked arteries.
    //         </p>
    //         <ul className="text-sm text-gray-500 space-y-1">
    //           <li>• Traditional CABG</li>
    //           <li>• Minimally invasive CABG</li>
    //           <li>• Robotic-assisted surgery</li>
    //         </ul>
    //       </div>

    //       <div className="bg-white rounded-lg shadow-md p-6">
    //         <h3 className="text-xl font-semibold text-gray-900 mb-3">
    //           Valve Surgery
    //         </h3>
    //         <p className="text-gray-600 mb-4">
    //           Heart valve repair and replacement procedures for various valve conditions.
    //         </p>
    //         <ul className="text-sm text-gray-500 space-y-1">
    //           <li>• Aortic valve replacement</li>
    //           <li>• Mitral valve repair</li>
    //           <li>• Transcatheter procedures</li>
    //         </ul>
    //       </div>

    //       <div className="bg-white rounded-lg shadow-md p-6">
    //         <h3 className="text-xl font-semibold text-gray-900 mb-3">
    //           Heart Transplant
    //         </h3>
    //         <p className="text-gray-600 mb-4">
    //           Comprehensive heart transplant program with advanced pre and post-operative care.
    //         </p>
    //         <ul className="text-sm text-gray-500 space-y-1">
    //           <li>• Donor evaluation</li>
    //           <li>• Transplant surgery</li>
    //           <li>• Post-transplant care</li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="mt-12 text-center">
    //       <button className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-emerald-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 transition-opacity">
    //         Schedule Consultation
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
      {/* Hero Section */}

      <div className="relative w-[90vw] h-64 md:h-80 lg:h-96 mx-auto">
        <Image
          src={banner}
          alt="Heart Surgery Banner"
          fill
          className="object-cover rounded-4xl mt-12"
          priority
        />
      </div>
      <section className="relative px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* <div className="inline-flex items-center gap-2 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4" />
              Leading Cardiac Care in Ahmedabad
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Best Cardiothoracic and Vascular Surgeons in Ahmedabad
            </h1>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At Health Care Association in Ahmedabad, we offer advanced
                surgical care for the heart and blood vessels. Our team of
                expert surgeons specializes in complex procedures, focusing on
                precision and safety to ensure a faster recovery for our
                patients.
              </p>
              <p>
                Your heart health is our top concern. As a leading cardiology
                consulting hospital in Ahmedabad, we offer a comprehensive
                approach, bringing together expert specialists to provide the
                best treatment for your specific condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-4 py-16 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Health Care Association Cardiac Specialists?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover what makes our cardiac care exceptional through our
              commitment to excellence in every aspect of treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {whyChooseCards.map((card, index) => (
              <div
                key={index}
                className="h-60"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative w-full h-full transition-all duration-700 cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    transform:
                      flippedCard === index
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  {/* Front of card */}
                  <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="p-8 h-full flex flex-col items-center justify-center text-center">
                      <div className="text-blue-600 mb-6 p-4 bg-blue-100 rounded-full">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                        {card.title}
                      </h3>
                      <div className="text-blue-600 mt-auto">
                        <ChevronRight className="w-6 h-6 mx-auto" />
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-blue-50 font-medium  rounded-2xl shadow-lg text-white border border-blue-100"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="p-6 h-full flex flex-col justify-center">
                      <p className="text-gray-900 text-sm leading-relaxed text-center">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgical Procedures Section */}
      <section className="px-4 py-16 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized Surgical Procedures
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer a comprehensive range of advanced cardiac and vascular
              surgical procedures, utilizing cutting-edge technology and
              techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surgicalProcedures.map((procedure, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 group cursor-pointer transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-emerald-200 transition-all duration-300">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {procedure}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vascular Surgery Information */}
      <p className="text-gray-600 text-lg max-w-3xl mx-auto pb-16">
        Vascular surgery is a young, dynamic and rapidly expanding specialty
        that deals with the comprehensive diagnostic and therapeutic services
        for patients with diseases and disorders of the arteries, veins and
        lymphatics.
      </p>
      {/* <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Vascular Surgery Excellence
            </h2>
            <p className="text-lg leading-relaxed text-emerald-100">
              Vascular surgery is a young, dynamic and rapidly expanding
              specialty that deals with the comprehensive diagnostic and
              therapeutic services for patients with diseases and disorders of
              the arteries, veins and lymphatics.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
