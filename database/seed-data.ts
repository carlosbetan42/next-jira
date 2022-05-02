import { Entry } from "../interfaces";

interface SeedData {
  entries: SeedEntry[];
}

/*interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}*/

interface SeedEntry extends Omit<Entry, "_id"> {}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pendiente: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quisquam distinctio quam non aut qui asperiores",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "En-progreso: Nulla ea aute et duis incididunt consequat occaecat proident minim sit ad officia.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description: "Finalizada: Reprehenderit ut cupidatat consequat voluptate excepteur.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
