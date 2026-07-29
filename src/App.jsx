import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import About from './pages/About';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import { AuthProvider } from './context/AuthContext';
import { getSettings, applyThemeColor } from './utils/storage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow animate-fade-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />

      {/* Floating Action Buttons (Call & WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Floating Call Button */}
        <a
          href="tel:+916378556857"
          className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-container text-on-primary rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
          aria-label="Call Clinic"
          title="Call +91 6378556857"
        >
          <span className="material-symbols-outlined text-[28px]">call</span>
          {/* Tooltip */}
          <span className="absolute bottom-16 right-0 bg-surface-container-high border border-outline-variant/30 text-on-surface text-caption font-label-md px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap shadow-md translate-y-2 group-hover:translate-y-0">
            Call +91 6378556857
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/916378556857?text=Hi%20Shree%20Radhe%20Dental%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20your%20treatments."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 animate-whatsapp group relative"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.59 1.973 14.121.95 11.5.952c-5.437 0-9.862 4.371-9.866 9.8.004 2.079.547 4.11 1.57 5.922L2.2 22.25l5.88-1.537c1.7.923 3.53 1.438 5.44 1.439zM17.18 14.9c-.284-.143-1.688-.832-1.948-.928-.26-.095-.45-.143-.64.143-.19.284-.736.928-.9 1.12-.164.19-.328.214-.61.071-.285-.143-1.203-.443-2.29-1.411-.847-.756-1.42-1.69-1.586-1.975-.166-.285-.018-.44.124-.58.128-.129.285-.333.428-.5.143-.167.19-.285.285-.476.095-.19.047-.357-.024-.5-.071-.143-.64-1.543-.877-2.113-.23-.555-.483-.48-.64-.488-.165-.008-.355-.01-.546-.01-.19 0-.5.07-.762.357-.26.285-1 1-.977 2.428.024 1.429 1.048 2.81 1.19 3 .143.19 2.062 3.15 4.996 4.417.697.302 1.24.482 1.664.617.7.224 1.338.193 1.843.118.563-.084 1.688-.69 1.925-1.357.238-.667.238-1.238.167-1.357-.071-.12-.26-.19-.546-.333z" />
          </svg>

          {/* Tooltip */}
          <span className="absolute bottom-16 right-0 bg-surface-container-high border border-outline-variant/30 text-on-surface text-caption font-label-md px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap shadow-md translate-y-2 group-hover:translate-y-0">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const settings = getSettings();
    applyThemeColor(settings.primaryColor);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </Router>
  );
}
