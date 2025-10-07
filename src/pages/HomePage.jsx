// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ImageSlider } from '../components/ui/ImageSlider';

// --- IMAGE IMPORTS ---
// Correctly importing the images from your `src/assets` folder.
import heroBackgroundImage from '../assets/Gemini_Generated_Image_ewwi5lewwi5lewwi.png';
import goanSeafoodImage from '../assets/GoanSeafood.jpeg';
import authenticCurriesImage from '../assets/AuthenticCurries.jpeg';
import tandooriDelightsImage from '../assets/TandooriDelights.png';


// Reusable Animation Component
const Reveal = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {children}
    </div>
  );
};

// --- 1. HERO SECTION (Updated) ---
const HeroSection = () => (
  <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
    {/* Background Image with Ken Burns animation */}
    <div
      className="absolute inset-0 bg-cover bg-center animate-kenburns"
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    />
    {/* UPDATED: This overlay now changes on theme toggle */}
    <div className="absolute inset-0 bg-deep-blue-gray/30 dark:bg-dark-blue/70" />
    
    <div className="relative z-10 animate-[fadeIn_2s_ease-in-out]">
      {/* UPDATED: New, simpler headline and sub-headline */}
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-off-white [text-shadow:_2px_2px_8px_rgb(0_0_0_/_60%)]">
        Authentic Goan Dining
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-light text-off-white/90 [text-shadow:_1px_1px_4px_rgb(0_0_0_/_60%)]">
        Family recipes and coastal flavors in the heart of Margao.
      </p>
      <Link to="/menu" className="mt-8 inline-block bg-azure-blue text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg hover:bg-opacity-90 transform hover:scale-105 transition-all">
        Explore The Menu
      </Link>
    </div>
  </section>
);

// --- 2. GALLERY SLIDER SECTION (Updated Colors) ---
const GallerySliderSection = () => (
    <section className="py-24 bg-off-white dark:bg-dark-blue">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
                <Reveal>
                    <h2 className="font-serif text-4xl md:text-5xl text-deep-blue-gray dark:text-off-white">Glimpses of Apple Rosa</h2>
                </Reveal>
            </div>
            <Reveal>
                <div className="mt-12 max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                    <ImageSlider />
                </div>
            </Reveal>
        </div>
    </section>
);

// --- 3. SIGNATURE DISHES SECTION (Updated Colors) ---
const SignatureDishes = () => (
  <section className="py-24 bg-off-white dark:bg-dark-blue">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl text-deep-blue-gray dark:text-off-white">Our Culinary Highlights</h2>
          <p className="mt-4 text-lg text-deep-blue-gray/80 dark:text-off-white/80">These are the flavors our guests return for time and time again.</p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        <Reveal>
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden group h-full transform hover:-translate-y-2 transition-transform duration-300">
            <img src={goanSeafoodImage} alt="Goan Fish Curry" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="font-serif text-2xl text-deep-blue-gray dark:text-off-white">Goan Seafood</h3>
              <p className="mt-2 text-deep-blue-gray/80 dark:text-off-white/80">From spicy Rechado Mackerel to classic King Fish Rawa Fry, taste the freshness of the Arabian Sea.</p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden group h-full transform hover:-translate-y-2 transition-transform duration-300">
            <img src={authenticCurriesImage} alt="Chicken Xacuti" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="font-serif text-2xl text-deep-blue-gray dark:text-off-white">Authentic Curries</h3>
              <p className="mt-2 text-deep-blue-gray/80 dark:text-off-white/80">Experience the rich, complex flavors of our Chicken Xacuti and other traditional Goan curries.</p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden group h-full transform hover:-translate-y-2 transition-transform duration-300">
            <img src={tandooriDelightsImage} alt="Tandoori Platter" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="font-serif text-2xl text-deep-blue-gray dark:text-off-white">Tandoori Delights</h3>
              <p className="mt-2 text-deep-blue-gray/80 dark:text-off-white/80">Smoky, succulent kababs and freshly baked breads, charred to perfection in our clay tandoor.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);


// --- FINAL ASSEMBLY ---
export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <GallerySliderSection />
      <SignatureDishes />
    </>
  );
};