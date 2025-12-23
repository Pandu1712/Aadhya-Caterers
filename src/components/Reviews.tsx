import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface Review {
  name: string;
  role?: string;
  rating: number;
  review: string;
  reply?: string;
}

const reviews: Review[] = [
  {
    name: "Lalitha Meduri",
    role: "Local Guide",
    rating: 5,
    review:
      "Food was excellent and met the standards. All customisations were fulfilled, budget-friendly, and the service was awesome. Guests were very happy.",
    reply:
      "Thank you for sharing your wonderful experience. We are delighted to hear that we could meet your expectations and make your event successful.",
  },
  {
    name: "Sairam Jeejula",
    rating: 5,
    review:
      "The vegetarian catering was exceptional. Every dish was freshly prepared, flavorful, and balanced. Desserts and service were excellent.",
    reply:
      "We are truly delighted that you enjoyed the catering and service. Your recommendation means a lot to us!",
  },
  {
    name: "Sandhya Goud",
    rating: 5,
    review:
      "Absolutely amazing experience! The food was fresh, flavorful, and perfectly cooked. Presentation was excellent.",
    reply:
      "Thank you for your kind words. We look forward to serving you again.",
  },
  {
    name: "Karthik G",
    rating: 1,
    review:
      "Items were missed and service team was inexperienced. Food taste was okay.",
    reply:
      "We sincerely apologize for the inconvenience. Your feedback helps us improve.",
  },
];

const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 360;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-[#F6F4FB] relative">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3C1285] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real experiences from our valued customers across Hyderabad
          </p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-[#3C1285] hover:text-white transition z-10"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-[#3C1285] hover:text-white transition z-10"
        >
          <ChevronRight />
        </button>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-6 hide-scrollbar"
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="min-w-[320px] max-w-[320px] bg-white rounded-3xl shadow-lg p-6 border border-[#E6E1F2] hover:shadow-xl transition"
            >
              <Quote className="w-8 h-8 text-[#3C1285] mb-4" />

              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-4 h-4 ${
                      idx < r.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
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

      {/* Hide scrollbar */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default Reviews;
