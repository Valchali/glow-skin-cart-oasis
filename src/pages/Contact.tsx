
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "2348027797190";
    const message = "Hello! I'm interested in your skincare products and services. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-lg mb-8">
                Have questions about our products or need skincare advice? Our team of experts is here to help you achieve your skincare goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">Bomafart@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+(234) 802-779-7190</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">7 Fujena Rd, Ikorodu, 104101, Lagos</p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4 mb-6">
                <a 
                  href="https://web.facebook.com/bomafartskincare1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Facebook className="text-white" size={24} />
                </a>
                <a 
                  href="https://instagram.com/bomafart_skincare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Instagram className="text-white" size={24} />
                </a>
                <a 
                  href="https://www.tiktok.com/@bomafartskincare1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/2348027797190" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.887 3.506z"/>
                  </svg>
                </a>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Support Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM WAT</p>
                <p><strong>Saturday:</strong> Closed</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Call-to-Action */}
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="text-white" size={48} />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Chat with Us on WhatsApp</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Get instant support and personalized skincare advice directly through WhatsApp. Our team is ready to help you!
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-3"
            >
              <MessageCircle size={24} />
              <span>Start WhatsApp Chat</span>
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              Click the button above to open WhatsApp with a pre-filled message
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
