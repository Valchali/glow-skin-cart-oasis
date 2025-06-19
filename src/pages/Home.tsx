
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Leaf } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Radiant Skin
                </span>
                <br />
                Starts Here
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our premium collection of skincare products designed to enhance your natural beauty and give you the confidence to glow every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Shop Collection</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition-all duration-200 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=600&fit=crop" 
                alt="Skincare Products"
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose GlowSkin?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the highest quality skincare products that deliver real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 hover-scale">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Each product is carefully formulated with the finest ingredients to ensure maximum effectiveness and safety.
              </p>
            </div>
            
            <div className="text-center p-8 hover-scale">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dermatologist Tested</h3>
              <p className="text-gray-600">
                All our products are rigorously tested by certified dermatologists to ensure they're safe for all skin types.
              </p>
            </div>
            
            <div className="text-center p-8 hover-scale">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Natural Ingredients</h3>
              <p className="text-gray-600">
                We believe in the power of nature and use organic, sustainably sourced ingredients whenever possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered the secret to radiant, healthy skin.
          </p>
          <Link
            to="/products"
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Start Your Journey</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
