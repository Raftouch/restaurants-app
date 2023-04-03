import { Restaurant } from "../models/Restaurant";

export const restaurants: Restaurant[] = [
  {
    id: 0,
    name: "L'Échappée",
    address: "9 rue de Paris, 75005 Paris",
    description_short: "Un moment à part",
    description_long:
      "L'Échappée réunit tous les critères pour un repas réussi : une cuisine gastronomique, récompensée d'une étoile au Guide Michelin, et une vue légendaire sur la célèbre cathédrale de Notre-Dame. Que demander de plus ?",
    img: "../assets/restau1.png",
    menu: {
      entrees: ["x", "y", "z"],
      dishes: ["x", "y", "z"],
      desserts: ["x", "y", "z"],
    },
  },
  {
    id: 1,
    name: "Le Bain",
    address: "75bis rue de l'eau, 29000 Quimper",
    description_short: "Familial et végétarien",
    description_long:
      "Pour les amoureux des légumes et des produits de saison, Le Bain est un endroit idéal. Le tout dans un lieu agréable et cosy.",
    img: "../assets/restau2.png",
    menu: {
      entrees: ["x", "y", "z"],
      dishes: ["x", "y", "z"],
      desserts: ["x", "y", "z"],
    },
  },
  {
    id: 2,
    name: "Aux filets bleus",
    address:
      "67 route du Port de Locquémeau Pointe de Sehar, 22300 Trédrez-Locquémeau",
    description_short: "Restaurant de poissons",
    description_long:
      "Aux filets bleus vous accueille pour venir déguster la pêche du jour ! Dans un cadre magnifique avec vue directe sur la mer.",
    img: "../assets/restau3.png",
    menu: {
      entrees: ["x", "y", "z"],
      dishes: ["x", "y", "z"],
      desserts: ["x", "y", "z"],
    },
  },
  {
    id: 3,
    name: "Le Balto",
    address: "15 Rue Mazarine, 75006 Paris",
    description_short: "Brasserie parisienne",
    description_long:
      "Soupe à l'oignon, charcuterie et steaks servis dans une brasserie haut de gamme avec des salles décorées dans des styles différents.",
    img: "../assets/restau4.png",
    menu: {
      entrees: ["x", "y", "z"],
      dishes: ["x", "y", "z"],
      desserts: ["x", "y", "z"],
    },
  },
  {
    id: 4,
    name: "Au Bascou",
    address: "38 rue Réaumur, 75002 Paris",
    description_short: "Cuisine basque et chaleureuse",
    description_long:
      "Plats basques gastronomiques dans un lieu aux tons chauds et colorés, avec chaises et comptoir en bois.",
    img: "../assets/restau5.png",
    menu: {
      entrees: ["x", "y", "z"],
      dishes: ["x", "y", "z"],
      desserts: ["x", "y", "z"],
    },
  },
  {
    id: 5,
    name: "Le Bastringue",
    address: "67 quai de Seine, 75019 Paris",
    description_short: "Brasserie pittoresque de spécialités françaises",
    description_long:
      "Cuisine et boissons de brasserie parisienne classique dans un restaurant établi de longue date avec terrasse au bord du canal.",
    img: "../assets/restau6.png",
    menu: {
      entrees: ["x", "y", "z"],
      dishes: ["x", "y", "z"],
      desserts: ["x", "y", "z"],
    },
  },
  {
    id: 6,
    name: "Higuma",
    address: "32bis Rue Sainte-Anne, 75001 Paris",
    description_short: "Cuisine japonaise, cadre à l'ambiance détendue",
    description_long:
      "Restaurant japonais de style décontracté servant ramens, plats sautés et donburis, accompagnés de bière et de saké.",
    img: "../assets/restau7.png",
    menu: {
      entrees: ["x", "y", "z"],
      dishes: ["x", "y", "z"],
      desserts: ["x", "y", "z"],
    },
  },
];
