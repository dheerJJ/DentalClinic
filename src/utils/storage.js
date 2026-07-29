// Local Storage Manager for SmileCare Clinic

const DEFAULT_SETTINGS = {
  clinicName: 'Shree Radhe Dental Hospital',
  hindiName: 'श्री राधे डेंटल हॉस्पिटल',
  tagline: 'स्वस्थ दांत, सुंदर मुस्कान — हमारी पहचान',
  doctorName: 'Dr. Rinku S. Kumawat',
  qualifications: 'Dental Surgeon | Ex. CA Government Hospital',
  regNo: 'A11108',
  contactEmail: 'srdhsmile@gmail.com',
  contactPhone: '+91-6378556857',
  address: 'Shivdhara Hospital ke samne, Jaipur Road, Chomu',
  hours: 'Mon - Sun: 9:00 AM - 7:00 PM',
  primaryColor: 'teal', // Options: 'teal', 'navy', 'indigo', 'emerald', 'rose'
};

const DEFAULT_SERVICES = {
  digital_xray: { id: 'digital_xray', title: 'Digital X-Ray Examination', hindiTitle: 'डिजिटल X-Ray जांच', cost: '₹200', duration: '15 mins', priceVal: 200 },
  rct: { id: 'rct', title: 'Root Canal Treatment (RCT)', hindiTitle: 'रूट केनाल उपचार (RCT)', cost: '₹2,500', duration: '45 mins', priceVal: 2500 },
  implants: { id: 'implants', title: 'Dental Implants', hindiTitle: 'इंप्लांट द्वारा दांत लगाना', cost: '₹15,000', duration: '90 mins', priceVal: 15000 },
  braces: { id: 'braces', title: 'Braces & Aligners', hindiTitle: 'टेढ़े-मेढ़े दांतों का इलाज (तार लगाना)', cost: '₹12,000', duration: '60 mins', priceVal: 12000 },
  fixed_dentures: { id: 'fixed_dentures', title: 'Fixed Teeth & Crowns', hindiTitle: 'फिक्स दांत चिपकाना / फिक्स बत्तीसी', cost: '₹3,000', duration: '45 mins', priceVal: 3000 },
  cleaning: { id: 'cleaning', title: 'Teeth Scaling & Polishing', hindiTitle: 'दांतों की सफाई', cost: '₹500', duration: '30 mins', priceVal: 500 },
  whitening: { id: 'whitening', title: 'Cosmetic & Smile Designing', hindiTitle: 'कॉस्मेटिक एवं स्माइल डिजाइनिंग', cost: '₹2,500', duration: '60 mins', priceVal: 2500 },
  extraction: { id: 'extraction', title: 'Painless Tooth Extraction', hindiTitle: 'बिना दर्द के दांत निकालना', cost: '₹500', duration: '30 mins', priceVal: 500 },
  filling: { id: 'filling', title: 'Tooth-Colored Restoration', hindiTitle: 'दांतों के रंग के मसाले भरना', cost: '₹600', duration: '30 mins', priceVal: 600 },
  pyorrhea: { id: 'pyorrhea', title: 'Pyorrhea & Gum Treatment', hindiTitle: 'पायरिया / खून आना व मसूड़ों का इलाज', cost: '₹1,000', duration: '45 mins', priceVal: 1000 },
  full_dentures: { id: 'full_dentures', title: 'Full & Partial Dentures', hindiTitle: 'बत्तीसी (फिक्स व रिमूवेबल)', cost: '₹8,000', duration: '60 mins', priceVal: 8000 },
  mouth_ulcer: { id: 'mouth_ulcer', title: 'Mouth Ulcer & Lesion Care', hindiTitle: 'मुंह के छाले व घाव का विशेष इलाज', cost: '₹400', duration: '20 mins', priceVal: 400 },
  pediatric: { id: 'pediatric', title: 'Pediatric Dentistry', hindiTitle: 'बच्चों के दांतों का इलाज', cost: '₹500', duration: '30 mins', priceVal: 500 },
};

