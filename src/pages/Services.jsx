import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SERVICES_DATA = [
  {
    title: 'Digital X-Ray Examination',
    hindiTitle: '1. डिजिटल X-Ray द्वारा दांतों की जांच',
    icon: 'radiology',
    description: 'High-precision, ultra low-radiation digital imaging to diagnose hidden cavities, root infections, and bone structure accurately.',
    features: ['90% lower radiation', 'Instant HD digital preview'],
  },
  {
    title: 'Fixed Teeth & Crowns',
    hindiTitle: '2. फिक्स दांत चिपकाना / फिक्स बत्तीसी',
    icon: 'crown',
    description: 'Permanent ceramic, zirconia, and metal-free crown & bridge restorations fixed securely for natural chewing and aesthetics.',
    features: ['High-grade Zirconia crowns', 'Natural tooth color match'],
  },
  {
    title: 'Painless Tooth Extraction',
    hindiTitle: '3. बिना दर्द के दांत निकालना',
    icon: 'healing',
    description: 'Gentle, pain-free tooth & wisdom tooth extraction using advanced local anesthesia and micro-surgical techniques.',
    features: ['Painless local anesthesia', 'Fast post-extraction healing'],
  },
  {
    title: 'Tooth-Colored Fillings',
    hindiTitle: '4. दांतों के रंग के मसाले भरना',
    icon: 'format_color_fill',
    description: 'Seamless composite restorations that match your natural tooth shade, restoring shape and preventing decay.',
    features: ['Biocompatible composite', 'Invisible natural shade'],
  },
  {
    title: 'Root Canal Treatment (RCT)',
    hindiTitle: '5. आर. सी. टी. (रूट केनाल उपचार)',
    icon: 'biotech',
    description: 'Advanced rotary and microscopic root canal therapy to save infected natural teeth completely painlessly.',
    features: ['Single-visit RCT option', 'Rubber dam isolation'],
  },
  {
    title: 'Pyorrhea & Gum Treatment',
    hindiTitle: '6. पायरिया / खून आना व मसूड़ों का इलाज',
    icon: 'health_and_safety',
    description: 'Comprehensive treatment for bleeding gums, pyorrhea, bad breath, and loose teeth through deep ultrasonic scaling & flap therapy.',
    features: ['Ultrasonic deep cleaning', 'Gum bleeding & bad breath care'],
  },
  {
    title: 'Orthodontic Braces & Aligners',
    hindiTitle: '7. टेड़े-मेड़े दांतों का इलाज (तार लगाना)',
    icon: 'grid_view',
    description: 'Correction of crooked, crowded, or gapped teeth using ceramic braces, metallic braces, and clear invisible aligners.',
    features: ['Ceramic & Metal Braces', 'Clear Invisible Aligners'],
  },
  {
    title: 'Teeth Scaling & Polishing',
    hindiTitle: '8. दांतों की सफाई (Scaling & Polishing)',
    icon: 'cleaning_services',
    description: 'Painless removal of hard tartar, stain marks, and plaque buildup followed by high-gloss dental polishing.',
    features: ['Stain & plaque removal', 'Polishing for sparkling smile'],
  },
  {
    title: 'Cosmetic & Smile Designing',
    hindiTitle: '9. कॉस्मेटिक एवं स्माइल डिजाइनिंग',
    icon: 'auto_fix_high',
    description: 'Custom aesthetic smile transformation using porcelain veneers, laser teeth whitening, and digital smile preview.',
    features: ['Laser teeth whitening', 'Porcelain veneers & alignment'],
  },
  {
    title: 'Full & Partial Dentures',
    hindiTitle: '10. बत्तीसी (फिक्स व रिमूवेबल)',
    icon: 'dentistry',
    description: 'Comfortable, lightweight full dentures and flexible partial dentures crafted for perfect fit and easy mastication.',
    features: ['Flexible dentures', 'Unbreakable full set battisi'],
  },
  {
    title: 'Dental Implants',
    hindiTitle: '11. इंप्लांट द्वारा दांत लगाना',
    icon: 'rebase_edit',
    description: 'Permanent titanium implant placement to replace single or multiple missing teeth with life-long stability.',
    features: ['Lifetime durable implants', 'Natural look & full strength'],
  },
  {
    title: 'Mouth Ulcer & Lesion Care',
    hindiTitle: '12. मुंह के छाले, घाव का विशेष इलाज',
    icon: 'medication',
    description: 'Specialized diagnosis and medicinal/laser therapy for chronic mouth ulcers, burning mouth syndrome, and oral lesions.',
    features: ['Rapid ulcer pain relief', 'Pre-cancerous screening'],
  },
  {
    title: 'Pediatric Dentistry',
    hindiTitle: '13. बच्चों के दांतों का इलाज',
    icon: 'child_care',
    description: 'Child-friendly dental care including preventive fluoride application, cavity fillings, and space maintainers.',
    features: ['Child-friendly approach', 'Cavity prevention & fluoride'],
  },
];

export default function Services() {
  useEffect(() => {
    document.title = 'Our Services | Shree Radhe Dental Hospital';
  }, []);
  return (
    <div className="bg-background text-on-background font-body-md">
      {/* Hero / Header Section */}
      <header className="pt-16 pb-12 bg-surface-container-low border-b border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <nav aria-label="Breadcrumb" className="flex mb-6 text-on-surface-variant opacity-70">
            <ol className="flex items-center space-x-2 font-caption text-caption">
              <li>
                <Link className="hover:text-primary transition-colors" to="/">Home</Link>
              </li>
              <li>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </li>
              <li className="font-semibold text-primary">Services</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide mb-3">
              उपलब्ध सुविधाएं • OUR SPECIALTIES
            </span>
            <h1 className="font-headline-xl text-2xl md:text-headline-xl text-on-surface mb-4">
              Comprehensive <span className="text-gradient-logo">Dental Treatments</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Under the expert leadership of <strong>Dr. Rinku S. Kumawat</strong> (Gold Medalist, BDS MUHS Mumbai, Ex. CA Govt Hospital), Shree Radhe Dental Hospital provides all 13 core dental treatments with modern digital technology and complete hygiene.
            </p>
          </div>
        </div>
      </header>

      {/* Services Grid Canvas */}
      <main className="py-section-gap">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {SERVICES_DATA.map((service, idx) => (
              <article
                key={idx}
                className="service-card group bg-surface-container-lowest p-8 rounded-[24px] border border-outline-variant/30 shadow-[0px_20px_24px_-4px_rgba(19,27,46,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[32px]">{service.icon}</span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-surface-container rounded-full text-on-surface-variant">
                      #0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-primary mb-1">{service.hindiTitle}</p>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3">{service.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                  <a
                    href="tel:+916378556857"
                    className="inline-flex items-center gap-1 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">call</span> +91 6378556857
                  </a>
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-1 font-label-md text-xs font-bold text-primary hover:underline bg-primary/10 px-3 py-1.5 rounded-lg"
                  >
                    Book Treatment <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
