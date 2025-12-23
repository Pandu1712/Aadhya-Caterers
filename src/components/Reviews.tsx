import { Star, Quote } from 'lucide-react';

interface Review {
  name: string;
  role?: string;
  rating: number;
  review: string;
  reply?: string;
}

const reviews: Review[] = [
  {
    name: 'Lalitha Meduri',
    role: 'Local Guide',
    rating: 5,
    review:
      'Food was excellent and met the standards. All customisations were fulfilled, budget-friendly, and the service was awesome. Guests were very happy.',
    reply:
      'Thank you for sharing your wonderful experience. We are delighted to hear that we could meet your expectations and make your event successful.',
  },
  {
    name: 'Sairam Jeejula',
    rating: 5,
    review:
      'The vegetarian catering was exceptional. Every dish was freshly prepared, flavorful, and balanced. Desserts and service were excellent.',
    reply:
      'We are truly delighted that you enjoyed the catering and service. Your recommendation means a lot to us!',
  },
  {
    name: 'Sandhya Goud',
    rating: 5,
    review:
      'Absolutely amazing experience! The food was fresh, flavorful, and perfectly cooked. Presentation was excellent.',
    reply:
      'Thank you for your kind words. We look forward to serving you again.',
  },
  {
    name: 'Chagan Sharma',
    role: 'Local Guide',
    rating: 5,
    review:
      'Excellent service even with a last-minute rush. Delivered on time with good quality food.',
    reply:
      'Your appreciation motivates our team greatly. Thank you for trusting us.',
  },
  {
    name: 'Gowthami Batsa',
    rating: 5,
    review:
      'Chose them without prior knowledge but very happy with the decision. Food was delicious and sufficient for all guests.',
    reply:
      'We are thrilled to know you and your guests enjoyed the food and service.',
  },
  {
    name: 'Aruna Damodharan',
    rating: 5,
    review:
      'Excellent food. Tastes like homemade. Ordered for Satyanarayana Pooja and strongly recommend.',
    reply: 'Thank you madam for your trust and recommendation.',
  },
  {
    name: 'Tulasi Reddy',
    rating: 5,
    review:
      'Excellent catering service! Dishes were fresh, tasty, and beautifully arranged.',
    reply:
      'Your recommendation means a lot to us. Looking forward to serving you again.',
  },
  {
    name: 'Karthik G',
    rating: 1,
    review:
      'Items were missed and service team was inexperienced. Food taste was okay.',
    reply:
      'We sincerely apologize for the inconvenience. We depend on external vendors for certain items and regret the experience. Your feedback helps us improve.',
  },
  {
    name: 'Sudha Mohan',
    rating: 5,
    review:
      'Food was delicious and prepared to our taste for Seemantham. Guests were satisfied and service was punctual.',
    reply:
      'We’re glad we could make your Seemantham function special.',
  },
  {
    name: 'Revanth Kumar',
    rating: 5,
    review:
      'Best food quality. Trusted service. Ordered for housewarming and everything was excellent.',
    reply:
      'Thank you for trusting Aadhya Caterers. We look forward to serving you again.',
  },
  {
    name: 'Rajini Gavini',
    rating: 5,
    review:
      'Vegetarian catering was exceptional. Staff was professional and attentive.',
    reply:
      'Providing quality vegetarian catering is our priority. Thank you!',
  },
  {
    name: 'Tejesh Kumar',
    rating: 5,
    review:
      'Excellent catering. Everyone loved the Panasakaya Biryani.',
    reply:
      'We’re delighted to be recognized among the best caterers in Hyderabad.',
  },
  {
    name: 'Nakalapally Suchita',
    rating: 5,
    review:
      'Ordered food for Ganesh Puja. Very good service, tasty food, and timely response.',
    reply:
      'Thank you for choosing us. We’ll be happy to serve you again.',
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-[#F6F4FB]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3C1285] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real experiences from our valued customers across Hyderabad
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-6 border border-[#E6E1F2] hover:shadow-xl transition"
            >
              <Quote className="w-8 h-8 text-[#3C1285] mb-4" />

              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-4 h-4 ${
                      idx < r.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {r.review}
              </p>

              {/* Name */}
              <div className="font-semibold text-[#3C1285]">
                {r.name}
              </div>
              {r.role && (
                <div className="text-xs text-gray-500">{r.role}</div>
              )}

              {/* Reply */}
              {r.reply && (
                <div className="mt-4 bg-[#F3F0FB] p-4 rounded-xl text-sm">
                  <span className="font-semibold text-[#3C1285] block mb-1">
                    Aadhya Caterers (Owner)
                  </span>
                  <p className="text-gray-700">{r.reply}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
