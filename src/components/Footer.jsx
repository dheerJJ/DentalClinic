import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-surface-container-low text-on-surface-variant border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img alt="Shree Radhe Dental Hospital Logo" className="h-10 w-auto" src={logo} />
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant/75 leading-relaxed">
            World-class dental treatments in a calming environment. Modern technology meets compassionate care for your entire family.
          </p>
          <div className="flex gap-4">
            <a href="/" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="/" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined">chat</span>
            </a>
            <a href="/" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined">thumb_up</span>
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
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/profile">My Profile</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-headline-md text-[18px] text-on-surface font-semibold">Dental Services</h4>
          <ul className="space-y-3">
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/services">Teeth Cleaning</Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/services">Root Canal</Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/services">Dental Implants</Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/services">Braces &amp; Aligners</Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md hover:text-primary transition-colors" to="/services">Teeth Whitening</Link>
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
              <span>+91-6378556857</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span> srdhsmile@gmail.com</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
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
