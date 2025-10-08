// src/pages/ContactPage.jsx
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

export const ContactPage = () => (
  <div className="bg-off-white dark:bg-dark-blue py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="text-center">
        <Reveal>
          <h1 className="font-serif text-4xl md:text-5xl text-deep-blue-gray dark:text-off-white">Get In Touch</h1>
          <p className="mt-4 text-lg text-deep-blue-gray/80 dark:text-off-white/80">We're located in the heart of Margao. Come visit us!</p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Details */}
        <Reveal>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="font-serif text-3xl text-azure-blue dark:text-sandy-beige">Hotel Apple Rosa</h2>
            <div className="mt-6 space-y-4 text-deep-blue-gray dark:text-off-white">
              <p className="flex items-start">
                <span className="mt-1 mr-4 text-azure-blue">📍</span>
                <span>Opp. ESI hospital, near Rajendra Prasad Cricket Stadium, Sanscar Society, Madgaon, Goa 403601</span>
              </p>
              <p className="flex items-center">
                <span className="mr-4 text-azure-blue">📞</span>
                <a href="tel:07020877880" className="hover:underline">070208 77880</a>
              </p>
              <p className="flex items-center">
                <span className="mr-4 text-azure-blue">🕒</span>
                <span>Open Daily until 11:00 PM</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* --- UPDATED GOOGLE MAP EMBED --- */}
        <Reveal>
          <div className="h-96 lg:h-full w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.52042229249!2d73.97150137583626!3d15.267868884904245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb3d99148bbef%3A0x78bd458439011975!2sHotel%20Apple%20Rosa%20Restaurant!5e0!3m2!1sen!2sin!4v1759853140026"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Apple Rosa Location"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
);