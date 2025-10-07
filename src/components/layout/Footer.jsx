// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="bg-charcoal-grey text-cloud-white">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
        {/* About */}
        <div>
          <h3 className="font-serif text-xl font-bold mb-4 text-terracotta">Hotel Apple Rosa</h3>
          <p className="text-sm opacity-80">A family-run restaurant and bar in Margao, Goa, serving comfort and authentic flavors.</p>
        </div>
        {/* Address */}
        <div>
          <h3 className="font-serif text-xl font-bold mb-4 text-terracotta">Visit Us</h3>
          <p className="text-sm opacity-80">
            Opp. ESI hospital, near Rajendra Prasad Cricket Stadium, Sanscar Society, Madgaon, Goa 403601
          </p>
        </div>
        {/* Contact & Hours */}
        <div>
          <h3 className="font-serif text-xl font-bold mb-4 text-terracotta">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="opacity-80">
              <a href="tel:07020877880" className="hover:text-terracotta transition">Phone: 070208 77880</a>
            </li>
            <li className="opacity-80">
              Hours: Open Daily until 11 PM
            </li>
          </ul>
        </div>
        {/* Order Online */}
        <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-terracotta">Order Online</h3>
            <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-terracotta transition">Zomato</a>
                <span>/</span>
                <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-terracotta transition">Swiggy</a>
            </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm opacity-70">
        <p>© {new Date().getFullYear()} Hotel Apple Rosa. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);