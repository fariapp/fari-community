import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Charge RPG",
    license: "CC BY 4.0",
    description:
      "A generic and fiction first RPG system to power your action packed adventures.",
    links: {
      "itch.io": "https://fari-rpgs.itch.io/charge-rpg",
    },
    headingFont: "Oswald",
    headingUppercase: true,
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

    article ul.people li { display: inline; white-space: pre; }
    article ul.people li:after { content:  " •"; }
    article ul.people li:last-child:after { content: ""; }
    `,
  };
}
