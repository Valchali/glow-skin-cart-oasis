
import React from 'react';
import { Stethoscope, Scissors, Sparkles, Users, Baby, Microscope } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: <Stethoscope className="w-8 h-8 text-pink-600" />,
      title: "Herbal Dermatology",
      services: [
        {
          name: "Skin Cancer Screening & Herbal Treatment",
          details: ["Mole evaluations and natural assessments", "Herbal remedies for skin conditions", "Natural healing approaches"]
        },
        {
          name: "Acne Management", 
          details: ["Herbal creams and natural treatments", "Plant-based chemical peels", "Natural anti-inflammatory treatments"]
        },
        {
          name: "Eczema/Psoriasis Herbal Care",
          details: ["Herbal oil treatments", "Natural phototherapy alternatives"]
        },
        {
          name: "Rosacea & Redness Control",
          details: ["Herbal anti-inflammatory treatments", "Natural calming remedies"]
        },
        {
          name: "Infectious Skin Conditions",
          details: ["Natural wart removal treatments", "Herbal antiviral remedies", "Plant-based antifungal treatments"]
        }
      ]
    },
    {
      icon: <Scissors className="w-8 h-8 text-pink-600" />,
      title: "Natural Treatment Procedures",
      services: [
        {
          name: "Herbal Cyst/Tumor Treatment",
          details: ["Natural herbal treatment procedures"]
        },
        {
          name: "Skin Tag Herbal Removal",
          details: ["Natural removal techniques using herbal solutions"]
        },
        {
          name: "Scar Revision with Herbs",
          details: ["Herbal treatments for keloids", "Natural scar improvement methods"]
        }
      ]
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pink-600" />,
      title: "Herbal Cosmetic Treatments",
      services: [
        {
          name: "Anti-Aging Herbal Treatments",
          details: ["Natural herbal face masks", "Plant-based anti-aging creams", "Herbal rejuvenation therapy"]
        },
        {
          name: "Natural Skin Treatments",
          details: ["Herbal peels for wrinkles/scars", "Natural spot removal treatments", "Plant-based hair removal methods"]
        },
        {
          name: "Advanced Herbal Treatments",
          details: ["Natural Chemical Peels (plant-based)", "Herbal microneedling treatments"]
        }
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      title: "Hair & Nail Herbal Services",
      services: [
        {
          name: "Hair Loss Herbal Treatment",
          details: ["Natural herbal treatments for hair growth", "Plant-based hair growth oils"]
        },
        {
          name: "Scalp Herbal Conditions",
          details: ["Natural psoriasis/folliculitis management"]
        },
        {
          name: "Nail Fungus Herbal Treatment",
          details: ["Natural antifungal herbal treatments", "Plant-based nail therapy"]
        }
      ]
    },
    {
      icon: <Baby className="w-8 h-8 text-pink-600" />,
      title: "Pediatric Herbal Dermatology",
      services: [
        {
          name: "Specialized Child Herbal Care",
          details: ["Natural birthmark treatments", "Herbal remedies for genetic skin disorders", "Teen acne herbal programs"]
        }
      ]
    },
    {
      icon: <Microscope className="w-8 h-8 text-pink-600" />,
      title: "Specialized Herbal Diagnostics",
      services: [
        {
          name: "Natural Assessment Methods",
          details: ["Herbal skin analysis", "Natural allergy testing methods"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Herbal Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive herbal dermatological care with natural treatments and personalized herbal solutions for all your skin, hair, and nail needs.
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
              Schedule a consultation today to discuss your skin care needs with our expert herbal dermatologists.
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
