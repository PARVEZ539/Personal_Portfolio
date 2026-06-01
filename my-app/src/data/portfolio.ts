import type { Service, Work } from "../types";
import work1 from "../assets/work-1.jpg";
import work2 from "../assets/work-5.jpg";
import work3 from "../assets/work-2.jpg";
import work4 from "../assets/work-3.jpg";
import work5 from "../assets/work-4.jpg";

export const services: Service[] = [
  {
    id: "web-design",
    icon: "fa-solid fa-crop",
    title: "Web Design",
    description: "Web design involves crafting visually appealing layouts...",
    details: {
      overview:
        "I create modern, responsive designs that focus on user experience and visual appeal. Every design is tailored to the client's brand and goals.",
      features: [
        "Responsive layouts for all screen sizes",
        "UI/UX wireframing and prototyping",
        "Brand-consistent color and typography",
        "Accessibility-first design",
      ],
      technologies: ["Figma", "Adobe XD", "Tailwind CSS", "SASS"],
    },
  },
  {
    id: "web-development",
    icon: "fa-solid fa-code",
    title: "Web Development",
    description:
      "Building and maintaining websites using HTML, CSS, JavaScript...",
    details: {
      overview:
        "I build fast, secure, and scalable web applications from front-end to back-end using modern technologies and best practices.",
      features: [
        "Single Page Applications (SPA)",
        "REST API integration",
        "Performance optimization",
        "Cross-browser compatibility",
      ],
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    },
  },
  {
    id: "app-development",
    icon: "fa-brands fa-app-store",
    title: "App Development",
    description:
      "Creating software applications for mobile devices or desktops...",
    details: {
      overview:
        "I develop intuitive mobile and desktop apps with smooth UX, focusing on performance and platform-specific best practices.",
      features: [
        "Cross-platform mobile apps",
        "Offline support",
        "Push notifications",
        "App store deployment",
      ],
      technologies: ["React Native", "Expo", "Flutter", "TypeScript"],
    },
  },
];

export const works: Work[] = [
  {
    image: work1,
    title: "Pro Finder",
    description:
      "This is a Pro Finder website. If you have a GitHub account you can search your name on search bar and show all information of your GitHub Account.",
    link: "https://parvez539.github.io/Pro-Finder/",
  },
  {
    image: work2,
    title: "Banking App",
    description:
      "This is a Banking App. It allows users to manage their finances, view transactions, and transfer money securely.",
    link: "https://parvez539.github.io/BankApp/",
  },
  {
    image: work3,
    title: "Form-Validator",
    description:
      "This is a Form Validator website. It allows users to validate their form inputs in real-time, ensuring data accuracy and improving user experience.",
    link: "https://parvez539.github.io/Form-Validator/",
  },
  {
    image: work4,
    title: "Monster Finder",
    description:
      "This is a Monster Finder website. It allows users to search for their favorite monsters and view detailed information about them, including stats, abilities, and lore.",
    link: "https://parvez539.github.io/Monster-Finder/",
  },
  {
    image: work5,
    title: "Nature",
    description:
      "Nature Travels is a travel platform showcasing beautiful natural destinations, adventure experiences, and travel guides, helping users explore, plan, and enjoy memorable journeys in nature.",
    link: "https://parvez539.github.io/Natures/",
  },
];
