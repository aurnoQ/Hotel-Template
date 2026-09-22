export const siteConfig = {
  name: "SAVORA",
  shortName: "S",
  tagline: "Good food. Slow moments.",
  description: "A modern café and kitchen focused on seasonal food, handcrafted coffee, relaxed dining, and memorable gatherings.",
  contact: {
    phone: "+91 98765 43210",
    email: "hello@savora.example",
    whatsapp: "919876543210",
  },
  location: {
    address: "24 Garden Lane",
    area: "Hauz Khas Village",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110016",
    country: "India",
    mapsUrl: "https://maps.google.com/?q=Hauz+Khas+Village+New+Delhi",
    mapsEmbedUrl: "https://maps.google.com/maps?q=Hauz+Khas+Village,+New+Delhi,+Delhi+110016,+India&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  social: {
    instagram: "https://instagram.com/savora",
    facebook: "https://facebook.com/savora",
    youtube: "https://youtube.com/@savora",
  },
  openingHours: {
    weekdays: { label: "Monday – Friday", open: "08:00", close: "23:00", display: "8:00 AM – 11:00 PM" },
    weekends: { label: "Saturday – Sunday", open: "08:00", close: "00:00", display: "8:00 AM – 12:00 AM" },
  },
  ordering: {
    enabled: false,
    url: "",
  },
  reservations: {
    enabled: true,
    url: "",
  },
  seo: {
    title: "SAVORA — Café & Kitchen | Good Food. Slow Moments.",
    description: "SAVORA is a modern café and kitchen in New Delhi, focused on seasonal food, handcrafted coffee, and slow dining. Reserve a table today.",
    keywords: "cafe, restaurant, New Delhi, seasonal food, brunch, coffee, fine dining, SAVORA",
    ogImage: "/og-image.jpg",
    themeColor: "#241A17",
  },
  // Future modular extensions for AurnoQ Hospitality Clients (Hotels, Resorts, Fine Dining)
  modules: {
    hotel: {
      enabled: false,
      features: ['rooms', 'suites', 'amenities', 'spa', 'experiences', 'booking', 'availability'],
    },
  },
};
