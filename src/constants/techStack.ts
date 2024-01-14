interface TechStack {
  label: string;
  icon: string;
  list: {
    name: string;
    icon: string;
  }[];
}

export const techStack: TechStack[] = [
  {
    label: "Operating System",
    icon: "mingcute:computer-line",
    list: [{
      name: "Windows",
      icon: "logos:microsoft-windows-icon",
    }, {
      name: "Ubuntu",
      icon: "logos:ubuntu",
    }],
  },
  {
    label: "Languages",
    icon: "ion:book-outline",
    list: [{
      name: "JavaScript",
      icon: "logos:javascript",
    }, {
      name: "TypeScript",
      icon: "devicon:typescript",
    }, {
      name: "Python",
      icon: "logos:python",
    }, {
      name: "PHP",
      icon: "devicon:php",
    }, {
      name: "Mongo DB",
      icon: "skill-icons:mongodb",
    }, {
      name: "MySQL",
      icon: "devicon:mysql",
    }],
  },
  {
    label: "Frameworks",
    icon: "tabler:frame",
    list: [{
      name: "React",
      icon: "devicon:react",
    }, {
      name: "Next JS",
      icon: "tabler:brand-nextjs",
    }, {
      name: "Tailwind CSS",
      icon: "devicon:tailwindcss",
    }, {
      name: "Express JS",
      icon: "simple-icons:express",
    }],
  },
  {
    label: "Tools",
    icon: "bx:edit",
    list: [
      { name: "Neovim", icon: "devicon:neovim" },
      {
        name: "Visual Studio Code",
        icon: "devicon:vscode",
      },
      { name: "Git", icon: "devicon:git" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Chrome", icon: "logos:chrome" },
      { name: "Framer", icon: "devicon:framermotion" },
      { name: "Postman", icon: "devicon:postman" },
    ],
  },
];
