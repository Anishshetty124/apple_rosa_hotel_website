// src/pages/AboutPage.jsx
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// Reusable Animation Component
const Reveal = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {children}
    </div>
  );
};

export const AboutPage = () => {
  return (
    <div className="bg-off-white dark:bg-dark-blue text-deep-blue-gray dark:text-off-white">
      {/* Header Section */}
      <div className="relative pt-32 pb-20 text-center">
        <Reveal>
          <h1 className="font-serif text-5xl md:text-7xl font-bold">Our Story</h1>
          <p className="mt-4 text-xl text-deep-blue-gray/80 dark:text-off-white/80">The Heart of Goan Hospitality in Margao</p>
        </Reveal>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <Reveal>
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974" 
                alt="Cozy ambiance of Apple Rosa Restaurant" 
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
            </Reveal>
          </div>
          <div className="w-full lg:w-1/2">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-4xl text-azure-blue dark:text-sandy-beige">More Than a Meal, It's a Feeling</h2>
              <p className="mt-6 text-lg leading-relaxed text-deep-blue-gray/90 dark:text-off-white/90">
                Welcome to Hotel Apple Rosa, a family-run restaurant and bar where the spirit of "Susegad"—that uniquely Goan feeling of relaxed contentment—is at the heart of everything we do. For us, food is about more than just flavor; it's about tradition, family, and the joy of sharing a good meal.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-deep-blue-gray/90 dark:text-off-white/90">
                Located in the bustling heart of Margao, we are a cherished spot for locals and travelers seeking authentic Goan cuisine. From the sizzle of our fresh-caught seafood to the rich aroma of our hand-ground Xacuti masala, every dish is a tribute to our heritage.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-sandy-beige dark:bg-deep-blue-gray/20 py-20 text-center">
        <Reveal>
            <h2 className="font-serif text-4xl text-deep-blue-gray dark:text-off-white">Experience It Yourself</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-deep-blue-gray/80 dark:text-off-white/80">
                Join us for a meal and discover why our guests become family.
            </p>
            <Link to="/menu" className="mt-8 inline-block bg-azure-blue text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg hover:bg-opacity-90 transform hover:scale-105 transition-all">
                View Our Menu
            </Link>
        </Reveal>
      </div>
    </div>
  );
};