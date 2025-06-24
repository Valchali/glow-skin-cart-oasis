import React from 'react';
import { Heart, Users, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-800">
                About <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Bomafart Skincare</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe that beautiful skin is not just about looking good—it's about feeling confident, healthy, and radiant from within. Our mission is to provide you with premium skincare products that enhance your natural beauty.
              </p>
              <p className="text-lg text-gray-600">
                Founded in 2006 by skincare enthusiast, Bomafart Skincare has been dedicated to creating products that are not only effective but also gentle and sustainable.
              </p>
            </div>
            <div className="relative">
              <img 
                src="./public/aboutimg.jpeg" 
                alt="About Bomafart Skincare"
                className="w-full h-96 object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by our core values and commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 hover-scale">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Passion</h3>
              <p className="text-gray-600">
                We're passionate about skincare and dedicated to helping you achieve your best skin.
              </p>
            </div>
            
            <div className="text-center p-6 hover-scale">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in building a supportive community of skincare enthusiasts.
              </p>
            </div>
            
            <div className="text-center p-6 hover-scale">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                Every product meets our highest standards for safety and effectiveness.
              </p>
            </div>
            
            <div className="text-center p-6 hover-scale">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously research and develop new formulations for better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Bomafart Skincare was born from a simple belief: everyone deserves to feel confident in their skin. Our founders, after struggling with their own skincare journeys, decided to create a brand that would offer effective, gentle, and accessible skincare solutions.
              </p>
              <p>
                What started as a small operation in a home kitchen has grown into a trusted brand used by thousands of customers worldwide. We're proud to have helped so many people discover their most radiant skin.
              </p>
              <p>
                Today, we continue to innovate and improve our formulations, always keeping our customers' needs at the heart of everything we do. Because when your skin glows, you glow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;