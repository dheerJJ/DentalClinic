import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import drRinku from '../assets/Dr-RINKU-S-KUMAWAT.png';
import drRinkuConvocation from '../assets/dr_rinku_convocation_award.jpg';
import clinicOperatory from '../assets/clinic_operatory_chairs.png';
import clinicReceptionDesk from '../assets/clinic_reception_desk.png';
import clinicReceptionWall from '../assets/clinic_reception_wall.png';
import clinicFrontDoor from '../assets/clinic_front_door.png';
import clinicBuildingExterior from '../assets/clinic_building_exterior.png';

export default function About() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    document.title = 'About Us | Shree Radhe Dental Hospital';
  }, []);

  return (
    <div className="scroll-smooth bg-background text-on-background font-body-md">

      {/* ─── 1. HERO ─────────────────────────────────── */}
      <section
        className="relative w-full min-h-[480px] md:min-h-[600px] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDY5JfLMrMpy1D8rcODwctVGbrbAd2khaNeRr0xhgNDN8o5_x8K1ourVkhJNfE9dZkL1S-7QKvfTV30NMPVqYOkOgAc_OBu8lRhDH7SswtMTj9HFpRpEXmfR7Oo_KWd1ye_f9UDGCsMAVqbJLbKalrv1F8HueLrKx2kkv5Sm266GTI7U2um_7Jim88-KIKuGfYVHAg_BqYv88JV9Z-cock5166WkylkjzdT5v8_ABK8DiXTPWaT424niTu96xTIs6panjOKbZP3Zik')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        <div className="relative z-10 max-w-container-max mx-auto px-5 md:px-margin-desktop w-full py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide">
                REG. NO.: A11108
              </span>
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-on-background text-xs font-semibold">
                GOLD MEDALIST SURGEON
              </span>
            </div>
            <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl leading-tight text-on-background mb-6">
              Shree Radhe <span className="text-gradient-logo italic">Dental Hospital</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-on-background/80 mb-6 max-w-xl font-medium">
              "स्वस्थ दांत, सुंदर मुस्कान — हमारी पहचान"
            </p>
            <p className="text-sm md:text-base leading-relaxed text-on-surface-variant mb-8 max-w-xl">
              Headed by <strong>Dr. Rinku S. Kumawat</strong> (Gold Medalist, BDS MUHS), we provide compassionate, state-of-the-art dental care with painless techniques and digital precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="inline-block bg-primary text-on-primary px-8 py-4 rounded-xl text-sm font-semibold tracking-[0.05em] hover:bg-primary-container transition-all hover:shadow-lg"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="border border-outline text-on-background px-8 py-4 rounded-xl text-sm font-semibold tracking-[0.05em] bg-transparent hover:bg-surface-container-high transition-all"
              >
                View 13 Specialties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. LEAD SURGEON & STORY ────────────────────────────── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20 relative group">
                <img
                  src={drRinku}
                  alt="Dr. Rinku S. Kumawat"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">Lead Dental Surgeon</span>
                  <h3 className="text-xl font-bold">Dr. Rinku S. Kumawat</h3>
                  <p className="text-xs text-white/90">Gold Medalist | BDS | MUHS</p>
                </div>
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 p-5 md:p-6 bg-primary text-on-primary rounded-xl shadow-2xl">
                <p className="font-headline-md text-xl md:text-2xl font-bold leading-snug">🥇 Gold Medalist</p>
                <p className="text-xs leading-snug opacity-90">MUHS University</p>
              </div>
            </div>
            {/* text */}
            <div className="pt-6 lg:pt-0">
              <span className="text-xs font-bold tracking-wider text-primary uppercase mb-2 block">
                MEET OUR LEAD SURGEON
              </span>
              <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold leading-tight text-on-background mb-4">
                Dr. Rinku S. Kumawat
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">🥇 Gold Medalist</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-on-surface">Dental Surgeon</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-on-surface">BDS | MUHS</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-on-surface">Reg. No.: A11108</span>
              </div>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-on-surface-variant">
                <p>
                  <strong>Dr. Rinku S. Kumawat</strong> is a distinguished Dental Surgeon and Gold Medalist graduate from Maharashtra University of Health Sciences (MUHS). She brings immense clinical expertise and surgical precision to Shree Radhe Dental Hospital.
                </p>
                <p>
                  Under her leadership, Shree Radhe Dental Hospital has established itself as a premier multi-specialty dental clinic in Chomu, offering 13 comprehensive oral care services ranging from painless Root Canal Therapy (RCT) and titanium Dental Implants to Orthodontic Braces, Fixed Dentures, and Cosmetic Smile Designing.
                </p>
                <p>
                  Our clinic features state-of-the-art dual operatory dental suites equipped with ultra-low radiation Digital X-Rays, Sudershan air compressors, and strict autoclave sterilization standards.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <blockquote className="italic text-lg leading-relaxed text-on-background">
                  "आपकी मुस्कान ही हमारी पहचान है — Technology gives us precision, but empathy gives our patients comfort."
                </blockquote>
                <p className="mt-2 text-sm font-semibold tracking-[0.05em] text-primary">— Dr. RINKU S. KUMAWAT (Gold Medalist)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2.5 CONVOCATION & GOLD MEDAL DEGREE SPOTLIGHT ─────────────────── */}
      <section className="py-12 bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <div className="bg-surface-container p-6 md:p-10 rounded-3xl border border-outline-variant/20 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/10 text-amber-500 rounded-full text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                  Degree & Gold Medal Convocation
                </div>
                <h3 className="font-headline-lg text-2xl md:text-3xl font-semibold text-on-background">
                  Academic Excellence & Convocation Ceremony
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-on-surface-variant">
                  Official convocation ceremony image showing <strong>Dr. Rinku S. Kumawat</strong> receiving her degree certificate and Academic Gold Medal honor for highest scholastic achievement at Maharashtra University of Health Sciences (MUHS).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-surface-container-high border border-outline-variant/10">
                    <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Degree Awarded</p>
                    <p className="text-sm font-semibold text-on-surface">Bachelor of Dental Surgery (BDS)</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-surface-container-high border border-outline-variant/10">
                    <p className="text-xs text-amber-500 font-bold uppercase tracking-wider mb-1">Honor Distinction</p>
                    <p className="text-sm font-semibold text-on-surface">Gold Medalist & Academic Excellence</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => setIsImageOpen(true)}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30 aspect-[4/3] md:aspect-[16/11] relative">
                  <img
                    src={drRinkuConvocation}
                    alt="Dr. Rinku S. Kumawat receiving Convocation Degree & Gold Medal Award"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-amber-300">Convocation Ceremony Photo</span>
                      <span className="text-xs bg-primary/80 px-2.5 py-1 rounded-full flex items-center gap-1 font-medium">
                        <span className="material-symbols-outlined text-sm">zoom_in</span> View Full Image
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. VALUES ─────────────────────────────── */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold tracking-tight text-on-background mb-4">
              Values That Drive Us
            </h2>
            <p className="text-base leading-relaxed text-on-surface-variant max-w-[480px] mx-auto">
              Beyond the drills and fillings, our core values guide every interaction we have with our patients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'biotech', title: 'Unmatched Precision', desc: 'Utilizing digital workflows and microscope-enhanced procedures to ensure every restoration is perfect to the millimeter.' },
              { icon: 'favorite', title: 'Empathetic Care', desc: 'We treat people, not just teeth. Our comfort-focused approach includes warm blankets, noise-canceling headphones, and personalized pacing.' },
              { icon: 'lightbulb', title: 'Constant Innovation', desc: 'Our team attends monthly advanced training seminars to stay at the leading edge of global dental methodologies.' },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-surface-container rounded-3xl shadow-[0_20px_24px_-4px_rgba(0,0,0,0.2)] border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <h3 className="font-headline-md text-xl font-medium text-on-surface mb-3">{item.title}</h3>
                <p className="text-base leading-relaxed text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEET OUR TEAM (Commented Out) ───
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
            <div>
              <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold tracking-tight text-on-background mb-2">Our Elite Medical Team</h2>
              <p className="text-base leading-relaxed text-on-surface-variant">Expertise you can trust, personalities you'll love.</p>
            </div>
            <Link to="/services" className="text-primary text-sm font-semibold tracking-[0.05em] flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
              View All Staff <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: drPriyaSharma, alt: 'Dr. Priya Sharma', name: 'Dr. Priya Sharma', role: 'Chief Administrator', desc: 'BDS, AIIMS Delhi. 20+ years of clinical leadership in restorative dentistry.' },
              { src: drArjunMehta, alt: 'Dr. Arjun Mehta', name: 'Dr. Arjun Mehta', role: 'Orthodontist', desc: 'MDS Orthodontics, KEM Mumbai. Specialist in invisible aligners & braces.' },
              { src: drRajeshIyer, alt: 'Dr. Rajesh Iyer', name: 'Dr. Rajesh Iyer', role: 'Cosmetic Dentist', desc: 'MDS Prosthodontics, Manipal. Master of Aesthetic & Smile Reconstruction.' },
            ].map((doc) => (
              <div key={doc.name} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative">
                  <img
                    src={doc.src}
                    alt={doc.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-surface/70 backdrop-blur-md border border-outline-variant/20 p-4 rounded-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-semibold tracking-[0.05em] text-primary">{doc.role}</p>
                  </div>
                </div>
                <h3 className="font-headline-md text-xl font-medium text-on-background mb-1">{doc.name}</h3>
                <p className="text-base leading-relaxed text-on-surface-variant">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* ─── 5. FACILITIES ─────────────────────────── */}
      <section className="py-16 md:py-20 bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* text */}
            <div>
              <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold tracking-tight text-on-background mb-6">
                Advanced Care in a<br />Restorative Environment
              </h2>
              <p className="text-base leading-relaxed text-on-surface-variant mb-8">
                We've designed our clinic to feel less like a hospital and more like a sanctuary. From ergonomic dental chairs to HEPA-grade air filtration, every detail is optimized for your safety and serenity.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  { icon: 'check_circle', title: 'Low-Radiation Digital X-Rays', desc: '90% less radiation than traditional films.' },
                  { icon: 'check_circle', title: 'Intraoral Cameras', desc: 'See what the dentist sees in real-time high definition.' },
                  { icon: 'check_circle', title: 'In-Office 3D Printing', desc: 'Same-day surgical guides and temporaries.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold tracking-[0.05em] text-on-background mb-1">{item.title}</h4>
                      <p className="text-xs leading-snug text-on-surface-variant">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* mosaic images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-md border border-outline-variant/10 group relative">
                  <img
                    src={clinicOperatory}
                    alt="Shree Radhe Dual Dental Chair Setup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 text-white">
                    <p className="text-xs font-bold">Dual Dental Operatory Suite</p>
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden aspect-square shadow-md border border-outline-variant/10 group relative">
                  <img
                    src={clinicReceptionDesk}
                    alt="Shree Radhe Reception Desk"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 text-white">
                    <p className="text-xs font-bold">Reception & UPI Desk</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-3xl overflow-hidden aspect-[4/6] shadow-md border border-outline-variant/10 group relative">
                  <img
                    src={clinicReceptionWall}
                    alt="Dr. Rinku Kumawat Gold Medal Wall"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                    <p className="text-xs font-bold text-primary">Gold Medal Honors Wall</p>
                    <p className="text-[11px] text-white/90">MUHS Mumbai Convocation & Patient Gallery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. CERTIFICATIONS & AWARDS ────────────── */}
      <section className="py-16 md:py-20 bg-background border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">Recognized Excellence</h2>
            <p className="text-base leading-relaxed text-on-surface-variant">Proud members of world-renowned dental associations.</p>
          </div>
          <div
            className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            {[
              { icon: 'verified_user', label: 'ADA Member' },
              { icon: 'military_tech', label: 'Best Clinic 2023' },
              { icon: 'workspace_premium', label: 'ISO 9001 Certified' },
              { icon: 'award_star', label: 'AAACD Accredited' },
              { icon: 'health_and_safety', label: 'Safety Gold Standard' },
            ].map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-5xl text-on-surface-variant">{badge.icon}</span>
                <span className="text-sm font-semibold tracking-[0.05em] text-on-surface">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────── */}
      <section className="relative overflow-hidden py-16 md:py-20 px-5 md:px-16 text-center border-t border-outline-variant/20 bg-gradient-to-r from-primary-container/20 via-surface-container-high to-primary-container/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold text-on-background mb-6">
            Ready to Experience a Healthier Smile?
          </h2>
          <Link
            to="/booking"
            className="inline-block bg-primary text-on-primary px-10 py-4 rounded-xl text-sm font-semibold tracking-[0.05em] hover:bg-primary-container hover:shadow-lg transition-all"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
      {/* ─── IMAGE LIGHTBOX MODAL ────────────────────── */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute -top-12 right-0 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors flex items-center justify-center"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <img
              src={drRinkuConvocation}
              alt="Dr. Rinku S. Kumawat Convocation Award Ceremony"
              className="max-h-[80vh] w-auto object-contain rounded-2xl border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-center text-white/90 font-medium text-sm">
              Dr. Rinku S. Kumawat — Convocation & Academic Gold Medal Award Ceremony (BDS, MUHS Mumbai)
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
