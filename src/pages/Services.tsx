
import React from 'react';
import { Sparkles, Zap, Microscope, Leaf, Heart, Sun } from 'lucide-react';
import antiAgingImage from '../assets/anti-aging-treatment.jpg';
import acneTreatmentImage from '../assets/acne-treatment.jpg';
import laserTreatmentImage from '../assets/laser-treatment.jpg';
import skinTagsMolesImage from '../assets/skin-tags-moles.jpg';
import hyperpigmentationImage from '../assets/hyperpigmentation.jpg';
import eczemaPsoriasisImage from '../assets/eczema-psoriasis.jpg';
import hairLossImage from '../assets/hair-loss.jpg';
import skinScreeningImage from '../assets/skin-screening.jpg';

const Services = () => {
  const serviceCategories = [
    {
      icon: <Sparkles className="w-8 h-8 text-pink-600" />,
      title: "Anti-Aging Herbal Treatments",
      image: antiAgingImage,
      services: [
        {
          name: "Natural Anti-Aging Solutions",
          details: ["Herbal face treatments for wrinkle reduction", "Plant-based collagen boosting therapy", "Natural skin tightening treatments", "Herbal rejuvenation masks"]
        }
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Acne & Scar Herbal Treatment",
      image: acneTreatmentImage,
      services: [
        {
          name: "Natural Acne Management", 
          details: ["Herbal acne creams and natural treatments", "Plant-based anti-inflammatory therapy", "Natural scar healing treatments", "Herbal spot reduction therapy"]
        }
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-600" />,
      title: "Laser Keloid & Wart Removal",
      image: laserTreatmentImage,
      services: [
        {
          name: "Professional Laser Treatment",
          details: ["Advanced laser keloid removal", "Precise wart elimination", "Minimal scarring techniques", "Quick recovery procedures"]
        }
      ]
    },
    {
      icon: <Leaf className="w-8 h-8 text-pink-600" />,
      title: "Skin Tag & Mole Herbal Removal",
      image: skinTagsMolesImage,
      services: [
        {
          name: "Natural Removal Techniques",
          details: ["Herbal skin tag treatments", "Natural mole assessment and removal", "Plant-based healing solutions", "Safe herbal removal methods"]
        }
      ]
    },
    {
      icon: <Sun className="w-8 h-8 text-pink-600" />,
      title: "Hyperpigmentation Herbal Treatment",
      image: hyperpigmentationImage,
      services: [
        {
          name: "Natural Skin Brightening",
          details: ["Herbal dark spot treatments", "Natural skin tone evening", "Plant-based brightening therapy", "Herbal melasma solutions"]
        }
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Eczema & Psoriasis Herbal Care",
      image: eczemaPsoriasisImage,
      services: [
        {
          name: "Soothing Herbal Treatments",
          details: ["Natural eczema relief treatments", "Herbal psoriasis management", "Plant-based anti-inflammatory therapy", "Gentle herbal moisturizing solutions"]
        }
      ]
    },
    {
      icon: <Leaf className="w-8 h-8 text-pink-600" />,
      title: "Hair Loss Herbal Treatment",
      image: hairLossImage,
      services: [
        {
          name: "Natural Hair Growth Solutions",
          details: ["Herbal hair growth treatments", "Natural scalp therapy", "Plant-based hair strengthening", "Herbal hair loss prevention"]
        }
      ]
    },
    {
      icon: <Microscope className="w-8 h-8 text-pink-600" />,
      title: "Skin Cancer Screening",
      image: skinScreeningImage,
      services: [
        {
          name: "Professional Assessment",
          details: ["Comprehensive skin examinations", "Mole and lesion evaluation", "Early detection screening", "Professional health consultations"]
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
            Comprehensive herbal dermatological care with natural treatments and personalized herbal solutions. 
            All our services use tested and trusted herbal remedies, except for our advanced laser treatments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
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
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-6">
              Schedule a consultation today to discuss your skin care needs with our expert herbal dermatologist.
            </p>
            <a 
              href="https://wa.me/2348027797190?text=Hello!%20I%20would%20like%20to%20book%20a%20consultation%20for%20herbal%20skincare%20treatment." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-200 transform hover:scale-105"
            >
              Book Appointment via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
