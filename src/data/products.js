import ksl from "../assets/images/shoe.jpg";
import ksw from "../assets/images/shoe2.png";
import { v4 as uuid } from "uuid";

export const products = [
  {
    name: "KSL 01",
    imgLink: ksl,
    price: 2000,
    id: uuid(),
    rating: 3,
    type: "loafers",
  },
  {
    name: "KSW 01",
    imgLink: ksw,
    price: 2500,
    id: uuid(),
    rating: 4,
    type: "sneakers",
  },
  {
    name: "KSL 02",
    imgLink: ksl,
    price: 3000,
    id: uuid(),
    rating: 3,
    type: "loafers",
  },
  {
    name: "KSW 02",
    imgLink: ksw,
    price: 3500,
    id: uuid(),
    rating: 3,
    type: "sneakers",
  },
  {
    name: "KSL 03",
    imgLink: ksl,
    price: 8000,
    id: uuid(),
    rating: 4,
    type: "loafers",
  },
  {
    name: "KSW 03",
    imgLink: ksw,
    price: 6000,
    id: uuid(),
    rating: 3,
    type: "sneakers",
  },
];
