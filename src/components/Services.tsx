import React from 'react';
import { Calendar, Printer, Sparkles, Palette, Users, Zap } from 'lucide-react';

const Services = () => {
  const eventServices = [
    {
      icon: <Calendar className="text-purple-600" size={48} />,
      title: "Event Planning",
      description: "Complete event management from concept to execution"
    },
    {
      icon: <Users className="text-blue-600" size={48} />,
      title: "Party Organization",
      description: "Memorable celebrations tailored to your vision"
    },
    {
      icon: <Palette className="text-pink-600" size={48} />,
      title: "Custom Decorations",
      description: "Unique themed decorations and setup services"
    }
  ];

  const printingServices = [
    {
      icon: <Printer className="text-green-600" size={48} />,
      title: "3D Prototyping",
      description: "Rapid prototyping for product development"
    },
    {
      icon: <Zap className="text-yellow-600" size={48} />,
      title: "Custom Models",
      description: "Personalized 3D models and miniatures"
    },
    {
      icon: <Sparkles className="text-indigo-600" size={48} />,
      title: "Decorative Items",
      description: "3D printed decorations for events and displays"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive solutions for your event planning needs and cutting-edge 3D printing services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Events & Parties */}
          <div className="bg-white rounded-2xl p-8 shadows-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-full mr-4">
                <Calendar className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Events & Parties</h3>
            </div>
            
            <div className="grid gap-6">
              {eventServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Printing */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-100 to-green-100 p-3 rounded-full mr-4">
                <Printer className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3D Printing</h3>
            </div>
            
            <div className="grid gap-6">
              {printingServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-6 opacity-90">
            Let's discuss your project and bring your ideas to life
          </p>
          <a
            href="#contact"
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;