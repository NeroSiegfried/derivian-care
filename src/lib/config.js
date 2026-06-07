export const siteConfig = {
  name: "DeRivian Care",
  tagline: "Supported living across London",
  description:
    "DeRivian Care Ltd provides personalised supported living services for adults across London — empowering people to live independently, build life skills and thrive in their own homes.",
  url: "https://derivian.co.uk",
  year: "2026",

  contact: {
    email: "info@derivian.co.uk",
    emailHref: "mailto:info@derivian.co.uk",
    supportEmail: "support@derivian.co.uk",
    supportEmailHref: "mailto:support@derivian.co.uk",
    phone: "+44 (0)20 8305 0000",
    phoneHref: "tel:+442083050000",
    safeguarding: "+44 (0)20 8305 0111",
    safeguardingHref: "tel:+442083050111",
    address: "24a Sydenham Road, London, United Kingdom, SE26 5QW",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=24a+Sydenham+Road+London+SE26+5QW+United+Kingdom",
    googleMapsEmbed:
      "https://maps.google.com/?q=24a+Sydenham+Road+London+SE26+5QW",
    mapEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=-0.069%2C51.422%2C-0.039%2C51.434&layer=mapnik&marker=51.428%2C-0.054",
  },

  team: [
    {
      initials: "DB",
      name: "Deborah Brown",
      role: "Director",
      email: "deborah.brown@derivian.co.uk",
      // image: "/images/team-db.jpg",  // uncomment and add photo to public/images/ when ready
      bio: "Deborah brings extensive experience in adult social care and a fierce dedication to safeguarding. Her leadership keeps accountability, co-production and strict CQC alignment at the centre of everything we do.",
    },
    {
      initials: "RN",
      name: "Rilindis Njotu",
      role: "Director",
      email: "rilindis.njotu@derivian.co.uk",
      // image: "/images/team-rn.jpg",
      bio: "Rilindis combines deep support-planning knowledge with compassionate leadership. She holds every team member to the highest standards of dignity, choice and safety for the people we support.",
    },
    {
      initials: "VE",
      name: "Vivienne Ewah",
      role: "Registered Manager",
      email: "vivienne.ewah@derivian.co.uk",
      // image: "/images/team-ve.jpg",
      bio: "Vivienne's regulatory expertise and hands-on approach build trust with the people we support, their families and commissioning bodies. She ensures DeRivian operates with integrity in every aspect of service delivery.",
    },
  ],

  contactTemplates: {
    general: {
      help: "Something else",
      situation: "general",
      message: "Hello, I'd like to find out more about your supported living services. Please get in touch at your earliest convenience.",
    },
    referral: {
      help: "Professional / local authority referral",
      situation: "referral",
      message: "I would like to make a referral to DeRivian Care. Please could you send me your referral pack and confirm the next steps? I can be reached at the contact details above.",
    },
    "work-with-us": {
      help: "Professional / local authority referral",
      situation: "professional",
      message: "I am interested in working with DeRivian Care as a commissioner or referrer. I would like to discuss how we could collaborate and what your referral process looks like.",
    },
    "daily-living": {
      help: "Arranging care for myself",
      situation: "service",
      message: "I'd like to find out more about daily living support — help with cooking, cleaning, shopping and household management. Please could someone contact me to discuss what's available?",
    },
    "life-skills": {
      help: "Arranging care for myself",
      situation: "service",
      message: "I'm interested in life skills development support, including managing money, cooking, using public transport and building towards greater independence. Please could someone get in touch to discuss options?",
    },
    community: {
      help: "Arranging care for myself",
      situation: "service",
      message: "I'd like to find out more about community access and social inclusion support — including activities, leisure, education and community connections. Please could someone contact me?",
    },
    "personal-care": {
      help: "Arranging care for myself",
      situation: "service",
      message: "I'm looking for personal care support and would like to discuss what is available and how it is delivered sensitively and with dignity. Please could someone get in touch?",
    },
    health: {
      help: "Arranging care for myself",
      situation: "service",
      message: "I'd like to discuss health and wellbeing support, including medication management, GP access and coordination with healthcare teams. Please could someone contact me to talk through the options?",
    },
    "complex-needs": {
      help: "Arranging care for myself",
      situation: "service",
      message: "I'm looking for specialist support for complex needs. I'd like to discuss a structured support arrangement and understand how your team would approach this. Please get in touch.",
    },
    "discuss-needs": {
      help: "Arranging care for myself",
      situation: "service",
      message: "I'd like to discuss my support needs and find out whether DeRivian Care is the right fit for me. Please could someone from your team get in touch at a convenient time?",
    },
    transparency: {
      help: "Professional / local authority referral",
      situation: "professional",
      message: "I'd like to see a demonstration of your digital care records and scheduling systems. Please could you arrange a walkthrough or send me more information about how your transparency systems work?",
    },
    "service-spec": {
      help: "Professional / local authority referral",
      situation: "professional",
      message: "I'd like to receive your service specification. Please could you send this along with any relevant CQC documentation and information about your commissioning process?",
    },
  },

  faq: [
    {
      q: "What is supported living and how is it different from a care home?",
      a: "In supported living, you hold your own tenancy and live in your own home — a self-contained flat, a shared house, or your existing property. We provide the support you need within that home, but your accommodation and your support are separate. You have full tenancy rights and are never 'placed' anywhere.",
      open: true,
    },
    {
      q: "How is my support plan created?",
      a: "We co-produce every support plan with you — not for you. We sit down with you, and anyone you choose to involve, to understand your goals, your routines and what independence looks like to you. The plan is reviewed regularly and updated whenever your needs or ambitions change.",
    },
    {
      q: "What areas of London do you cover?",
      a: "We provide supported living services across London and surrounding areas for adults aged 18 and over. If you're unsure whether your location is covered, get in touch and our team will let you know straight away.",
    },
    {
      q: "How quickly can support start?",
      a: "We understand that transitions can be time-sensitive. We work with you, your social worker and any commissioning body to put support in place as promptly as possible — always without cutting corners on getting to know you properly first.",
    },
    {
      q: "Do you work with local authorities, social workers and NHS teams?",
      a: "Yes. We work closely with local authority commissioners, social workers, NHS continuing healthcare teams and direct-payment holders. Our team is experienced in referral and funding pathways and can guide you through the options available.",
    },
  ],
}
