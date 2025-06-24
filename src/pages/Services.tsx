
import React from 'react';
import { Stethoscope, Scissors, Sparkles, Users, Baby, Microscope } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: <Stethoscope className="w-8 h-8 text-pink-600" />,
      title: "Medical Dermatology",
      services: [
        {
          name: "Skin Cancer Screening & Treatment",
          details: ["Mole evaluations (dermatoscopy)", "Biopsies (shave, punch, excisional)", "Mohs surgery for skin cancer"]
        },
        {
          name: "Acne Management", 
          details: ["Prescription creams/oral medications", "Chemical peels", "Cortisone injections for cysts"]
        },
        {
          name: "Eczema/Psoriasis Care",
          details: ["Biologic injections (e.g., Dupixent)", "Phototherapy (UV light treatment)"]
        },
        {
          name: "Rosacea & Redness Control",
          details: ["Laser therapies (Vbeam)", "Topical anti-inflammatory treatments"]
        },
        {
          name: "Infectious Skin Conditions",
          details: ["Wart removal (cryotherapy, acids)", "Herpes/zoster treatment", "Fungal/bacterial infection care"]
        }
      ]
    },
    {
      icon: <Scissors className="w-8 h-8 text-pink-600" />,
      title: "Surgical Procedures",
      services: [
        {
          name: "Cyst/Tumor Removal",
          details: ["Professional surgical removal procedures"]
        },
        {
          name: "Skin Tag Removal",
          details: ["Cryotherapy or snipping techniques"]
        },
        {
          name: "Scar Revision",
          details: ["Keloid steroid injections", "Surgical scar improvement"]
        }
      ]
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pink-600" />,
      title: "Cosmetic Dermatology",
      services: [
        {
          name: "Anti-Aging Treatments",
          details: ["Botox/Dysport/Xeomin", "Dermal fillers (Juvederm, Restylane)", "PRP (Platelet-Rich Plasma) therapy"]
        },
        {
          name: "Laser Treatments",
          details: ["Fraxel for wrinkles/scars", "IPL for sun spots", "Laser hair removal"]
        },
        {
          name: "Advanced Treatments",
          details: ["Chemical Peels (glycolic, TCA)", "Microneedling (with/without RF)"]
        }
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      title: "Hair & Nail Services",
      services: [
        {
          name: "Hair Loss Treatment",
          details: ["PRP for androgenetic alopecia", "Minoxidil/finasteride prescriptions"]
        },
        {
          name: "Scalp Conditions",
          details: ["Psoriasis/folliculitis management"]
        },
        {
          name: "Nail Fungus Treatment",
          details: ["Oral antifungals (terbinafine)", "Laser nail therapy"]
        }
      ]
    },
    {
      icon: <Baby className="w-8 h-8 text-pink-600" />,
      title: "Pediatric Dermatology",
      services: [
        {
          name: "Specialized Child Care",
          details: ["Birthmark evaluations (hemangiomas)", "Genetic skin disorder management", "Teen acne programs"]
        }
      ]
    },
    {
      icon: <Microscope className="w-8 h-8 text-pink-600" />,
      title: "Specialized Diagnostics",
      services: [
        {
          name: "Advanced Testing",
          details: ["Patch testing (for contact allergies)", "Skin prick tests (for urticaria)"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dermatological care with advanced treatments and personalized solutions for all your skin, hair, and nail needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
              </div>
              
              <div className="space-y-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="border-l-4 border-pink-200 pl-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.name}</h3>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-6">
              Schedule a consultation today to discuss your skin care needs with our expert dermatologists.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-200 transform hover:scale-105"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
