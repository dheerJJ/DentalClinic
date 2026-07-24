import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import drRinku from '../assets/Dr-RINKU-S-KUMAWAT.png';
import drRajesh from '../assets/dr_rajesh_iyer.png';
import carouselXray from '../assets/carousel_xray.png';
import carouselTreatment from '../assets/carousel_treatment.png';
import carouselAligner from '../assets/carousel_aligner.png';
import carouselCleaning from '../assets/carousel_cleaning.jpg';

import hero3dScanner from '../assets/hero_3d_scanner.png';
import heroTeethCleaning from '../assets/hero_teeth_cleaning.png';
import heroDigitalAligners from '../assets/hero_digital_aligners.png';
import heroClinicInterior from '../assets/hero_clinic_interior.png';
import heroEndoTreatment from '../assets/hero_endo_treatment.jpg';

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let timer = null;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const end = parseInt(target, 10);
          const duration = 2000;
          const step = end > 100 ? Math.ceil(end / 100) : 1;

          timer = setInterval(() => {
            setCount((prev) => {
              if (prev + step >= end) {
                clearInterval(timer);
                return end;
              }
              return prev + step;
            });
          }, 16);

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [target]);

  return (
    <div ref={elementRef} className="font-headline-xl text-headline-xl text-primary mb-2 text-glow">
      {count.toLocaleString()}{parseInt(target, 10) >= 100 ? '+' : ''}
    </div>
  );
}

function RevealOnScroll({ children, delayClass = '' }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={`reveal ${delayClass}`}>
      {children}
    </div>
  );
}

