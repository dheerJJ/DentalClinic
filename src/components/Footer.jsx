import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-surface-container-low text-on-surface-variant border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="space-y-6">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/95 rounded-xl w-fit shadow-sm">
            <img alt="Shree Radhe Dental Hospital Logo" className="h-10 w-auto object-contain" src={logo} />
          </div>
          <div>
            <p className="font-bold text-on-surface text-sm">Dr. Rinku S. Kumawat</p>
            <p className="text-xs text-primary font-semibold">Gold Medalist | Dental Surgeon | BDS (MUHS Mumbai)</p>
            <p className="text-[11px] text-on-surface-variant/70 mt-0.5">Ex. CA Government Hospital • Reg. No.: A11108</p>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant/75 leading-relaxed">
            "स्वस्थ दांत, सुंदर मुस्कान — हमारी पहचान"<br />
            World-class dental treatments in a hygienic, modern environment.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/916378556857" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" title="WhatsApp">
              <span className="material-symbols-outlined">chat</span>
            </a>
            <a href="tel:+916378556857" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" title="Call Us">
              <span className="material-symbols-outlined">call</span>
            </a>
            <a href="mailto:srdhsmile@gmail.com" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300" title="Email Us">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-headline-md text-[18px] text-on-surface font-semibold">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/">Home</Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/services">Services</Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/booking">Book Online</Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/about">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-headline-md text-[18px] text-on-surface font-semibold">Key Treatments</h4>
          <ul className="space-y-3">
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/services">Root Canal (RCT)</Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/services">Dental Implants</Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/services">Braces &amp; Aligners</Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/services">Fixed Dentures (बत्तीसी)</Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/services">Digital X-Ray Care</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-headline-md text-[18px] text-on-surface font-semibold">Contact Us</h4>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant/80">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span>Shivdhara Hospital ke samne, Jaipur Road, Chomu</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">call</span>
              <a href="tel:+916378556857" className="hover:text-primary">+91 6378556857</a>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">mail</span>
              <a href="mailto:srdhsmile@gmail.com" className="hover:text-primary">srdhsmile@gmail.com</a>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span>Mon - Sun: 8:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop mt-12 pt-8 border-t border-outline-variant/10 text-center text-caption text-on-surface-variant/60">
        &copy; {new Date().getFullYear()} Shree Radhe Dental Hospital. All rights reserved.
      </div>
    </footer>
  );
}
