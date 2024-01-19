interface Project {
  link: string;
  image: string;
  title: string;
  techStack: Array<string>;
}

export const projects: Array<Project> = [
  {
    link: "https://kalkulator-kesehatan.netlify.app/",
    image: "/kalkulator-kesehatan.png",
    title: "Kalkulator Kesehatan",
    techStack: ["logos:javascript", "devicon:react", "devicon:tailwindcss"],
  },
  {
    link: "https://nondenoic.vercel.app/",
    image: "/nondenoic.png",
    title: "Nondenoic",
    techStack: [
      "devicon:typescript",
      "devicon:react",
      "tabler:brand-nextjs",
      "devicon:tailwindcss",
    ],
  },
  {
    link: "https://www.eazyui.com/",
    image: "/eazyui.png",
    title: "Eazy UI",
    techStack: ["devicon:typescript", "devicon:react", "logos:docusaurus"],
  },
  {
    link: "https://adiifai.vercel.app/",
    image: "/adiifai.png",
    title: "AdiIfai",
    techStack: [
      "devicon:typescript",
      "devicon:react",
      "tabler:brand-nextjs",
      "devicon:tailwindcss",
      "devicon:framermotion",
    ],
  },
];
