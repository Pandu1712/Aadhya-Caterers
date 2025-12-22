import { Users, Award, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Chefs',
      description: 'Skilled culinary professionals with decades of experience in traditional cuisine',
    },
    {
      icon: Award,
      title: 'Quality Ingredients',
      description: 'Only the finest and freshest ingredients sourced from trusted suppliers',
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'Punctual delivery and setup, ensuring your event runs smoothly',
    },
    {
      icon: ThumbsUp,
      title: 'Customer Satisfaction',
      description: '100% satisfaction guaranteed with every catering service',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Spice Caterings
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over 15 years of experience in the catering industry, Spice Caterings has become
              synonymous with authentic traditional Indian cuisine and impeccable service. We
              specialize in bringing the rich flavors of India to your special occasions.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From intimate family gatherings to grand wedding celebrations, our team is dedicated
              to making every event memorable through exceptional food quality, presentation, and
              hospitality.
            </p>
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-6 shadow-xl">
              <p className="text-xl font-semibold mb-2">Our Promise</p>
              <p className="text-orange-100">
                Authentic taste, hygienic preparation, and service that exceeds expectations.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Traditional cooking"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 h-64 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Chef preparing food"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 h-64 w-full object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Food presentation"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 h-64 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Catering service"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 h-64 w-full object-cover mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl p-6 shadow-2xl">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
