export const images = [
  "https://res.cloudinary.com/bridalmarket/image/upload/v1762956029/Frontend%20Applicaiton%20development/Portfolio%20website/Group_13353_bwuuer.png",
  "https://res.cloudinary.com/bridalmarket/image/upload/v1762956030/Frontend%20Applicaiton%20development/Portfolio%20website/Frame_2087329146_uxjk0n.png",
];

interface Project {
  id: number;
  title: string;
  tagline?: string;
  category: string;
  image: string;
  industry: string;
  role: string;
}

export const favouriteProjects: Project[] = [
  {
    id: 1,
    title: "Useonly",
    category: "Project Portfolio",
    tagline: "AI automated brand outreach for content creators",
    image:
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762959102/Frontend%20Applicaiton%20development/Portfolio%20website/useonly_lolu66.png",
    industry: "AI/ML & Creator Economy & SaaS",
    role: "Product Designer & Frontend Engineer",
    images: [
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762962624/Frontend%20Applicaiton%20development/Portfolio%20website/Course_-_Analysis_-_Revenue_analytics-min_evqj0z.png",
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762962623/Frontend%20Applicaiton%20development/Portfolio%20website/My_Store_overview-min_ixlqst.png",
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762962623/Frontend%20Applicaiton%20development/Portfolio%20website/Adding_to_module-min_rpr0re.png",
    ],
    stacks: [
      "Figma",
      "React",
      "Tanstack Query",
      "Typescript",
      "Tailwindcss",
      "Tanstack Router",
    ],
    url: "https://staging.useonly.app/auth/login",
  },

  {
    id: 2,
    title: "Bujeti (YC23)",
    category: "Starup - Currently active",
    tagline: "Control your business finances, all in one place",
    image:
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762958865/Frontend%20Applicaiton%20development/Portfolio%20website/bujeti_o9ij41.png",
    industry: "Fintech",
    role: "Founding Engineer (Snr Frontend Developer)",
    stacks: [
      "React",
      "Typescript",
      "Redux Saga",
      "React Router",
      "Tailwindcss",
    ],
    images: [],
    url: "https://bujeti.com/",
  },
  {
    id: 3,
    title: "Getstickyland",
    category: "Personal Project",
    tagline: "Personalized Stickers from anything you love generated with AI",
    image:
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762964482/Frontend%20Applicaiton%20development/Portfolio%20website/Sticky_Land_jae6mq.png",
    industry: "Design, creators, SaaS",
    role: "Fullstack Development",
    url: "https://getstickyland.com/",
    images: [
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762964482/Frontend%20Applicaiton%20development/Portfolio%20website/Text_-_Openai_API_egj5jj.png",
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762964482/Frontend%20Applicaiton%20development/Portfolio%20website/Text_-_Openai_API-2_klastk.png",
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762964482/Frontend%20Applicaiton%20development/Portfolio%20website/Text_-_Openai_API-3_yddgmg.png",
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762964486/Frontend%20Applicaiton%20development/Portfolio%20website/Text_-_Openai_API-4_pxrdfo.png",
    ],
    stacks: ["React", "XState", "Tailwindcss", "Tanstack Router"],
  },
  {
    id: 4,
    title: "Capsured",
    tagline: "An ERP & CRM Luxury Car management platform",
    category: "Consultant Full stack Developer",
    image:
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762965597/Frontend%20Applicaiton%20development/Portfolio%20website/Screenshot_2025-11-12_at_5.39.47_PM_e3hnb6.png",
    industry: "ERP & CRM, SaaS",
    role: "Design Engineer",
    url: "https://www.capsured.com",
    images: [
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762965438/Frontend%20Applicaiton%20development/Portfolio%20website/Screenshot_2025-11-12_at_5.33.00_PM_beuoyo.png",
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762965439/Frontend%20Applicaiton%20development/Portfolio%20website/Screenshot_2025-11-12_at_5.34.04_PM_mpqhnc.png",
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762965440/Frontend%20Applicaiton%20development/Portfolio%20website/Screenshot_2025-11-12_at_5.34.44_PM_rye4y3.png",
      "https://res.cloudinary.com/bridalmarket/image/upload/v1762965439/Frontend%20Applicaiton%20development/Portfolio%20website/Screenshot_2025-11-12_at_5.34.20_PM_dldjkj.png",
    ],
    stacks: [
      "React",
      "Tanstack Query",
      "Supabase",
      "Tailwindcss",
      "Tanstack Router",
    ],
  },
];

export const weekendProjects: Project[] = [
  {
    id: 1,
    title: "Paywall",
    category: "Personal Project",
    tagline: "Turn any anything into income fast, no signup required",
    image:
      "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop",
    industry: "Payment, ecommerce, creators",
    role: "Product Design & Fullstack Dev",
  },

  {
    id: 1,
    title: "Getstickyland",
    category: "Personal Project",
    tagline: "Personalized Stickers from anything you love generated with AI",
    image:
      "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop",
    industry: "Design, creators, SaaS",
    role: "Fullstack Development",
    url: "https://getstickyland.com/",
  },

  {
    id: 1,
    title: "Astrolandingpage",
    category: "Personal Project",
    tagline:
      "Marketplace for reusable components and landing page website for astro",
    image:
      "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop",
    industry: "Payment, ecommerce, creators",
    role: "Design Engineering",
    url: "https://astrolandingpage-29j.pages.dev/",
  },
];
