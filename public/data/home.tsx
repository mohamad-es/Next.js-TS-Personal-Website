import BootstrapIcon from "@/src/app/components/icons/BootstrapIcon";
import BugIcon from "@/src/app/components/icons/BugIcon";
import ClockIcon from "@/src/app/components/icons/ClockIcon";
import CollabrationIcon from "@/src/app/components/icons/CollabrationIcon";
import CssIcon from "@/src/app/components/icons/CssIcon";
import GithubIcon from "@/src/app/components/icons/GithubIcon";
import GitIcon from "@/src/app/components/icons/GitIcon";
import HandShakeIcon from "@/src/app/components/icons/HandShakeIcon";
import HighVoltageIcon from "@/src/app/components/icons/HighVoltageIcon";
import HourglassIcon from "@/src/app/components/icons/HourglassIcon";
import HtmlIcon from "@/src/app/components/icons/HtmlIcon";
import JSIcon from "@/src/app/components/icons/JSIcon";
import ManRunningIcon from "@/src/app/components/icons/ManRunningIcon";
import MinimizeIcon from "@/src/app/components/icons/MinimizeIcon";
import MUIIcon from "@/src/app/components/icons/MUIIcon";
import NextjsIcon from "@/src/app/components/icons/NextjsIcon";
import ReactIcon from "@/src/app/components/icons/ReactIcon";
import { ReactQueryIcon } from "@/src/app/components/icons/ReactQueryIcon";
import ReduxIcon from "@/src/app/components/icons/ReduxIcon";
import ResponsiveIcon from "@/src/app/components/icons/ResponsiveIcon";
import SassIcon from "@/src/app/components/icons/SassIcon";
import SearchLabtopScreenIcon from "@/src/app/components/icons/SearchLabtopScreenIcon";
import TailwindIcon from "@/src/app/components/icons/TailwindIcon";
import TSIcon from "@/src/app/components/icons/TSIcon";
import ViteIcon from "@/src/app/components/icons/ViteIcon";
import { TSeoProps } from "@/src/types/global";
import { THomeData } from "@/src/types/home";

export const homeSeo: TSeoProps = {
  title: "Mohammad Esmaeilpour - Front-end developer",
  metadescription:
    "Mohammad Esmaeilpour - Experienced Front-end developer specializing in Next.js, React, and TypeScript. Work with multiple CSS library like as Bootstrap, Tailwind CSS and Material UI.",
};

const homeHeadings = {
  h1: {
    title: "Mohammad Esmaeilpour",
    subTitle: "Building High-Performance Web Applications with Modern Technologies",
  },
  h2: {
    expertise: {
      title: "My Expertise in Front-end Development",
      subTitle:
        "My core expertise lies in Next.js and React, where I've developed a range of dynamic, high-performance web applications.",
    },
    workHighlights: {
      title: "Highlighted Projects – A Showcase of My Work",
      subTitle: "High speed Platform Built with Next.js !",
    },
  },
};

