export type Project = {
  title: string;
  text: string;
  tags: string[];
  /** Capture d'écran dans /public/projects, ex : "/projects/kwantabit.png". Vide = aperçu généré. */
  image?: string;
  /** Lien du dépôt GitHub */
  repo?: string;
  /** Lien du site déployé */
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Kwantabit",
    text: "Landing page d'une startup, développée en React et déployée sur Vercel.",
    tags: ["React", "Vercel"],
    repo: "https://github.com/Munyajunior/kwantabit-web-frontend",
    demo: "https://kwantabit.vercel.app",
    image: "/projects/kwantabit.png"
  },
  {
    title: "6FO",
    text: "Application web en React avec Vite",
    tags: ["React", "Vite"],
    repo: "https://github.com/Bilal512-stack/6FO",
    demo: "https://6-fo-guhw.vercel.app",
    image: "/projects/6FO.png"
  },
];
