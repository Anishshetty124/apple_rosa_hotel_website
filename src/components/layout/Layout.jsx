// src/components/layout/Layout.jsx
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    // This div sets the correct, theme-aware background for the entire site.
    <div className="bg-off-white dark:bg-dark-blue text-deep-blue-gray dark:text-off-white font-sans">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};