const DEFAULT_APPOINTMENTS = [
  { id: 'apt-1', name: 'Robert Miller', phone: '+91 (555) 019-2834', email: 'robert.m@example.com', service: 'whitening', date: 'Oct 9', time: '10:30 AM', status: 'Confirmed', notes: 'Prefers warm water rinse.' },
  { id: 'apt-2', name: 'Alice Sterling', phone: '+91 (555) 014-9821', email: 'alice.s@example.com', service: 'checkup', date: 'Oct 9', time: '01:15 PM', status: 'Pending', notes: 'First appointment at clinic.' },
  { id: 'apt-3', name: 'John Doe', phone: '+91 (555) 012-3456', email: 'john@example.com', service: 'checkup', date: 'Oct 8', time: '09:00 AM', status: 'Completed', notes: 'Routine checkup completed successfully.' },
  { id: 'apt-4', name: 'Linda Wright', phone: '+91 (555) 015-7729', email: 'linda.w@example.com', service: 'implants', date: 'Oct 10', time: '04:45 PM', status: 'Confirmed', notes: 'Follow-up for implant integration check.' },
];

const DEFAULT_PATIENTS = [
  { id: 'pat-1', name: 'Robert Miller', phone: '+91 (555) 019-2834', email: 'robert.m@example.com', lastVisit: 'May 24, 2024', totalVisits: 3, notes: 'Prefers warm water rinse. History of slight tooth sensitivity.' },
  { id: 'pat-2', name: 'Alice Sterling', phone: '+91 (555) 014-9821', email: 'alice.s@example.com', lastVisit: 'May 24, 2024', totalVisits: 1, notes: 'First appointment at clinic. Interested in teeth whitening options later.' },
  { id: 'pat-3', name: 'John Doe', phone: '+91 (555) 012-3456', email: 'john@example.com', lastVisit: 'May 23, 2024', totalVisits: 5, notes: 'Routine hygiene checkup completed. Plaque index low.' },
  { id: 'pat-4', name: 'Linda Wright', phone: '+91 (555) 015-7729', email: 'linda.w@example.com', lastVisit: 'May 25, 2024', totalVisits: 2, notes: 'Implant surgery follow-up. Healing beautifully. No complications.' },
];

// Helper to safely access localStorage
const isStorageAvailable = () => {
  try {
    return typeof window !== 'undefined' && window.localStorage;
  } catch (e) {
    return false;
  }
};

export const initializeStorage = () => {
  if (!isStorageAvailable()) return;

  if (!localStorage.getItem('srdh_settings')) {
    localStorage.setItem('srdh_settings', JSON.stringify(DEFAULT_SETTINGS));
  }
  if (!localStorage.getItem('srdh_services')) {
    localStorage.setItem('srdh_services', JSON.stringify(DEFAULT_SERVICES));
  }
  if (!localStorage.getItem('srdh_appointments')) {
    localStorage.setItem('srdh_appointments', JSON.stringify(DEFAULT_APPOINTMENTS));
  }
  if (!localStorage.getItem('srdh_patients')) {
    localStorage.setItem('srdh_patients', JSON.stringify(DEFAULT_PATIENTS));
  }
};

// Settings
export const getSettings = () => {
  initializeStorage();
  if (!isStorageAvailable()) return DEFAULT_SETTINGS;
  return JSON.parse(localStorage.getItem('srdh_settings')) || DEFAULT_SETTINGS;
};

export const saveSettings = (settings) => {
  if (!isStorageAvailable()) return;
  localStorage.setItem('srdh_settings', JSON.stringify(settings));
  // Apply theme color
  applyThemeColor(settings.primaryColor);
};

// Services
export const getServices = () => {
  initializeStorage();
  if (!isStorageAvailable()) return DEFAULT_SERVICES;
  return JSON.parse(localStorage.getItem('srdh_services')) || DEFAULT_SERVICES;
};

