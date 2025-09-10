import {
  Heart,
  Shield,
  Stethoscope,
  Thermometer,
  Activity,
  Settings as Lungs,
  Pill,
} from "lucide-react";
import banner from "@/assets/treatment/banner.png";
import treatment1 from "@/assets/treatment/treatment1.png";
import treatment2 from "@/assets/treatment/treatment2.png";
import treatment3 from "@/assets/treatment/treatment3.png";
import treatment4 from "@/assets/treatment/treatment4.png";
import treatment5 from "@/assets/treatment/treatment5.png";
import treatment6 from "@/assets/treatment/treatment6.png";
import treatment7 from "@/assets/treatment/treatment7.png";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
const treatments = [
  {
    id: 1,
    title: "Dengue Treatment",
    description:
      "Our consultants guide healthcare providers in managing dengue cases with early detection protocols, platelet monitoring, and fluid therapy strategies.",
    image: treatment1,
    icon: <Pill className="h-5 w-5 text-blue-600" />,
    color: "text-blue-600",
  },
  {
    id: 2,
    title: "Chikungunya Treatment",
    description:
      "We help clinics implement pain management and recovery plans for joint pain and fever caused by chikungunya. ",
    image: treatment2,
    icon: <Pill className="h-5 w-5 text-purple-600" />,
    color: "text-purple-600",
  },
  {
    id: 3,
    title: "Malaria Treatment",
    description:
      "From diagnostic support to antimalarial drug protocols, we assist in controlling malaria outbreaks effectively.",
    image: treatment3,
    icon: <Pill className="h-5 w-5 text-red-600" />,
    color: "text-red-600",
  },
  {
    id: 4,
    title: "Flu Treatment",
    description:
      "Our flu management programs include vaccination drives, antiviral therapy guidance, and public health education. ",
    image: treatment4,
    icon: <Pill className="h-5 w-5 text-green-600" />,
    color: "text-green-600",
  },
  {
    id: 5,
    title: "Viral Fever Treatment",
    description:
      "We support hospitals in differentiating viral fevers from other infections and streamlining treatment plans. ",
    image: treatment5,
    icon: <Pill className="h-5 w-5 text-pink-600" />,
    color: "text-pink-600",
  },
  {
    id: 6,
    title: "Tuberculosis Treatment",
    description:
      "Our consultants work with pulmonologists to ensure DOTS compliance and long-term TB care strategies.",
    image: treatment6,
    icon: <Pill className="h-5 w-5 text-orange-600" />,
    color: "text-orange-600",
  },
  {
    id: 7,
    title: "Typhoid Treatment",
    description:
      "We help healthcare centers adopt hygiene-focused protocols and antibiotic stewardship for typhoid management.",
    image: treatment7,
    icon: <Pill className="h-5 w-5 text-yellow-600" />,
    color: "text-orange-600",
  },
];

export default function Treatment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection
        title="Our Treatment"
        subtitle="At Health Care Association, we specialize in providing expert consulting and treatment solutions for common seasonal illnesses that affect communities across Ahmedabad. Our goal is to ensure timely diagnosis, effective care, and preventive strategies for diseases that surge during monsoon and transitional weather periods."
        buttonText="Get Started"
        backgroundImage={banner}
      />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Heart className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 md:mb-8">
              Expert Treatment Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl mx-auto">
              At Health Care Association, we specialize in providing expert
              consulting and treatment solutions for common seasonal illnesses
              that affect communities across Ahmedabad. Our goal is to ensure
              timely diagnosis, effective care, and preventive strategies for
              diseases that surge during monsoon and transitional weather
              periods.
            </p>
            <div className="mt-8">
              <span className="inline-block text-sm px-4 py-2 rounded-full bg-gray-200 text-cyan-700 font-medium">
                Serving Ahmedabad Communities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Treatments Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Heading Section */}
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Treatment Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive support for seasonal and infectious diseases
            with specialized protocols and expert guidance.
          </p> */}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 md:mb-16">
            We offer comprehensive support for
          </h1>
        </div>

        {/* Treatment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02] flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-56 lg:h-60 overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow">
                    {treatment.icon}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-700 group-hover:text-cyan-700 transition-colors">
                    {treatment.title}
                  </h3>
                </div>
                {/* <span className="inline-block w-fit text-xs sm:text-sm px-3 py-1 rounded-full border border-gray-300 text-gray-700 mb-3">
                  In Ahmedabad
                </span> */}
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-grow">
                  {treatment.description}
                </p>

                {/* Footer */}
                {/* <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm sm:text-base text-blue-600 font-medium group-hover:text-blue-700">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Expert Consultation Available
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 md:mb-8 mt-8">
            Add some heading here
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl mx-auto">
            Whether you're a clinic, hospital, or public health organization,
            Health Care Association offers tailored consulting to combat
            seasonal diseases with precision and care. Partner with us to
            enhance your community’s resilience against infectious threats.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
