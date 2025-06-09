import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Devansh Verma",
  initials: "DV",
  url: "https://devansh.artemislabs.in",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Fullstack developer with the passion for aviation.",
  summary:
    "I'm a full-stack developer, having started my degree in Computer Science in 2021. Currently, [I'm working on a project called Silk Route](#projects) which is a multi tenant e-commerce platform that allows anyone to sell their product and services.",
  avatarUrl: "",
  skills: [
    "Next.js",
    "React",
    "Express",
    "Typescript",
    "NodeJs",
    "tRPC",
    "Postgres",
    "Turborepo",
    "Drizzle",
    "Docker",
    "AWS",
    "CI/CD",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "devanshverma1609@gmail.com",
    tel: "+919027669472",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/devansh193",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/devanshverma09/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/devansh_ts",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "devanshverma1609@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [],
  education: [
    {
      school: "100xDevs",
      href: "",
      degree: "Fullstack development",
      logoUrl: "/100x.jpeg",
      start: "2023",
      end: "2023",
    },
    {
      school: "Galgotias College Of Engineering and Technology",
      href: "",
      degree: "Bachelor's of Technology(B.Tech)",
      logoUrl: "/galgotia.jpg",
      start: "2021",
      end: "2025",
    },
    {
      school: "St. Joseph's Convent School",
      href: "",
      degree: "10+2 PCMC",
      logoUrl: "/convent.png",
      start: "2015",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Sample UI ",
      href: "https://lava-emery-6ae.notion.site/UI-1ebffd2893be805fa622c00088129657",
      dates: "",
      active: true,
      description:
        "All UI screens for this project are documented in a single Notion page, serving as a live visual reference for key flows, components, and overall design consistency.",
      technologies: ["React", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Source",
          href: "https://lava-emery-6ae.notion.site/UI-1ebffd2893be805fa622c00088129657",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ui.png",
      video: "",
    },
    {
      title: "Silk Route",
      href: "https://github.com/devansh193/multitenant-ecommerce",
      dates: "",
      active: true,
      description:
        "A multi-tenant eCommerce platform using Next.js, Payload CMS, and tRPC. It supports dynamic tenant isolation with customizable storefronts on shared infrastructure. Next.js provides performant SSR/ISR; Payload CMS manages products and content per tenant; tRPC ensures type-safe, full-stack API communication. The system is scalable and extensible, with support for theming, per-tenant domains, and modular integrations.",
      technologies: [
        "Next.js",
        "Typescript",
        "tRPC",
        "PayloadCMS",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/devansh193/multitenant-ecommerce",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/silkRoute.png",
      video: "",
    },
    {
      title: "Tube",
      href: "https://github.com/devansh193/tube",
      dates: "",
      active: true,
      description:
        "A video-sharing platform that enables users to upload, stream, and share videos. Built with MUX for video encoding, storage, and adaptive streaming, it delivers high-quality playback across devices. The system handles user-generated content with a seamless end-to-end pipeline for video ingestion, processing, and delivery.",
      technologies: [
        "Next.js",
        "Typescript",
        "tRPC",
        "Postgres",
        "Drizzle",
        "TailwindCSS",
        "ShadcnUI",
        "Clerk",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/devansh193/tube",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tube.png",
      video: "",
    },
    {
      title: "Testify",
      href: "https://github.com/devansh193/testify",
      dates: "",
      active: true,
      description:
        "An interactive platform for businesses to collect and showcase user testimonials, enhancing credibility and trust. It features secure user authentication with NextAuth.js and Recoil for state management. Businesses can customize review forms, generate public testimonial pages, and manage feedback via an intuitive, UX-focused dashboard for insights and accessibility.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "AuthJs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/devansh193/testify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/testify.jpeg",
      video: "",
    },
    {
      title: "finance.app",
      href: "https://github.com/devansh193/finance.app",
      dates: "",
      active: true,
      description:
        "Finance.app is a project that enables users to manage transactions seamlessly across multiple accounts and categories. It provides an organized platform for tracking expenses, categorizing transactions, and maintaining an overview of financial activities, helping users to streamline their budgeting and financial planning.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Drizzle",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/devansh193/finance.app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/finance.jpeg",
      video: "",
    },
    {
      title: "Hire me",
      href: "https://github.com/devansh193/hireme",
      dates: "",
      active: true,
      description: "Designed and developed a platform to hire great talent.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/devansh193/hireme",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hire.jpeg",
      video: "",
    },
  ],
} as const;
