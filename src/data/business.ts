// ============================================================
// G INDIA MART — CENTRAL BUSINESS CONFIGURATION
// Single source of truth. Update details here only.
// ============================================================

export const WHATSAPP_NUMBER = "919140594432"; // country code + number, digits only
export const PHONE_NUMBER = "9140594432";
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Parikhara+Tikhampur,+Ballia+277201,+Uttar+Pradesh";

export const business = {
  businessName: "G India Mart",
  tagline: "Reliable Sand Sourcing & Supply",
  ownerName: "Anil Kumar",
  phone: PHONE_NUMBER,
  phoneDisplay: "+91 91405 94432",
  address: "Parikhara Tikhampur, Ballia 277201, Near Parking Hotel",
  serviceArea: "Ballia District, Uttar Pradesh",
  serviceAreas: [
    "Ballia",
    "Phephna",
    "Sikandarpur",
    "Rasra",
    "Bairiya",
    "Bashdih",
  ],
  experience: "10+",
  customersServed: "1500+",
  ordersCompleted: "1500+",
  dailyCapacity: "20+",
  materials: [
    {
      id: "gitti",
      name: "Gitti",
      description:
        "Coarse stone aggregate ideal for concrete mixes, foundations and heavy construction work.",
      useCase: "Concrete / Foundation / RCC",
    },
    {
      id: "balu",
      name: "Balu",
      description:
        "Clean sand suited for plaster, masonry, flooring and general construction finishing work.",
      useCase: "Plaster / Masonry / Finishing",
    },
  ],
  stats: [
    { label: "Years of Experience", value: "10+" },
    { label: "Customers Served", value: "1500+" },
    { label: "Orders Completed", value: "1500+" },
    { label: "Trucks Per Day", value: "20+" },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Tell Us Your Requirement",
      description: "Submit the material, quantity and delivery location.",
    },
    {
      step: "02",
      title: "We Source the Material",
      description: "We coordinate with suitable sand sources in our network.",
    },
    {
      step: "03",
      title: "We Arrange Supply",
      description: "The required material and transportation are coordinated.",
    },
    {
      step: "04",
      title: "Material Delivered",
      description: "The order is delivered to the customer's location.",
    },
  ],
  whyUs: [
    {
      title: "10 Years of Experience",
      description: "A decade of experience in sand sourcing and supply.",
    },
    {
      title: "1500+ Completed Orders",
      description: "A strong history of completed customer orders.",
    },
    {
      title: "20+ Trucks Daily Capacity",
      description: "Capacity to coordinate 20+ trucks per day.",
    },
    {
      title: "Multiple Local Sources",
      description:
        "Supply sources across Ballia, Phephna, Sikandarpur, Rasra, Bairiya and Bashdih.",
    },
    {
      title: "Transportation Coordination",
      description:
        "Third-party trucks and trolleys can be coordinated for delivery.",
    },
  ],
  about:
    "G India Mart, led by Anil Kumar, has been sourcing and supplying sand across Ballia district for over 10 years. With a trusted local network and the capacity to coordinate 20+ trucks per day, the business helps contractors, builders, and material shops secure the right sand and delivery support for their needs.",
  socials: {
    whatsapp: "919140594432",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com",
  },
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:+91${PHONE_NUMBER}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello, I would like to enquire about sand supply from G India Mart.";
