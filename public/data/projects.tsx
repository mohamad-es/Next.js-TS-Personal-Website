import room from "@/public/img/projects/3d-room.jpg";
import roboxonWebsite from "@/public/img/projects/roboxon-website.jpg";
import roboxonDashboard from "@/public/img/projects/roboxon-dashboard.jpg";
import accounting from "@/public/img/projects/accounting.png";
import vUser from "@/public/img/projects/v-user.jpg";
import BootstrapIcon from "@/src/app/components/icons/BootstrapIcon";
import CssIcon from "@/src/app/components/icons/CssIcon";
import HtmlIcon from "@/src/app/components/icons/HtmlIcon";
import JSIcon from "@/src/app/components/icons/JSIcon";
import MUIIcon from "@/src/app/components/icons/MUIIcon";
import NextjsIcon from "@/src/app/components/icons/NextjsIcon";
import ReactIcon from "@/src/app/components/icons/ReactIcon";
import ReduxIcon from "@/src/app/components/icons/ReduxIcon";
import TailwindIcon from "@/src/app/components/icons/TailwindIcon";
import TSIcon from "@/src/app/components/icons/TSIcon";
import { TProjectData } from "@/src/types/projects";
import { ReactQueryIcon } from "@/src/app/components/icons/ReactQueryIcon";




export const projectsSeo = {
  title: "Project's - Mohammad Esmaeilpour | Front-end developer",
  metadescription:
    "Develop high-performance applications with Next.js and React, using TypeScript to improve type safety.",
};

export const projectsHeadings = {
  h1: {
    title: "Mohammad Esmaeilpour Project's",
    subTitle: (
      <>
        Develop high-performance applications with Next.js and React, using
        TypeScript to improve type safety.
      </>
    ),
  },
};

