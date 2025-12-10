import orangeSplash from "@/assets/products/orange-splash-no-bg-cropped.png";
import watermelonRefresh from "@/assets/products/watermelon-refresh-no-bg-cropped.png";
import pearPure from "@/assets/products/pear-pure-no-bg-cropped.png";

export interface Flavor {
  id: string;
  tag: string;
  image: string;
  name: string;
  description: string;
  className: string;
}

export const flavors: Flavor[] = [
  {
    id: "orange-splash",
    tag: "Citrus Burst",
    image: orangeSplash,
    name: "Orange Splash",
    description:
      "Sun-kissed oranges blended into a refreshing, fizzy delight. Perfect for brightening any moment.",
    className: "orange-splash",
  },
  {
    id: "watermelon-refresh",
    tag: "Summer Vibes",
    image: watermelonRefresh,
    name: "Watermelon Refresh",
    description:
      "Cool, crisp watermelon essence that transports you to a summer paradise with every sip.",
    className: "watermelon-refresh",
  },
  {
    id: "pear-pure",
    tag: "Subtle & Sweet",
    image: pearPure,
    name: "Pear Pure",
    description:
      "Delicate pear flavor with a gentle sweetness. A sophisticated choice for refined palates.",
    className: "pear-pure",
  },
];
