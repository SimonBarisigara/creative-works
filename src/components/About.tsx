import React from 'react';
import { Award, Users, Zap, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="text-purple-600" size={32} />, number: '500+', label: 'Events Organized' },
    { icon: <Award className="text-blue-600" size={32} />, number: '10K+', label: '3D Models Printed' },
    { icon: <Heart className="text-pink-600" size={32} />, number: '98%', label: 'Client Satisfaction' },
    { icon: <Zap className="text-yellow-600" size={32} />, number: '5+', label: 'Years Experience' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Leading event planning with over 8 years of experience'
    },
    {
      name: 'Mike Chen',
      role: '3D Printing Specialist',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Expert in advanced 3D printing technologies and design'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Ensuring seamless project execution and client satisfaction'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">CreativeWorks</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a passion for creativity and innovation, CreativeWorks bridges the gap between 
              traditional event planning and cutting-edge technology. We believe every celebration deserves 
              to be extraordinary, and every idea deserves to be brought to life.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our unique combination of event expertise and 3D printing capabilities allows us to create 
              completely customized experiences that leave lasting impressions. From intimate gatherings 
              to large-scale corporate events, we handle every detail with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Our Story
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                View Capabilities
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Our workspace"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-full">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Innovation First</p>
                  <p className="text-sm text-gray-600">Always pushing boundaries</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Team</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team brings together expertise in event planning, 3D design, and project management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;