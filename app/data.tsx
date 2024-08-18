export const DATA = {
  name: "Kyle David Libiran",
  initials: "KDL",
  url: "https://kylelibiran.vercel.app",
  location: "Quezon City, PH",
  description:
    "I am a full stack developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies including React, Next.js, Angular, Django, Flask, Postgresql, and more. I am always looking to learn new things and improve my skills. I am currently looking for new opportunities to work on exciting projects with a great team.",
  image: "/me.jpg",
  contact: {
    email: "hello@example.com",
    mobile: "+639234026321",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kdlibiran",
        icon: "",

        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/kdlibiran",
        icon: "",

        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: "",
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Enstack",
      href: "https://enstack.com",
      badges: [],
      location: "Taguig, PH",
      title: "Engineering Intern",
      logoUrl: "/enstack.png",
      start: "Jun 2024",
      end: "Aug 2024",
      description:
        "At Enstack Technologies, I resolved critical bugs across APIs, frontend, and AWS Lambda, ensuring smooth application performance. I developed and integrated new features such as a mass upload feature and secure reCAPTCHA, enhancing functionality and security. Additionally, I collaborated on creating a comprehensive reports page and developed an AWS Lambda function for real-time courier updates.",
    },
  ],
  education: [
    {
      school: "UP Diliman",
      href: "https://upd.edu.ph",
      degree: "Bachelor of Science in Computer Science (BSCS)",
      logoUrl: "/up.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
  ],
  skills:[
    {
      title: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "C", "C++", "PHP"],
    },
    {
      title: "Frameworks",
      items: ["React", "Nextjs", "Angular", "Django", "Flask", "Tailwind CSS"],
    },
    {
      title: "Database",
      items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
    },
    {
      title: "Others",
      items: ["Git", "Postman", "AWS", "Figma", "Selenium", "Playwright"],
    },
  ]
} as const;
