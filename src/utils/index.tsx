export const images = [

]


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
    category: "Staff",
    tagline: "Control your business finances, all in one place",
    image:
      "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop",
    industry: "Fintech",
    role: "Senior Frontend Developer",
  },
  {
    id: 3,
    title: "ReadyRunner",
    category: "Project Portfolio",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop",
    industry: "SaaS",
    role: "Product Designer",
  },
  {
    id: 4,
    title: "TaskTXT",
    category: "Project Portfolio",
    image:
      "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop",
    industry: "Productivity",
    role: "Design Engineer",
  },
  {
    id: 5,
    title: "Chonky Menu Re-Creation",
    category: "Posts",
    image:
      "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop",
    industry: "UI/UX",
    role: "Frontend Developer",
  },
];


export const weekendProjects: Project[] = [
  {
    id: 1,
    title: "Flinto for Mac",
    category: "Project Portfolio",
    image:
      "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop",
    industry: "Design Tools",
    role: "Design Engineer",
  },
  {
    id: 2,
    title: "Flinto Lite",
    category: "Project Portfolio",
    image:
      "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop",
    industry: "Mobile Apps",
    role: "Frontend Developer",
  },
  {
    id: 3,
    title: "ReadyRunner",
    category: "Project Portfolio",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop",
    industry: "SaaS",
    role: "Product Designer",
  },
  {
    id: 4,
    title: "TaskTXT",
    category: "Project Portfolio",
    image:
      "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop",
    industry: "Productivity",
    role: "Design Engineer",
  },
  {
    id: 5,
    title: "Chonky Menu Re-Creation",
    category: "Posts",
    image:
      "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop",
    industry: "UI/UX",
    role: "Frontend Developer",
  },
];