export const saveServices = (services) => {
  if (!isStorageAvailable()) return;
  localStorage.setItem('srdh_services', JSON.stringify(services));
};

// Appointments
export const getAppointments = () => {
  initializeStorage();
  if (!isStorageAvailable()) return DEFAULT_APPOINTMENTS;
  return JSON.parse(localStorage.getItem('srdh_appointments')) || DEFAULT_APPOINTMENTS;
};

export const saveAppointments = (appointments) => {
  if (!isStorageAvailable()) return;
  localStorage.setItem('srdh_appointments', JSON.stringify(appointments));
};

export const addAppointment = (appointment) => {
  const appointments = getAppointments();
  const id = 'apt-' + Date.now();
  const newApt = { ...appointment, id, status: appointment.status || 'Pending' };
  appointments.push(newApt);
  saveAppointments(appointments);

  // Auto-sync patient record as well
  syncPatientFromAppointment(newApt);

  return newApt;
};

// Patients
export const getPatients = () => {
  initializeStorage();
  if (!isStorageAvailable()) return DEFAULT_PATIENTS;
  return JSON.parse(localStorage.getItem('srdh_patients')) || DEFAULT_PATIENTS;
};

export const savePatients = (patients) => {
  if (!isStorageAvailable()) return;
  localStorage.setItem('srdh_patients', JSON.stringify(patients));
};

export const addPatient = (patient) => {
  const patients = getPatients();
  const id = 'pat-' + Date.now();
  const newPat = {
    ...patient,
    id,
    lastVisit: patient.lastVisit || 'N/A',
    totalVisits: patient.totalVisits || 1,
    notes: patient.notes || '',
  };
  patients.push(newPat);
  savePatients(patients);
  return newPat;
};

// Auto sync or helper to link appointments and patients
const syncPatientFromAppointment = (apt) => {
  const patients = getPatients();
  const existingPatient = patients.find(
    (p) => p.email.toLowerCase() === apt.email.toLowerCase() || p.phone === apt.phone
  );

  if (existingPatient) {
    existingPatient.totalVisits += 1;
    existingPatient.lastVisit = apt.date + ', 2024';
    if (apt.notes) {
      existingPatient.notes = `${existingPatient.notes}\n[Oct 2024]: ${apt.notes}`;
    }
  } else {
    patients.push({
      id: 'pat-' + Date.now(),
      name: apt.name,
      phone: apt.phone,
      email: apt.email,
      lastVisit: apt.date + ', 2024',
      totalVisits: 1,
      notes: apt.notes || 'Created via online booking.',
    });
  }
  savePatients(patients);
};

// Apply brand primary color to document root styling dynamically
export const applyThemeColor = (color) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  
  let primaryColorHex = '#0eab9f'; // logo teal default
  let primaryContainerHex = '#004d47';
  let primaryFixedHex = '#e6f8f6';
  
  switch (color) {
    case 'navy':
      primaryColorHex = '#0f3885';
      primaryContainerHex = '#1e40af';
      primaryFixedHex = '#dbeafe';
      break;
    case 'indigo':
      primaryColorHex = '#4f46e5';
      primaryContainerHex = '#3730a3';
      primaryFixedHex = '#c7d2fe';
      break;
    case 'emerald':
      primaryColorHex = '#059669';
      primaryContainerHex = '#065f46';
      primaryFixedHex = '#a7f3d0';
      break;
    case 'rose':
      primaryColorHex = '#e11d48';
      primaryContainerHex = '#9f1239';
      primaryFixedHex = '#fecdd3';
      break;
    case 'teal':
    default:
      primaryColorHex = '#0eab9f';
      primaryContainerHex = '#004d47';
      primaryFixedHex = '#e6f8f6';
      break;
  }
  
  root.style.setProperty('--color-primary', primaryColorHex);
  root.style.setProperty('--color-primary-container', primaryContainerHex);
  root.style.setProperty('--color-primary-fixed', primaryFixedHex);
};
