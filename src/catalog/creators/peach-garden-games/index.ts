import { type ICreatorData } from "src/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Peach Garden Games",
    links: {
      Website: "http://www.peachgardengames.com",
      twitter: "https://twitter.com/peachgardenrpgs",
    },
  };
}
