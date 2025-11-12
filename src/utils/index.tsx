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
      "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop",
    industry: "AI/ML & Creator Economy & SaaS",
    role: "Product Designer & Frontend Engineer",
  },
  {
    id: 2,
    title: "Bujeti (YC23)",
    category: "Starup - Currently active",
    tagline: "Control your business finances, all in one place",
    image:
      "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop",
    industry: "Fintech",
    role: "Founding Engineer (Snr Frontend Developer)",
    url: "https://bujeti.com/",
  },
  {
    id: 3,
    title: "Uselender",
    tagline:
      "Access to credit finance without liquidating your savings/investment",
    category: "Personal Startup - discontinued",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop",
    industry: "Fintech",
    role: "Product Lead, UI/UX Design & Frontend Developer",
  },
  {
    id: 4,
    title: "Capsured",
    tagline: "An ERP & CRM Luxury Car management platform",
    category: "Consultant Full stack Developer",
    image:
      "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop",
    industry: "ERP & CRM, SaaS",
    role: "Design Engineer",
    url: "https://www.capsured.com",
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
