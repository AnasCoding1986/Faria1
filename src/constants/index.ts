import analytics from '../assets/tech/analytics.png'
import content from '../assets/tech/content.png'
import strategy from '../assets/tech/strategy.png'
import social from '../assets/tech/social.png'
import email from '../assets/tech/email.png'
import seo from '../assets/tech/seo.png'
import facebook from '../assets/tech/facebook.png'
import instagram from '../assets/tech/instagram.png'

// Explicitly import starbucks and carrent
import starbucks from '../assets/company/company.png'
import carrent from '../assets/projects/project1.png'
import seoOptimization from '../assets/seo_optimization.png'
import contentAnalytics from '../assets/content_analytics.png'
import digitalAnalytics from '../assets/digital_analytics.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Social Media Marketing",
    icon: social,
  },
  {
    title: "SEO Optimization",
    icon: seoOptimization,
  },
  {
    title: "Content Strategy",
    icon: contentAnalytics,
  },
  {
    title: "Digital Analytics",
    icon: digitalAnalytics,
  },
];

export const technologies = [
  {
    name: "Google Analytics",
    icon: analytics,
  },
  {
    name: "Content Marketing",
    icon: content,
  },
  {
    name: "Facebook Ads",
    icon: facebook,
  },
  {
    name: "Instagram Marketing",
    icon: instagram,
  },
  {
    name: "SEO Tools",
    icon: seo,
  },
  {
    name: "Email Marketing",
    icon: email,
  },
  {
    name: "Social Media Analytics",
    icon: social,
  },
  {
    name: "Digital Strategy",
    icon: strategy,
  },
];

export const experiences = [
  {
    title: "Digital Marketing Manager",
    company_name: "Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2020 - Present",
    points: [
      "Managing social media accounts for multiple clients across different platforms.",
      "Implementing SEO strategies to improve website rankings and organic traffic.",
      "Creating engaging content and managing advertising campaigns.",
      "Collaborating with clients to develop effective digital marketing strategies.",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "Working with Fariha was a game-changer for our social media presence. Her strategies helped us grow our following significantly.",
    name: "Client Name",
    designation: "Business Owner",
    company: "Company Name",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

export const projects = [
  {
    name: "Social Media Growth Campaign",
    description:
      "Comprehensive social media management project that helped a client increase their Instagram following by 200% in 3 months through strategic content and engagement.",
    tags: [
      {
        name: "social-media",
        color: "blue-text-gradient",
      },
      {
        name: "marketing",
        color: "green-text-gradient",
      },
      {
        name: "strategy",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "#",
  },
];