export const homeData: THomeData = {
  hero: {
    title: homeHeadings.h1.title,
    subTitle: homeHeadings.h1.subTitle,
    callToAction: [
      {
        title: "View my projects",
        link: "/projects",
        btn: "primary",
      },
      {
        title: "Get to know me",
        link: "/about",
        btn: "secondary",
      },
    ],
  },
  skills: [
    {
      icon: <ViteIcon size={60} />,
      id: 14,
    },
    {
      icon: <JSIcon size={60} />,
      id: 1,
    },
    {
      icon: <TSIcon size={60} />,
      id: 2,
    },
    {
      icon: <ReactIcon size={60} />,
      id: 3,
    },
    {
      icon: <NextjsIcon size={60} />,
      id: 4,
    },
    {
      icon: <ReactQueryIcon size={60} />,
      id: 15,
    },
    {
      icon: <ReduxIcon size={60} />,
      id: 5,
    },
    {
      icon: <MUIIcon size={60} />,
      id: 6,
    },
    {
      icon: <TailwindIcon size={60} />,
      id: 7,
    },
    {
      icon: <BootstrapIcon size={60} />,
      id: 8,
    },
    {
      icon: <SassIcon size={60} />,
      id: 9,
    },
    {
      icon: <CssIcon size={60} />,
      id: 10,
    },
    {
      icon: <HtmlIcon size={60} />,
      id: 11,
    },
    {
      icon: <GithubIcon size={60} />,
      id: 12,
    },
    {
      icon: <GitIcon size={60} />,
      id: 13,
    },
  ],
  expertise: {
    title: homeHeadings.h2.expertise.title,
    subTitle: homeHeadings.h2.expertise.subTitle,
    tabs: [
      {
        label: "Type Safety with TypeScript",
        icon: <TSIcon size={20} />,
        description: (
          <>
            TypeScript is at the heart of building reliable and maintainable web applications. By enhancing JavaScript
            with static type definitions, I ensure that the codebase is more predictable and less prone to runtime
            errors. This approach not only speeds up the development process but also results in a more stable and
            robust application.
          </>
        ),
        keyStrengths: [
          {
            title: "Type Inference & Annotation",
            description:
              "I effectively use TypeScript’s type inference to reduce boilerplate code while explicitly annotating types where clarity is needed.",
          },
          {
            title: "Advanced Types",
            description:
              "Leveraging generics, union types, and interfaces allows me to create flexible and reusable components.",
          },
          {
            title: "Strict Typing",
            description:
              "By enabling strict mode, I catch potential issues early, ensuring a higher level of code safety and quality.",
          },
        ],
        impact: [
          {
            title: "Fewer Bugs",
            description: "Early detection of errors leads to more reliable software.",
            icon: <BugIcon size={25} />,
          },
          {
            title: "Better Collaboration",
            description: "Self-explanatory code enhances teamwork and onboarding.",
            icon: <CollabrationIcon size={25} />,
          },
        ],
      },
      {
        label: "Performance Optimization with Next.js",
        icon: <NextjsIcon size={20} />,
        description:
          "In modern web development, performance is critical to user satisfaction and SEO. My proficiency in Next.js enables me to optimize applications for speed and efficiency. Whether through server-side rendering (SSR), static site generation (SSG), or dynamic routing, I focus on delivering lightning-fast experiences that keep users engaged.",
        keyStrengths: [
          {
            title: "Server-Side Rendering (SSR)",
            description: "I use SSR to ensure faster initial page loads and improved SEO.",
          },
          {
            title: "Static Site Generation (SSG)",
            description: "With SSG, I pre-build pages for near-instant loading, perfect for content-heavy sites.",
          },
          {
            title: "Optimized Data Fetching",
            description:
              "I employ Next.js's data-fetching methods like getStaticProps and getServerSideProps for efficient content delivery.",
          },
        ],
        impact: [
          {
            title: "Improved Load Times",
            description: "Faster rendering results in a better user experience.",
            icon: <ClockIcon size={25} />,
          },
          {
            title: "Enhanced SEO",
            description: "Pre-rendered content boosts search engine visibility, driving more traffic.",
            icon: <SearchLabtopScreenIcon size={25} />,
          },
        ],
      },
      {
        label: "Modern Styling",
        icon: <CssIcon size={20} />,
        description:
          "Design consistency and accessibility are pivotal to user experience. I specialize in using Tailwind CSS and Material UI to create polished, responsive, and accessible interfaces. These tools allow me to implement custom designs quickly, ensuring that your application not only looks great but also performs well across all devices.",
        keyStrengths: [
          {
            title: "Utility-First Styling (Tailwind CSS)",
            description:
              "Tailwind CSS enables me to create custom, responsive designs with minimal code, ensuring maintainability and scalability.",
          },
          {
            title: "Material Design (Material UI)",
            description:
              "By applying Material Design principles, I create user interfaces that are intuitive and consistent.",
          },
          {
            title: "Accessibility",
            description: "I prioritize creating designs that are accessible to all users, adhering to WCAG standards.",
          },
        ],
        impact: [
          {
            title: "Rapid Prototyping",
            description: "Quick iterations and design changes without sacrificing quality.",
            icon: <ManRunningIcon size={25} />,
          },
          {
            title: "User-Friendly Interfaces",
            description: "Consistent, accessible design enhances user engagement.",
            icon: <HandShakeIcon size={25} />,
          },
        ],
      },
      {
        label: "Responsive Design",
        icon: <ResponsiveIcon size={20} />,
        description:
          "Responsive design is essential in delivering a seamless user experience across devices. I specialize in crafting designs that adapt gracefully to different screen sizes, ensuring your application looks and functions perfectly on smartphones, tablets, and desktops alike.",
        keyStrengths: [
          {
            title: "Mobile-First Approach",
            description:
              "I start by designing for smaller screens, ensuring a solid foundation for scaling up to larger displays.",
          },
          {
            title: "Modern Layout Techniques",
            description: "Utilizing Flexbox and CSS Grid, I build layouts that are flexible and robust.",
          },
          {
            title: "Media Queries",
            description:
              "I fine-tune designs with CSS media queries to ensure pixel-perfect adjustments across various devices.",
          },
        ],
        impact: [
          {
            title: "Consistent Experience",
            description: "Users enjoy a seamless experience, no matter what device they use.",
            icon: <ResponsiveIcon size={25} />,
          },
          {
            title: "Higher Engagement",
            description: "A well-optimized design leads to increased user satisfaction and retention.",
            icon: <HighVoltageIcon size={25} />,
          },
        ],
      },
      {
        label: "Adherence to Best Practices",
        icon: <GitIcon size={20} />,
        description:
          "Delivering high-quality, scalable applications requires more than just technical skill—it demands adherence to best practices. I follow industry standards in coding, version control, and testing to ensure that the applications I build are not only functional but also future-proof and maintainable.",
        keyStrengths: [
          {
            title: "Version Control (Git)",
            description:
              "I maintain a clean and organized codebase using Git, enabling efficient collaboration and streamlined project management.",
          },
          {
            title: "Comprehensive Testing",
            description:
              "I implement thorough testing strategies, including unit, integration, and end-to-end tests, to ensure code reliability.",
          },
          {
            title: "Code Quality & Refactoring",
            description:
              "Regular code reviews and refactoring sessions help me maintain a clean, efficient, and scalable codebase.",
          },
        ],
        impact: [
          {
            title: "Long-Term Maintainability",
            description: "Clean, well-structured code is easier to maintain and extend.",
            icon: <HourglassIcon size={25} />,
          },
          {
            title: "Reduced Technical Debt",
            description:
              "Adhering to best practices minimizes the accumulation of technical debt, leading to a more sustainable development process.",
            icon: <MinimizeIcon size={25} />,
          },
        ],
      },
    ],
  },
  workHighlights: {
    title: homeHeadings.h2.workHighlights.title,
    subTitle: homeHeadings.h2.workHighlights.subTitle,
    description: (
      <>
        I have developed multiple applications for startups and new brands, utilizing my <strong>top skills</strong> in{" "}
        <strong>TypeScript</strong> for type safety, <strong>Next.js</strong> for websites that require good page speed
        and performance with server-side rendering, and <strong>React</strong> for most dashboard applications. Ive also
        used various CSS libraries such as <strong>Tailwind CSS</strong>, <strong>Material UI</strong>, and{" "}
        <strong>Ant Design</strong>.
      </>
    ),
    callToAction: {
      title: "Mohammad Esmaeilpour Projects",
      link: "/projects",
    },
  },
};
