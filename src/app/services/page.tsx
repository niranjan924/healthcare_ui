import HeroSection from "@/components/HeroSection";
import { Users, Target, Clock } from "lucide-react";
import banner from "@/assets/services/banner.png";

export default function Services() {
  const services = [
    "Adult Vaccination",
    "Bone and Joint Infections",
    "Cardiac Infections",
    "Central Nervous System Infections",
    "Community Acquired Infections",
    "Fungal Infection",
    "Gastrointestinal Infections",
    "Genitourinary Infections",
    "HIV & AIDS",
    "Hospital-acquired infections",
    "Infections in Cancer Patients",
    "Infections in Transplant Patients",
    "Pulmonary Infections",
    "Pyrexia of unknown origin (PUO)",
    "Skin and Skin Structure Infection",
    "Stent and Implant-Associated Infections",
    "Tropical Infections",
    "Tuberculosis",
    "Viral Infections",
  ];
  return (
    <section>
      <HeroSection
        title="Our Services"
        subtitle="Our service is passionately and meticulously guided by three foundational, non-negotiable, and defining principles: Clinical Excellence, Ethical Conduct, and Patient-Centricity. Our ultimate mission is to deliver honest, compassionate, and economical care to the people of Ahmedabad and its surrounding locations, thereby solidifying, cementing, and confirming our role as your genuinely caring, fundamentally honest, and absolutely trustworthy healthcare partner. "
        buttonText="Get Started"
        backgroundImage={banner}
      />
      <div className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Medical Services
            </h2>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive infectious disease treatment and management services
              offered at our specialized clinic in Ahmedabad.
            </p> */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Services Offered at Health Care Association Infectious Diseases
              Clinic, Ahmedabad
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full group-hover:scale-125 transition-transform"></div>
                  <h3 className="text-gray-900 font-semibold group-hover:text-cyan-700 transition-colors">
                    {service}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Dedicated physicians, nurses, and support personnel specializing
                in infectious diseases
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Personalized Care
              </h3>
              <p className="text-gray-600">
                Comprehensive and coordinated care plans tailored to each
                patient's specific needs
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Timely Treatment
              </h3>
              <p className="text-gray-600">
                Swift diagnosis and immediate treatment protocols for optimal
                patient outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
