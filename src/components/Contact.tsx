import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
      color: 'from-[#3C1285] to-[#5B3BBE]',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@aadhyacaterers.com', 'bookings@aadhyacaterers.com'],
      color: 'from-[#3C1285] to-[#6A4CD4]',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Hyderabad, Telangana', 'India'],
      color: 'from-[#3C1285] to-[#4E2FAF]',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 9:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
      color: 'from-[#3C1285] to-[#7B5EEA]',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <section className="py-20 bg-[#F6F4FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In{' '}
            <span className="text-[#3C1285]">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let’s discuss your catering needs and create an unforgettable experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ================= LEFT ================= */}
          <div>

            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6
                    border border-[#E3DDF5]
                    hover:border-[#3C1285]
                    transition-all duration-300
                    hover:shadow-lg"
                  >
                    <div
                      className={`bg-gradient-to-br ${item.color}
                      w-14 h-14 rounded-xl
                      flex items-center justify-center mb-4
                      group-hover:scale-105 transition`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* WHY US */}
            <div className="bg-gradient-to-br from-[#3C1285] to-[#5B3BBE]
              rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Authentic traditional recipes',
                  'Hygienic food preparation',
                  'Flexible menu options',
                  'Professional service staff',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= RIGHT / FORM ================= */}
          <div className="bg-white rounded-2xl p-8 border border-[#E3DDF5] shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              {[
                { label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
                { label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
                { label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl
                    border border-[#E3DDF5]
                    focus:border-[#3C1285]
                    focus:outline-none transition"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl
                  border border-[#E3DDF5]
                  focus:border-[#3C1285]
                  focus:outline-none transition"
                >
                  <option value="">Select event type</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Corporate</option>
                  <option>Anniversary</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl
                  border border-[#E3DDF5]
                  focus:border-[#3C1285]
                  focus:outline-none resize-none transition"
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#3C1285] text-white
                font-semibold py-4 rounded-xl
                hover:bg-[#2a0d5c]
                transition shadow-md"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
