export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  period?: string;
}

export const portfolio = {
  profile: {
    name: "Venky Venkatesh",
    title: "Electrical & Electronics Engineering Student | AI Enthusiast",
    location: "Venkatagiri, Andhra Pradesh, India",
    email: "venky.venkatesh@example.com",
    linkedin: "https://www.linkedin.com/in/venky-venkatesh-726172415",
    github: "https://github.com/vv3607527-creator",
  },
  about: "Current student with completed certifications in AI and software development. Engaged in multiple projects that enhanced technical skills and practical knowledge. Committed to continuous learning and application of emerging technologies.",
  experience: [
    {
      company: "Pricol Limited",
      role: "Production Operator",
      period: "Jun 2023 - Nov 2023",
      location: "Tada",
      description: [
        "Assembled automotive instrument clusters (speedometers) by combining individual electronic and mechanical components according to standard operating procedures (SOPs).",
        "Performed precision assembly of PCBs, displays, needles, bezels, lenses, housings, and other speedometer parts.",
        "Conducted functional testing and visual inspections to ensure product quality and compliance with manufacturing standards.",
        "Operated assembly-line equipment and hand tools while maintaining high production efficiency.",
        "Identified and reported defective components or assembly issues to supervisors for corrective action.",
        "Followed workplace safety guidelines, quality control procedures, and 5S manufacturing practices.",
        "Collaborated with production, quality assurance, and maintenance teams to achieve daily production targets.",
        "Maintained accurate production records and ensured proper handling of materials throughout the manufacturing process.",
        "Contributed to continuous improvement initiatives by following lean manufacturing principles and minimizing production errors.",
      ],
    },
  ] as Experience[],
  education: [
    {
      institution: "NBKR Institute of Science and Technology",
      degree: "Bachelor of Technology, Electrical and Electronics Engineering",
      period: "2024",
    },
    {
      institution: "Z.P. High School Venkatagiri",
      degree: "High School Diploma",
      period: "2007 - 2021",
    },
  ] as Education[],
  skills: [
    "Application Programming Interfaces (API)",
    "AI Problem Solving",
    "AI for Research",
  ],
  certifications: [
    {
      name: "Foundations in Generative AI",
      issuer: "NPTEL Online Certification",
      period: "Jul 2025 - Oct 2025",
    },
    {
      name: "Production Operator Intern",
      issuer: "Skill India",
      period: "",
    },
    {
      name: "Claude 101",
      issuer: "Anthropic",
      period: "",
    },
    {
      name: "Introduction to AI",
      issuer: "Coursera",
      period: "",
    },
    {
      name: "Speed Up Data Analysis and Presentation Building",
      issuer: "Coursera",
      period: "",
    },
  ] as Certification[],
  interests: [
    "Robotics DIY",
    "Windsurfing",
    "Artificial Intelligence",
    "AI Tools",
  ],
};