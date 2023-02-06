import { v4 as uuid } from "uuid";

// team member images
import toni from "../assets/images/tonikroos.jpg";
import zidane from "../assets/images/zidane.jpg";
import james from "../assets/images/james.jpg";
import christiano from "../assets/images/christiano.jpg";
import iker from "../assets/images/ikercasillas.jpg";
// icons
import nba from "../assets/images/nba.png";
import facebook from "../assets/images/facebook.png";
import linkedin from "../assets/images/linkedin.png";
import medium from "../assets/images/medium.png";

export const teamMembers = [
  {
    id: uuid(),
    name: "Zidane",
    designation: "Leadership and management",
    profile: zidane,
    social: [linkedin, medium, facebook],
  },
  {
    id: uuid(),
    name: "Toni kroos",
    designation: "product developer",
    profile: toni,
    social: [linkedin, medium],
  },
  {
    name: "Iker Casillas",
    designation: "Marketing strategy",
    profile: iker,
    id: uuid(),
    social: [medium],
  },
  {
    name: "James",
    designation: "Product designer",
    profile: james,
    id: uuid(),
    social: [medium, nba],
  },
  {
    name: "Christiano",
    designation: "Financial operations",
    profile: christiano,
    id: uuid(),
    social: [linkedin, facebook],
  },
];
