// src/components/layout/Navbar.jsx
import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { useScrollHandler } from '../../hooks/useScrollHandler';
import { useClickOutside } from '../../hooks/useClickOutside';

const NavLink = ({ to, icon, text, isExternal = false }) => {
    const isScrolled = useScrollHandler(50);
    const location = useLocation();
    const isTransparentAtTop = !isScrolled && location.pathname === '/';
    const textColor = isTransparentAtTop ? 'text-white' : 'text-deep-blue-gray dark:text-off-white';
    const commonClasses = `${textColor} hover:text-azure-blue transition-colors flex items-center gap-2`;

    if (isExternal) {
        return <a href={to} target="_blank" rel="noopener noreferrer" className={commonClasses}>{icon}<span>{text}</span></a>;
    }
    return <Link to={to} className={commonClasses}>{icon}<span>{text}</span></Link>;
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollHandler(50);
  const location = useLocation();
  const menuRef = useRef();

  useClickOutside(menuRef, () => setIsMenuOpen(false));
  const closeMenu = () => setIsMenuOpen(false);

  const isTransparentAtTop = !isScrolled && location.pathname === '/';
  const textColor = isTransparentAtTop ? 'text-white' : 'text-deep-blue-gray dark:text-off-white';

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-sandy-beige/95 dark:bg-dark-blue/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className={`text-2xl font-serif font-bold ${textColor}`}>
            Apple Rosa
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" text="Home" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>} />
            <NavLink to="/menu" text="Menu" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>} />
            <NavLink to="/about" text="About" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>} />
            <NavLink to="/contact" text="Contact" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>} />
            <NavLink to="https://www.google.com/search?sca_esv=404b834684c619cd&hl=en-IN&sxsrf=AE3TifM69-d9_kbGrlE9Kih8eXdePohJ3g:1759853140026&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0lCTvYxwQtOizvQmKRI0d93HDxfRb9PHGE44BnPmwNy4TZExpKhudesfT2pcH7FwV5w6ayob-SQhBCBa5r4JD9-LP--wOjikWUL2F3Qchqxp4EOfQ%3D%3D&q=Hotel+Apple+Rosa+Restaurant+Reviews&sa=X&ved=2ahUKEwihppLqu5KQAxXChq8BHVmWAs8Q0bkNegQIIBAD&biw=1536&bih=826&dpr=1.25&zx=1759857589245&no_sw_cr=1#lrd=0x3bbfb3d99148bbef:0x78bd458439011975,3,,,," text="Rate Us" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.519 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.519-4.674a1 1 0 00-.363-1.118L2.92 9.1c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"/></svg>} isExternal={true}/>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className={textColor}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* --- MOBILE MENU OVERLAY (ICONS ADDED) --- */}
      <div ref={menuRef} className={`fixed top-0 right-0 h-full w-full max-w-xs bg-off-white dark:bg-dark-blue shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full p-8">
          <button onClick={closeMenu} className="absolute top-5 right-5 text-deep-blue-gray dark:text-off-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
          <nav className="flex flex-col space-y-8 text-center">
            <Link to="/" onClick={closeMenu} className="font-serif text-3xl text-deep-blue-gray dark:text-off-white hover:text-azure-blue flex items-center justify-center gap-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              <span>Home</span>
            </Link>
            <Link to="/menu" onClick={closeMenu} className="font-serif text-3xl text-deep-blue-gray dark:text-off-white hover:text-azure-blue flex items-center justify-center gap-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
              <span>Menu</span>
            </Link>
            <Link to="/about" onClick={closeMenu} className="font-serif text-3xl text-deep-blue-gray dark:text-off-white hover:text-azure-blue flex items-center justify-center gap-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>About</span>
            </Link>
            <Link to="/contact" onClick={closeMenu} className="font-serif text-3xl text-deep-blue-gray dark:text-off-white hover:text-azure-blue flex items-center justify-center gap-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>Contact</span>
            </Link>
            <a href="https://www.google.com/search?sca_esv=404b834684c619cd&hl=en-IN&sxsrf=AE3TifM69-d9_kbGrlE9Kih8eXdePohJ3g:1759853140026&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0lCTvYxwQtOizvQmKRI0d93HDxfRb9PHGE44BnPmwNy4TZExpKhudesfT2pcH7FwV5w6ayob-SQhBCBa5r4JD9-LP--wOjikWUL2F3Qchqxp4EOfQ%3D%3D&q=Hotel+Apple+Rosa+Restaurant+Reviews&sa=X&ved=2ahUKEwihppLqu5KQAxXChq8BHVmWAs8Q0bkNegQIIBAD&biw=1536&bih=826&dpr=1.25&zx=1759857589245&no_sw_cr=1#lrd=0x3bbfb3d99148bbef:0x78bd458439011975,3,,,," target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="font-serif text-3xl text-deep-blue-gray dark:text-off-white hover:text-azure-blue flex items-center justify-center gap-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.519 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.519-4.674a1 1 0 00-.363-1.118L2.92 9.1c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"/></svg>
              <span>Rate Us</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};