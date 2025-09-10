"use client";
import type { Metadata } from "next";
import {
  Heart,
  Shield,
  Users,
  Stethoscope,
  Activity,
  Brain,
  Bone,
  Settings as Lungs,
  AlertCircle,
  CheckCircle2,
  Star,
  Award,
  PersonStanding,
  Pill,
  CirclePlus,
} from "lucide-react";
import banner from "@/assets/about/banner.png";
import about2 from "@/assets/about/about-2.png";
import about3 from "@/assets/about/about-3.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
// export const metadata: Metadata = {
//   title: "About | HealthCare Association",
//   description:
//     "About Health Care Association Infectious Diseases Clinic, Ahmedabad.",
// };

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const expertise = [
    {
      icon: <Bone className="w-8 h-8 text-amber-600" />,
      title: "Bone & Joint",
      description: "Specialized infection management",
    },
    {
      icon: <Activity className="w-8 h-8 text-emerald-600" />,
      title: "Cardiac Infections",
      description: "Heart-related infection care",
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "CNS Infections",
      description: "Brain and spine infection treatment",
    },
    {
      icon: <Pill className="w-8 h-8 text-cyan-600" />,
      title: "Gastrointestinal infections",
      description:
        "Digestive system infections, food poisoning, and gastroenteritis management",
    },
    {
      icon: <PersonStanding className="w-8 h-8 text-red-500" />,
      title: "Genito-urinary infections ",
      description: "UTIs, kidney infections, and reproductive system disorders",
    },
    {
      icon: <CirclePlus className="w-8 h-8 text-blue-600" />,
      title: "Pulmonary infections",
      description:
        "Respiratory tract infections, pneumonia, and breathing disorders",
    },
  ];

  const values = [
    {
      icon: <Award className="w-12 h-12 text-cyan-600" />,
      title: "Clinical Excellence",
      description:
        "Delivering the highest standards of medical care with evidence-based treatments",
    },
    {
      icon: <Shield className="w-12 h-12 text-emerald-600" />,
      title: "Ethical Conduct",
      description:
        "Maintaining integrity and transparency in all our medical practices",
    },
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Patient-Centricity",
      description:
        "Putting patient needs and wellbeing at the center of everything we do",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      {/* Hero Section */}
      <HeroSection
        title="About Us"
        subtitle="At Health Care Association Infectious Diseases Clinic, Ahmedabad, we are a team of dedicated physicians, nurses, and support personnel who specialize in the diagnosis, treatment, and management of various infectious diseases. We are committed to providing our patients with the most superior care available. "
        buttonText="Get Started"
        backgroundImage={banner}
      />
      {/* <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 z-10"></div>
        <div
          className="h-screen bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}
        >
          <div className="relative z-20 h-full flex items-center justify-center">
            <div
              className={`text-center text-white px-8 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors px-4 py-2 rounded-md">
                Established 2016
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-100">
                Crafting Digital Excellence
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                We're a passionate team of innovators, designers, and developers
                dedicated to transforming ideas into extraordinary digital
                experiences.
              </p>
              <button className="bg-white text-blue-900 hover:bg-blue-50 transition-colors shadow-lg px-4 py-2 rounded-md">
                Discover Our Story
              </button>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="relative overflow-hidden bg-gradient-to-r from-cyan-700 via-cyan-600 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Health Care Association
                <span className="block text-cyan-100 text-3xl lg:text-4xl mt-2">
                  Infectious Diseases Clinic
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-cyan-50 leading-relaxed">
                Ahmedabad's premier destination for specialized infectious
                disease care, where expertise meets compassion in every
                treatment.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-300" />
                  <span className="text-lg font-medium">Expert Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-300" />
                  <span className="text-lg font-medium">
                    Advanced Treatment
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-300" />
                  <span className="text-lg font-medium">Trusted Results</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={about2}
                  alt="Medical professionals providing care"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Introduction */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* <div className="text-center mb-16"> */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 md:mb-16">
            Dedicated to Your Health
          </h1>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-emerald-600 mx-auto mb-8"></div> */}
          {/* </div> */}

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                At Health Care Association Infectious Diseases Clinic,
                Ahmedabad, we are a team of dedicated physicians, nurses, and
                support personnel who specialize in the diagnosis, treatment,
                and management of various infectious diseases.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We are committed to providing our patients with the most
                superior care available. Our collaborative approach ensures that
                every patient receives a comprehensive and coordinated care plan
                tailored to their specific needs.
              </p>
              <div className="flex items-center space-x-4 pt-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <span className="text-gray-600 font-medium">
                  Trusted by thousands of patients
                </span>
              </div>
            </div>
            <div className="relative">
              <Image
                src={about2}
                alt="Medical team consultation"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Expert Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 md:mb-8">
              Our Expertise
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl mx-auto">
              Our clinic is equipped to handle a wide range of infections,
              including complicated tropical infections like Chikungunya,
              Typhoid, Malaria, and Dengue. We also have extensive experience in
              the management of HIV & AIDS and Tuberculosis. Additionally, our
              team is skilled in treating infections affecting specific parts of
              the body, such as:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-cyan-100 group-hover:to-emerald-100 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mb-16 mt-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 md:mb-8">
              Add some heading here
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl mx-auto">
              Our collaborative approach ensures that every patient receives a
              comprehensive and coordinated care plan tailored to their specific
              needs.
            </p>
          </div>

          {/* <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Comprehensive Infection Management
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our team specializes in treating infections affecting specific
                  parts of the body, including bone and joint infections,
                  cardiac infections, central nervous system infections,
                  gastrointestinal infections, genito-urinary infections, and
                  pulmonary infections.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    <span className="text-gray-700">CNS Infections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">GI Infections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    <span className="text-gray-700">Cardiac Infections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">Pulmonary Care</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={about3}
                  alt="Medical equipment and consultation"
                  className="rounded-2xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 md:mb-8">
              The Absolute Trusted Experts
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl mx-auto">
              At Health Care Association in Ahmedabad, we are unwaveringly and
              profoundly committed to providing consistently superior and
              exceptional healthcare services to address the critical, daily,
              and comprehensive health needs of our patients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-cyan-50 hover:from-white hover:to-cyan-100 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* <div className="bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Our ultimate mission is to deliver honest, compassionate, and
              economical care to the people of Ahmedabad and its surrounding
              locations, thereby solidifying, cementing, and confirming our role
              as your genuinely caring, fundamentally honest, and absolutely
              trustworthy healthcare partner.
            </p>
          </div> */}
        </div>
      </section>

      {/* Services Section removed form here */}

      {/* Contact CTA */}
      {/* <section className="py-16 bg-gradient-to-r from-gray-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Receive Expert Care?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Contact us today to schedule a consultation with our infectious
            disease specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300">
              Book Appointment
            </button>
            <button className="bg-transparent border-2 border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