const slides = [
  {
    image: hero3dScanner,
    tag: "GUMANMAL JI'S",
    title: "Shree Radhe",
    titlePrimary: "Dental Hospital",
    description: "Creating Beautiful Smiles Everyday! Experience world-class 3D intraoral scanning and advanced digital dentistry with compassionate care.",
    primaryBtn: { text: "Book Appointment", to: "/booking" },
    secondaryBtn: { text: "Call Now", href: "tel:+916378556857", isPhone: true },
  },
  {
    image: heroTeethCleaning,
    tag: "GENTLE CARE",
    title: "Comfortable & Painless",
    titlePrimary: "Teeth Cleaning",
    description: "Enjoy a refreshing, high-gloss clean and preventative oral hygiene checkup with gentle, expert care in a calming environment.",
    primaryBtn: { text: "Book Appointment", to: "/booking" },
    secondaryBtn: { text: "Our Services", to: "/services" },
  },
  {
    image: heroDigitalAligners,
    tag: "ADVANCED ORTHODONTICS",
    title: "3D Digital Clear",
    titlePrimary: "Invisible Aligners",
    description: "Transform your smile with computer-designed 3D invisible aligners. Straighten your teeth discreetly, comfortably, and efficiently.",
    primaryBtn: { text: "Book Appointment", to: "/booking" },
    secondaryBtn: { text: "Explore Aligners", to: "/services" },
  },
  {
    image: heroClinicInterior,
    tag: "WORLD-CLASS INFRASTRUCTURE",
    title: "State-of-the-Art",
    titlePrimary: "Modern Clinic Facility",
    description: "Step into our ultra-hygienic, fully equipped modern dental suites designed for maximum safety, relaxation, and patient comfort.",
    primaryBtn: { text: "About Us", to: "/about" },
    secondaryBtn: { text: "Book Appointment", to: "/booking" },
  },
  {
    image: heroEndoTreatment,
    tag: "MICROSCOPIC ENDODONTICS",
    title: "Precision Microscopic",
    titlePrimary: "Root Canal Therapy",
    description: "Save natural teeth with advanced digital endodontic tools, rubber-dam isolation, and painless microscopic precision treatments.",
    primaryBtn: { text: "Book Appointment", to: "/booking" },
    secondaryBtn: { text: "View Services", to: "/services" },
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  useEffect(() => {
    document.title = 'Shree Radhe Dental Hospital | Creating Beautiful Smiles Everyday!';
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          return 0;
        }
        return prev + 1;
      });
    }, 60); // 60ms * 100 steps = 6000ms (6 seconds)

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div className="bg-background text-on-background select-none overflow-x-hidden">
      {/* Hero Section */}
      <header
        className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-background group/hero"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
            >
              {/* Background Image with Ken Burns */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${isActive ? 'scale-105 animate-kenburns' : 'scale-100'
                    }`}
                />
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent md:block hidden z-10" />
                <div className="absolute inset-0 bg-background/80 md:hidden block z-10" />
              </div>

              {/* Slide Content Overlay */}
              <div className="relative z-20 max-w-container-max mx-auto px-5 md:px-margin-desktop w-full h-full flex items-center">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <span
                    className={`inline-block px-4 py-1.5 bg-primary-fixed text-on-primary-fixed rounded-full font-label-md text-label-md mb-6 shadow-sm transform transition-all duration-700 delay-100 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}
                  >
                    {slide.tag}
                  </span>

                  {/* Title */}
                  <h1
                    className={`font-headline-xl text-3xl md:text-6xl text-on-background leading-tight mb-4 transform transition-all duration-700 delay-200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}
                  >
                    {slide.title} <span className="text-gradient-logo italic">{slide.titlePrimary}</span>
                  </h1>

                  {/* Description */}
                  <p
                    className={`font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg transform transition-all duration-700 delay-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}
                  >
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div
                    className={`flex flex-wrap gap-4 transform transition-all duration-700 delay-400 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}
                  >
                    {/* Primary button */}
                    {slide.primaryBtn.to ? (
                      <Link
                        to={slide.primaryBtn.to}
                        className="bg-primary text-on-primary px-8 py-4 rounded-medical font-label-md text-label-md hover:bg-primary-container hover:shadow-lg transition-all duration-300 transform active:scale-95"
                      >
                        {slide.primaryBtn.text}
                      </Link>
                    ) : (
                      <a
                        href={slide.primaryBtn.href}
                        className="bg-primary text-on-primary px-8 py-4 rounded-medical font-label-md text-label-md hover:bg-primary-container hover:shadow-lg transition-all duration-300 transform active:scale-95"
                      >
                        {slide.primaryBtn.text}
                      </a>
                    )}

                    {/* Secondary button */}
                    {slide.secondaryBtn.to ? (
                      <Link
                        to={slide.secondaryBtn.to}
                        className="border-2 border-primary text-primary px-8 py-4 rounded-medical font-label-md text-label-md hover:bg-primary-fixed/20 transition-all duration-300 transform active:scale-95"
                      >
                        {slide.secondaryBtn.text}
                      </Link>
                    ) : (
                      <a
                        href={slide.secondaryBtn.href}
                        className="border-2 border-primary text-primary px-8 py-4 rounded-medical font-label-md text-label-md hover:bg-primary-fixed/20 transition-all duration-300 flex items-center gap-2 transform active:scale-95"
                      >
                        {slide.secondaryBtn.isPhone && (
                          <span className="material-symbols-outlined">call</span>
                        )}
                        {slide.secondaryBtn.text}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Progress bar at the bottom of the hero */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-variant/20 z-30">
          <div
            className="h-full bg-primary transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-primary/20 bg-background/40 hover:bg-background/80 hover:border-primary text-primary flex items-center justify-center backdrop-blur-md opacity-0 group-hover/hero:opacity-100 transition-all duration-300 cursor-pointer shadow-lg"
          aria-label="Previous slide"
        >
          <span className="material-symbols-outlined text-[28px]">chevron_left</span>
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-primary/20 bg-background/40 hover:bg-background/80 hover:border-primary text-primary flex items-center justify-center backdrop-blur-md opacity-0 group-hover/hero:opacity-100 transition-all duration-300 cursor-pointer shadow-lg"
          aria-label="Next slide"
        >
          <span className="material-symbols-outlined text-[28px]">chevron_right</span>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {slides.map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setProgress(0);
                }}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${isActive ? 'w-8 bg-primary shadow-[0_0_10px_rgba(204,168,46,0.5)]' : 'w-2.5 bg-on-surface-variant/40 hover:bg-on-surface-variant'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </header>

      {/* Statistics Section */}
      <section className="py-section-gap bg-background border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="text-center p-10 bg-surface-container rounded-card shadow-lg border border-outline-variant/20">
                <Counter target="15000" />
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Happy Patients</p>
              </div>
              <div className="text-center p-10 bg-surface-container rounded-card shadow-lg border border-outline-variant/20">
                <Counter target="10" />
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="text-center p-10 bg-surface-container rounded-card shadow-lg border border-outline-variant/20">
                <Counter target="30000" />
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Treatments Done</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section-gap bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Comprehensive Dental Solutions</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                From routine checkups to complex aesthetic restorations, we provide a full range of services using the latest medical technology.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayClass="delay-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {/* Service 1 */}
              <div className="group bg-surface-container p-8 rounded-card border border-outline-variant/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-primary/10 rounded-medical flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[32px]">health_and_safety</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Teeth Cleaning</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Professional scaling and polishing to keep your gums healthy and your smile bright.</p>
                <Link to="/services" className="text-primary font-label-md text-label-md flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              {/* Service 2 */}
              <div className="group bg-surface-container p-8 rounded-card border border-outline-variant/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-primary/10 rounded-medical flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[32px]">biotech</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Root Canal</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Painless endodontic therapy to save natural teeth and relieve intense pain.</p>
                <Link to="/services" className="text-primary font-label-md text-label-md flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              {/* Service 3 */}
              <div className="group bg-surface-container p-8 rounded-card border border-outline-variant/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-primary/10 rounded-medical flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[32px]">dentistry</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Dental Implants</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Permanent, natural-looking tooth replacements that restore full functionality.</p>
                <Link to="/services" className="text-primary font-label-md text-label-md flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              {/* Service 4 */}
              <div className="group bg-surface-container p-8 rounded-card border border-outline-variant/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-primary/10 rounded-medical flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[32px]">orthopedics</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Braces &amp; Aligners</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Traditional and invisible options to straighten teeth and improve jaw alignment.</p>
                <Link to="/services" className="text-primary font-label-md text-label-md flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              {/* Service 5 */}
              <div className="group bg-surface-container p-8 rounded-card border border-outline-variant/20 hover:border-primary/40 hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-primary/10 rounded-medical flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[32px]">auto_awesome</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Teeth Whitening</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Advanced laser whitening procedures for immediate, long-lasting brightness.</p>
                <Link to="/services" className="text-primary font-label-md text-label-md flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              {/* More Services CTA */}
              <Link
                to="/services"
                className="bg-primary flex flex-col items-center justify-center p-8 rounded-card text-center text-on-primary hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 active:scale-98"
              >
                <h3 className="font-headline-md text-headline-md mb-2 text-on-primary">And much more...</h3>
                <p className="font-body-md text-body-md opacity-80 mb-6 text-on-primary">Explore our full range of 20+ specialized dental treatments.</p>
                <span className="material-symbols-outlined text-[48px] text-on-primary">clinical_notes</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section-gap bg-background overflow-hidden">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <RevealOnScroll>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Why Shree Radhe is the Preferred Choice</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-10">We believe in a patient-first approach, combining clinical excellence with an environment that makes you feel at home.</p>
                <div className="space-y-6">
                  <div className="flex gap-6 p-6 rounded-card bg-surface-container border border-outline-variant/20 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined">groups</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface mb-1">Experienced Dentists</h4>
                      <p className="font-caption text-caption text-on-surface-variant">Our team has over 20 years of combined clinical experience.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 p-6 rounded-card bg-surface-container border border-outline-variant/20 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined">precision_manufacturing</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface mb-1">Modern Equipment</h4>
                      <p className="font-caption text-caption text-on-surface-variant">We use 3D imaging and laser technology for painless procedures.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 p-6 rounded-card bg-surface-container border border-outline-variant/20 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined">payments</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface-variant mb-1">Affordable Care</h4>
                      <p className="font-caption text-caption text-on-surface-variant">Flexible payment plans and insurance support for all patients.</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:w-1/2 relative">
              <RevealOnScroll delayClass="delay-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                    <div className="rounded-card overflow-hidden h-64 shadow-md border border-outline-variant/10">
                      <img
                        className="w-full h-full object-cover"
                        alt="High tech dental operatory"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi5TpYnRHDtYYGXAzLzPkumn5f1aHFY2ZKMESs7SZQNRdWfZkmr46qJTmnRXy9D2nUXROq-q6k3awMzobwCh0WJX434Q05-Nf7qiEmgMPKMCtC2lAxF13iaPIR4b8x3-ZoI7QoYlEwFlTxTGLvCDOIJ8hkVK0rXZk30-NyDC5HxPva70Sc95IhRbPHJMdJXymaHQtsEowuEveoRBBCCIHB3XeFBpeNxWfEszNKGagQP9if7gkvl8IElwkwaUL0i0jncpdHxm9eHhI"
                      />
                    </div>
                    <div className="bg-primary p-4 sm:p-8 rounded-card text-on-primary shadow-lg">
                      <p className="font-headline-md text-headline-md font-bold text-on-primary">24/7</p>
                      <p className="font-caption text-caption opacity-80 text-on-primary">Emergency Support</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-primary-container p-4 sm:p-8 rounded-card text-on-primary-container shadow-lg border border-primary/20">
                      <p className="font-headline-md text-headline-md font-bold text-on-primary-container">5.0</p>
                      <div className="flex flex-nowrap items-center gap-0.5 text-primary mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <span key={s} className="material-symbols-outlined text-xs sm:text-sm shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                            star
                          </span>
                        ))}
                      </div>
                      <p className="font-caption text-caption text-on-primary-container/85">Google Rating</p>
                    </div>
                    <div className="rounded-card overflow-hidden h-80 shadow-md border border-outline-variant/10">
                      <img
                        className="w-full h-full object-cover"
                        alt="Dental clinic waiting area"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuANaUx_Th12slr_fA9cdQ6Pleow6hfgjy9eKbTXR-V_nl_jdZK3eYrB3ofB1RzUXeIP83YxJUogIbIUFueFWnGniyXrtU9g3_Re7VaElH6aS_Maee1POyrPyi_EoVjjfhB_HNwSrRizVDFPtaNt5KCHncM88sv2DEjjmtnp9503cb0Pw0tkhWeGioSQxZQctIPQi8c0a0suqMJvMtop5vnNyxFATDb8dDCYF8TuIXnWcYXBB3GpjK-g8fbByX4Q-RLqZ5M2QhlYteo"
                      />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-section-gap bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">What Our Patients Say</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                Real stories from individuals who transformed their smiles and confidence with us.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayClass="delay-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Testimonial 1 */}
              <div className="bg-surface-container p-8 rounded-card shadow-sm border border-outline-variant/20">
                <div className="flex gap-1 text-primary mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md italic text-on-surface mb-8">
                  "I had a fear of dentists for years, but the team here made me feel so comfortable. The dental implant procedure was completely painless!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant/20">
                    <img
                      className="w-full h-full object-cover"
                      alt="Dr. Arjun Mehta"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCymrEGsuIedMH8cMcwi7GuD7Ghtr8Rr43usO3Hy-QYtJO8eshdhjBibYgkqkV5Dxjs2zReTrKcJevGOulW-hD67kYW3Ci3A4hQ-vJmvpqmZxe-OdnQr3SQRHFvsLnKgcaj0ukN2CkHfbExjsoUdaRJMdpn4rsYGYhyEDMr9H1guXf3eJRAtoFUUHdLM6SUqxVbdsSmSMYpJkrgyR1jfrlg0ysLL_wSKvAJdjsrlw0qj2DRA4xL7TB8IUsgtwYrsjtucy7rqMgZN2U"
                    />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Dr. Arjun Mehta</p>
                    <p className="font-caption text-caption text-on-surface-variant">Oral and Maxillofacial Surgeon</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-surface-container p-8 rounded-card shadow-sm border border-outline-variant/20">
                <div className="flex gap-1 text-primary mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md italic text-on-surface mb-8">
                  "Best cleaning experience ever. The hygienists are incredibly gentle and the technology they use is absolutely state-of-the-art."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant/20">
                    <img
                      className="w-full h-full object-cover"
                      alt="Dr. Priya Sharma"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ZZTNLYpa_wWrveZxcgqznw_dxqVSRcQz_mCb4MzvE4-55QgdFDbLcSuuxLSn5LhaRr5zBUd8A36IwJLi2zeVC9ixEOYWcDtOWeMPR8eo7gfyYhjQf7ZeSUdS5ioAwtN8W9oKDIuD7Iau9f7vQeK9aefLsxecfME2ExpTPJplqbjZTu_ROxbPs6t4wSWyofRzN72MmMzJXDupjGPhsn4DroaqmT0m6wk0HarpBs9bH2LWTMDIMQWOdip671NhHj3ubPK6EN_fpIk"
                    />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Dr. Priya Sharma</p>
                    <p className="font-caption text-caption text-on-surface-variant">Periodontists</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-surface-container p-8 rounded-card shadow-sm border border-outline-variant/20">
                <div className="flex gap-1 text-primary mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md italic text-on-surface mb-8">
                  "Shree Radhe fixed my alignment issues in just 6 months. I've never been more confident about my smile. Highly recommend to everyone!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant/20">
                    <img
                      className="w-full h-full object-cover"
                      alt="Dr. Rajesh Iyer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpT1UPWHO9BbQt3oTlkJWCTzyTZFgX5w37fj7g3AQK78XUg8NmvTq43YPb3WG-KZ-4cbxerA1IKi8fgS2kiMQQ6Jo_aDPdNo0a1QSkZz0CCqaSBqzt-PEO8BopKWc28GPNdVswD04JCbfaY0xCJ4FIeyndxPSXDszBMoB_4OCFDMeh9tVR-OmlDKI3-dlDLlSQbKOkIeqgahkt9ECnXNYl_RhVcgVn2kail7BvSp46iYlel4GGCOZQXuRT7c5Fmwx5DIX4f5fN_mI"
                    />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Dr. Rajesh Iyer</p>
                    <p className="font-caption text-caption text-on-surface-variant">Orthodontists</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Appointment CTA Banner */}
      <section className="py-section-gap bg-background">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <RevealOnScroll>
            <div className="relative rounded-[32px] overflow-hidden p-6 md:p-12 lg:p-20 flex flex-col items-center text-center shadow-xl border border-outline-variant/20">
              {/* Background Image with Blur */}
              <div className="absolute inset-0 -z-10">
                <img
                  className="w-full h-full object-cover"
                  alt="Luxury dental clinic reception area"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAypiH_fervE5f2WfYkaAuGptUC6-VwHFvCU1wK8QTAWi64_uwNamSXIDDBg7Yb4pPFWAmM1WmhhqyhmiiLu-jAJa9U_-texEiG4IEhrrBtQhCC9g06Msdiu_C8-Qx8CMhJzcQ3DN77puSdQdI-3ZOnwBF6HRL5hST6rij_fuztPk1bYcat8EljCFmCsJlMZ74tn0d4CREI7cCz0YCWk8WMnJ0e53S40wfdEy0teB7sKIajzqLoPODlVNf3hAaS_6QUnCRzwxC9DUs"
                />
                <div className="absolute inset-0 bg-background/80 mix-blend-multiply"></div>
              </div>
              <div className="relative z-10 glass-card p-6 md:p-10 lg:p-16 rounded-[24px] max-w-3xl">
                <h2 className="font-headline-lg text-xl md:text-3xl text-on-surface mb-6">Ready for Your Perfect Smile?</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                  Schedule your consultation today and take the first step towards a healthier, brighter smile. We are accepting new patients!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/booking"
                    className="bg-primary text-on-primary px-10 py-4 rounded-medical font-label-md text-label-md hover:bg-primary-container hover:shadow-xl transition-all transform active:scale-95"
                  >
                    Book Appointment Online
                  </Link>
                  <Link
                    to="/services"
                    className="bg-surface-container text-primary border border-primary/20 px-10 py-4 rounded-medical font-label-md text-label-md hover:bg-surface-container-high transition-all transform active:scale-95"
                  >
                    View Pricing Plans
                  </Link>
                </div>
                <div className="mt-8 flex items-center justify-center gap-2 text-on-surface-variant font-caption text-caption">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  Available: Mon - Fri, 8:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
