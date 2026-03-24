import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'MSME Business Owner',
    role: 'Manufacturing Sector',
    rating: 5,
    text: "Mayank's implementation of Zoho CRM transformed our sales process completely. The productivity improvements were visible within the first month.",
  },
  {
    id: 2,
    name: 'Operations Manager',
    role: 'Service Industry',
    rating: 5,
    text: 'His ability to explain complex technology in simple business terms made the entire transformation process smooth.',
  },
  {
    id: 3,
    name: 'Business Director',
    role: 'Trading Company',
    rating: 5,
    text: 'The process optimization strategies delivered immediate results. Our manual work reduced by 60% and accuracy improved significantly.',
  },
];

const ReviewCard = ({ review }: { review: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[400px] bg-white p-8 relative border border-[#DDF4E7] shadow-sm hover:border-[#67C090] hover:shadow-lg transition-all duration-300 mx-4 rounded-2xl whitespace-normal select-none">
    <Quote size={40} className="absolute top-6 right-6 text-[#DDF4E7]" />
    <div className="flex gap-1 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < review.rating ? 'text-[#67C090] fill-[#67C090]' : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </div>
    <p className="text-[#26667F] text-[15px] font-light leading-relaxed mb-8 min-h-[100px]">
      "{review.text}"
    </p>
    <div className="flex items-center gap-4 pt-6 border-t border-[#DDF4E7]">
      <div className="w-12 h-12 bg-[#124170] flex items-center justify-center text-white font-bold text-sm tracking-wider rounded-lg">
        {review.name.charAt(0)}
      </div>
      <div>
        <div className="text-sm font-bold text-[#124170]">{review.name}</div>
        <div className="text-xs text-[#26667F]/70">{review.role}</div>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const scrolledReviews = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="min-h-screen flex flex-col justify-center py-24 relative bg-[#DDF4E7]/10 overflow-hidden">
      {/* Doodle Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0z\' fill=\'none\'/%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1.5\' fill=\'%2367C090\' fill-opacity=\'0.2\'/%3E%3C/svg%3E')] [background-size:24px_24px] opacity-50 -z-10" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-[#124170] text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4 rounded-md">
            CLIENT SUCCESS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#124170] leading-tight">
            What Our <span className="text-[#67C090]">Clients Say</span>
          </h2>
          <p className="text-[#26667F] max-w-2xl mx-auto text-lg font-light">
            Hear from business leaders who trust Mayank Kariya for their technology transformation needs.
          </p>
        </motion.div>
      </div>

      {/* Track Wrapper */}
      <div className="relative w-full group overflow-hidden">
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#DDF4E7]/30 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#DDF4E7]/30 to-transparent z-10 pointer-events-none"></div>

        {/* The Track (Pure CSS Animation) */}
        <div
          className="flex w-max marquee-track will-change-transform"
          style={{
            animation: `marquee-reviews ${testimonials.length * 4}s linear infinite`,
          }}
        >
          {scrolledReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-reviews {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        
        .marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
