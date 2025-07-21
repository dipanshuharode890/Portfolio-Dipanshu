import Emart from '../assets/Emart.png';
import Country from '../assets/countryinfo.png';
import Emptask from '../assets/emptask.png';
import ImageSlider from '../assets/imageSlider.png';
import Stonepaper from '../assets/stonepaper.png';
import Tictoc from '../assets/tictoc.png';

export const siteData = {
  name: "Dipanshu Harode",
  role: "Frontend Developer (React / JavaScript)",
  tagline: "Self-taught React developer building clean UIs and fast web experiences.",
  location: "Dewas / Indore, India",
  email: "dipanshuharode890@gmail.com",
  github: "https://github.com/dipanshuharode890",
  linkedin: "https://www.linkedin.com/in/dipanshu-harode-14805a258/",
  portfolio: "https://dipanshuportfolio.vercel.app/",
  resume: "/resume.pdf",
  skills: {
    frontend: ["HTML5", "CSS", "JavaScript", "React", "Tailwind CSS", "Redux"],
    tools: ["GitHub", "Vite", "Axios", "Vercel"],
    learning: ["TypeScript", "Next.js"]
  },
  projects: [
    {
      image: Emart ,
      title: "E-Mart (ecommerce site)",
      description: "E-Mart is a modern, responsive e-commerce web application built using React 19. It offers a seamless shopping experience with features like product listing fetched from an external API, detailed product pages, and a fully functional cart system. The checkout process includes a login check, editable shipping address, and pincode-based autofill. Orders below ₹500 include a dynamic shipping charge. The UI is styled with Tailwind CSS and enhanced using animations and effects.",
      tech: ["React 19", "Tailwind CSS", "JavaScript", "API", "React Router"],
      github: "https://github.com/dipanshuharode890",
      demo: "https://emart-lemon-psi.vercel.app/"
    },
    {
      image: Country ,
      title: "Country Info App",
      description: "This project is a dynamic web application built with HTML, CSS, and React JS that provides detailed information about countries. It leverages Axios to efficiently fetch data from a public API, displaying details such as flags, population, area, region, capital, currencies, languages, timezones, and neighboring countries. React-Router-Dom is used for seamless navigation, allowing users to explore different country profiles via unique URLs and potentially filter or search through the country list. This creates an interactive and informative user experience for exploring global data.",
      tech: ["React", "Tailwind CSS", "REST API"],
      github: "https://github.com/dipanshuharode890",
      demo: "https://country-project-kqq6.vercel.app/"
    },
    {
      image: Emptask ,
      title: "Employee Task Management System",
      description: "This Employee Task Management System offers separate Admin and Employee logins. Admins can assign tasks and track their status (Complete, Pending, Failed). Employees view their dashboard with task counts (Active, Complete, New, Failed) and full task details. This streamlines workflow by centralizing task assignments and provides clear oversight for both.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/dipanshuharode890",
      demo: "https://employee-task-management-system-chi.vercel.app/"
    },
    {
      image: Stonepaper ,
      title: "Stone Paper Scissors Game",
      description: "Fun browser game using HTML, CSS, and JavaScript. Responsive design included.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/dipanshuharode890",
      demo: "https://lively-biscuit-4152c0.netlify.app/"
    },
    {
      image: ImageSlider ,
      title: "Image Slider",
      description: "It's small project simple image slider make with react js.",
      tech: ["JavaScript", "HTML", "CSS", "React"],
      github: "https://github.com/dipanshuharode890",
      demo: "https://image-slider-seven-kappa.vercel.app/"
    },
    {
      image: Tictoc ,
      title: "Tic Tac Toe Game",
      description: "Interesting Game of Tic-Tac-Toe creat from HTML, CSS, JavaScript, and it is responsive also.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/dipanshuharode890",
      demo: "https://lustrous-dieffenbachia-10652e.netlify.app/"
    }
  ],
  education: [
    {
      title: "B.Com (Computer Application)",
      institution: "PMB Gujrati Commerce College, Indore",
      date: "2019 - 2022"
    },
    {
      title: "Higher Secondary",
      institution: "Sardana Public School, Dewas",
      date: "2019"
    }
  ],
  experience: [
    {
      title: "Executive",
      company: "Flipkart Warehouse (Return Center)",
      location: "Indore",
      date: "Feb 2023 - Dec 2024",
      description: "Inspected and tagged returned products, ensured accurate placement."
    },
    {
      title: "Assistant Supervisor",
      company: "Friends Enterprises",
      location: "Dewas",
      date: "Jan 2020 - Mar 2021",
      description: "Handled inventory, marking, and final quality checks of vehicle parts."
    },
    {
      title: "Computer Operator",
      company: "Rajat Jewellers",
      location: "Dewas",
      date: "May 2018 - Nov 2019",
      description: "Managed billing operations and customer transactions."
    }
  ],
  
  interests: [
    "Listening to music",
    "Exploring tech on YouTube",
    "Cricket"
  ]
};