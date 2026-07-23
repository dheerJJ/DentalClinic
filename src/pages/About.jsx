import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import drPriyaSharma from '../assets/dr_priya_sharma.png';
import drArjunMehta from '../assets/dr_arjun_mehta.png';
import drRajeshIyer from '../assets/dr_rajesh_iyer.png';
import drRinku from '../assets/Dr-RINKU-S-KUMAWAT.png';

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Shree Radhe Dental Hospital';
  }, []);

  return (
    <div className="scroll-smooth bg-background text-on-background font-body-md">

      {/* ─── 1. HERO ─────────────────────────────────── */}
      <section
        className="relative w-full min-h-[480px] md:min-h-[600px] lg:min-h-[716px] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDY5JfLMrMpy1D8rcODwctVGbrbAd2khaNeRr0xhgNDN8o5_x8K1ourVkhJNfE9dZkL1S-7QKvfTV30NMPVqYOkOgAc_OBu8lRhDH7SswtMTj9HFpRpEXmfR7Oo_KWd1ye_f9UDGCsMAVqbJLbKalrv1F8HueLrKx2kkv5Sm266GTI7U2um_7Jim88-KIKuGfYVHAg_BqYv88JV9Z-cock5166WkylkjzdT5v8_ABK8DiXTPWaT424niTu96xTIs6panjOKbZP3Zik')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="relative z-10 max-w-container-max mx-auto px-5 md:px-margin-desktop w-full py-16 md:py-24">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-[0.05em] mb-6">
              ESTABLISHED IN 2008
            </span>
            <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl leading-tight text-on-background mb-6">
              Compassionate Care Meets{' '}
              <span className="text-primary italic">Clinical Excellence.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-on-background/80 mb-8 max-w-[480px]">
              We believe a visit to the dentist should be a highlight of your day. Our mission is to combine the latest dental technology with a gentle, patient-first approach.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-block bg-primary text-on-primary px-8 py-4 rounded-xl text-sm font-semibold tracking-[0.05em] hover:bg-primary-container transition-all hover:shadow-lg"
              >
                Our Services
              </Link>
              <button className="border border-outline text-on-background px-8 py-4 rounded-xl text-sm font-semibold tracking-[0.05em] bg-transparent hover:bg-surface-container-high transition-all">
                Tour The Clinic
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. OUR STORY ────────────────────────────── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20">
                <img
                  src={drRinku}
                  alt="Shree Radhe founders"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 p-5 md:p-6 bg-primary text-on-primary rounded-xl shadow-2xl">
                <p className="font-headline-md text-xl md:text-2xl font-medium leading-snug">15+</p>
                <p className="text-xs leading-snug opacity-90">Years of Community Trust</p>
              </div>
            </div>
            {/* text */}
            <div className="pt-6 lg:pt-0">
              <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold leading-tight text-on-background mb-6">
                Our Journey Towards Modern Dentistry
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-on-surface-variant">
                <p>Founded on the principle that oral health is the gateway to overall wellness, Shree Radhe Dental Hospital began as a small family practice with a big vision. We wanted to redefine the dental experience, removing the anxiety traditionally associated with the dentist's chair.</p>
                <p>Over the past decade, we have grown into a multi-specialty center, investing in 3D imaging, laser dentistry, and digital impressions to ensure our patients receive the most precise care available today.</p>
                <p>Today, our commitment remains unchanged: providing a sanctuary where modern science meets human touch.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <blockquote className="italic text-lg leading-relaxed text-on-background">
                  "Technology gives us the tools, but empathy gives us the results."
                </blockquote>
                <p className="mt-2 text-sm font-semibold tracking-[0.05em] text-primary">— Dr. RINKU S. KUMAWAT</p>
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
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-md border border-outline-variant/10">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKje4rIE5gV1DSchBaraLBnx_vdq4qQHEvF1H0jqD0JLSRWA-wUbayst7wTI2aWcCYw3u1kLJkaVUWV7ooPYcLjlQI4g3MI9bpBHn33sCIJEarMN10cybdqyxwM0GRfVN1-t5NZe-SgtFTLwNuWDbC3G2gRVIiQWIK5pED2oGFfZLi2tw6_0PTfBgSlXvvt2tP3Qw2PTBSrfGH9R0WJcxZAInlTJCCvCy4bU2utLP3Rx8YsDuR1NdN8VEtc-8c1YofnhfnhfTCphw"
                    alt="Dental treatment room"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-square shadow-md border border-outline-variant/10">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnEwzEe9ECR0nWa3MeYvZHboWSatvZtRaP5KuwR8T4xZs4FVJRNvuASNBnuykbQJn_toi_yp8g_jOpXwUj7rcgrXkkRmxZZ8Z9__pfIjAUvS2RzN5zoIrmRK3GKtLFoFUYovFbTRp8UbVRGDhaKhPGvK1YfHyUO8jSCRXAnKIaKx_J5tacpHi0LiY_1-OKFryCvOvNLctmCj-km2Lcyo7RzZHW7jl721aRmEMU8Jo38t4VdDaFjtwLt_1G9BSzs3Z90Jz52d6OZ5A"
                    alt="Dental instruments"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-3xl overflow-hidden aspect-[4/6] shadow-md border border-outline-variant/10">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClxMTy-GsOzbxGRzOwXAixOlsPWkJBpJYnkvoMuoc1UFcsT-DeSDmdbo2SYaiz8KE8kcm57z4Df0b-m2Yw1n1iCQYhKrreQB-JbBlPwedY8TfTS8en-ybiu-I2oXIwEJUDZV2ES8w_kMGv-tucnX2pDA8jkiqulJH0pGRskWgXaMoJJg-QN_0P4nU8WfJxFIqjxLsVarSDKr3xk96DFIdVfl8-Jgbpz-Z6LSwNF3yFLcsxCKGoF0AuvTTHgo6Pqt4IEoFsN-KzWQ8"
                    alt="Clinic lobby"
                    className="w-full h-full object-cover"
                  />
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
    </div>
  );
}