export const projectsData: TProjectData = {
  projectsInfo: [
    {
      id: 0,
      title: "3D Room using CSS and JavaScript",
      overview: `I've created a 3D room using CSS, HTML, and JavaScript, aiming to
          provide an immersive virtual space that showcases both design
          aesthetics and interactive functionality.`,
      features: [
        {
          title: "3D Rendering",
          description:
            "Utilizes CSS transforms and animations to create a lifelike room environment.",
        },
        {
          title: "Interactive Elements",
          description:
            "Users can interact with objects within the room, such as clicking on furniture to change its color or position.",
        },
        {
          title: "Responsive Design",
          description:
            "Ensures the room adapts seamlessly to different screen sizes, maintaining visual integrity and usability.",
        },
        {
          title: "Realistic Lighting",
          description:
            "Implemented through CSS effects to simulate natural lighting conditions, enhancing the room's realism.",
        },
        {
          title: "Dynamic Content",
          description:
            "Updates dynamically based on user inputs or events, allowing for a personalized user experience.",
        },
      ],
      techStack: [
        {
          title: "Javascript",
          icon: <JSIcon key={1} size={18} />,
        },
        {
          title: "CSS",
          icon: <CssIcon key={3} size={18} />,
        },
        {
          title: "HTML",
          icon: <HtmlIcon key={2} size={18} />,
        },
      ],
      img: room,
      tags: ["html", "css", "js"],
      previewLink: "https://projects.esmaeilpour.site/3d-room",
      repository: "https://github.com/mohamadesmaeilpour/3D-Room.git",
    },
    {
      id: 1,
      title: "Modern Next.js Responsive Website - Roboxon",
      overview:
        "I developed a modern, responsive website using Next.js, Tailwind CSS, and TypeScript, focusing on performance, scalability, and maintainability. This project showcases my ability to create dynamic, high-quality web applications with a keen eye for design and user experience.",
      features: [
        {
          title: "Responsive Design",
          description:
            "The website is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.",
        },
        {
          title: "Fast Performance",
          description:
            "Leveraged the power of Next.js for server-side rendering and static site generation, resulting in fast load times and a smooth user experience.",
        },
        {
          title: "Type Safety",
          description:
            "Incorporated TypeScript to ensure robust type-checking and improve code maintainability and scalability.",
        },
        {
          title: "Custom Styling",
          description:
            "Utilized Tailwind CSS to create a unique, modern design that is both visually appealing and easy to maintain.",
        },
        {
          title: "Modular Architecture",
          description:
            "Designed the application with a modular architecture, making it easy to extend and maintain in the future.",
        },
        {
          title: "API Integration",
          description:
            "Integrated with external APIs to fetch dynamic content, showcasing the ability to work with third-party services and data.",
        },
      ],
      techStack: [
        {
          title: "Typescript",
          icon: <TSIcon key={1} size={18} />,
        },
        {
          title: "Next.js",
          icon: <NextjsIcon key={3} size={18} />,
        },
        {
          title: "Tailwind CSS",
          icon: <TailwindIcon key={1} size={18} />,
        },
      ],
      img: roboxonWebsite,
      tags: ["next", "typescript", "tailwind"],
    },
    {
      id: 2,
      title: "High-Performance Dashboard with React and Tailwind CSS",
      overview:
        "I developed a high-performance dashboard for a company, allowing them to efficiently manage users, companies, roles, and permissions. This project spanned over 8 months and involved the use of cutting-edge technologies like React, TypeScript, Tailwind CSS, and Redux. The dashboard significantly improved the company’s operational efficiency and user management capabilities.",
      features: [
        {
          title: "Role-Based Access Control",
          description:
            "Advanced role and permission management for secure access.",
        },
        {
          title: "Efficient State Management",
          description:
            "Utilized Redux for state management, ensuring a predictable and maintainable codebase.",
        },
        {
          title: "Customizable UI",
          description:
            "Used Tailwind CSS to create a highly customizable and visually appealing interface.",
        },
        {
          title: "TypeScript Integration",
          description:
            "Leveraged TypeScript to enhance code quality and maintainability.",
        },
      ],
      techStack: [
        {
          title: "Typescript",
          icon: <TSIcon key={1} size={18} />,
        },
        {
          title: "React",
          icon: <ReactIcon key={3} size={18} />,
        },
        {
          title: "Tailwind CSS",
          icon: <TailwindIcon key={1} size={18} />,
        },
      ],
      img: roboxonDashboard,
      tags: ["react", "typescript", "tailwind"],
    },
    {
      id: 3,
      title: "E-commerce website with Bootstrap & Javascript",
      overview: `This eCommerce platform is built on Joomla, leveraging a custom front-end developed using Bootstrap, CSS, HTML, and JavaScript. The site provides a seamless shopping experience with a modern, responsive design that adapts to any device. With a focus on performance and user experience, the platform is designed to handle high traffic volumes while maintaining fast load times. The site integrates with various payment gateways, ensuring secure and convenient transactions for users.`,
      previewLink: "https://v-user.com",
      features: [
        {
          title: "Responsive Design",
          description:
            "Fully responsive interface optimized for mobile, tablet, and desktop devices.",
        },
        {
          title: "Customizable Product Catalog",
          description:
            "Easily manage and customize product listings with dynamic filters and categories.",
        },
        {
          title: "Secure Payment Integration",
          description:
            "Supports multiple payment gateways with robust security measures.",
        },
        {
          title: "User-Friendly Admin Panel",
          description:
            "Intuitive admin panel for managing orders, customers, and inventory.",
        },
      ],
      techStack: [
        {
          title: "JavaScript",
          icon: <JSIcon key={1} size={18} />,
        },
        {
          title: "Bootstrap",
          icon: <BootstrapIcon key={3} size={18} />,
        },
        {
          title: "HTML",
          icon: <HtmlIcon key={1} size={18} />,
        },
      ],
      img: vUser,
      tags: ["html", "css", "js"],
    },
    {
      id: 4,
      title: "Advanced Accounting Dashboard | React & TypeScript Project",
      overview: `A powerful Accounting Dashboard built with React and TypeScript. Designed for financial data management, it offers real-time analytics, customizable reports, and intuitive data visualization. The dashboard supports seamless data updates, insightful financial summaries, and enhances productivity for accounting professionals. Built for performance, security, and ease of use.`,
      previewLink: "https://accountant.liara.run/",
      features: [
        {
          title: "React Query",
          description:
            "Integrated React Query for optimized data fetching, caching, and synchronization with the backend. This enhances real-time data updates and minimizes unnecessary network requests, ensuring a smooth user experience.",
        },
        {
          title: "Redux",
          description:
            "Used Redux for state management, enabling consistent and efficient data flow across the accounting dashboard. Redux centralizes the application state, allowing seamless updates and improved scalability.",
        },
        {
          title: "Authorization",
          description:
            "Implemented secure authorization, protecting sensitive financial data with role-based access. This feature ensures that only authorized users can access specific sections of the dashboard.",
        },
        {
          title: "Charts",
          description:
            "Added interactive charts to visualize financial data clearly and effectively. These charts offer insightful analytics and help users make data-driven decisions with ease.",
        },
      ],
      techStack: [
        {
          title: "Typescript",
          icon: <TSIcon key={1} size={18} />,
        },
        {
          title: "React",
          icon: <ReactIcon key={3} size={18} />,
        },
        {
          title: "Tailwind",
          icon: <TailwindIcon key={1} size={18} />,
        },

        {
          title: "React Query",
          icon: <ReactQueryIcon size={18} key={1} />,
        },

        {
          title: "Redux",
          icon: <ReduxIcon key={1} size={18} />,
        },
      ],
      img: accounting,
      tags: ["typescript", "react", "tailwind"],
    },
  ],
  projectsFilter: [
    {
      title: "React",
      tag: "react",
      icon: <ReactIcon size={18} />,
    },
    {
      title: "Next.js",
      tag: "next",
      icon: <NextjsIcon size={18} />,
    },
    {
      title: "Typescript",
      tag: "typescript",
      icon: <TSIcon size={18} />,
    },
    {
      title: "Javascript",
      tag: "js",
      icon: <JSIcon size={18} />,
    },
    {
      title: "Tailwind CSS",
      tag: "tailwind",
      icon: <TailwindIcon size={18} />,
    },
    {
      title: "Material UI",
      tag: "material",
      icon: <MUIIcon size={18} />,
    },
  ],
};
