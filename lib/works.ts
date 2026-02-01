export type Orientation = "landscape" | "portrait";

export type Work = {
  id: string;
  src: string;
  width: number;
  height: number;
  orientation: Orientation;
  order: number;
};

export const HERO: Work = {
  id: "hero",
  src: "https://via.placeholder.com/2400x1600?text=HERO",
  width: 2400,
  height: 1600,
  orientation: "landscape",
  order: 0,
};

const sequenceData: Work[] = [
  {
    id: "01",
    src: "/hero.jpg",
    width: 2200,
    height: 1467,
    orientation: "landscape",
    order: 1,
  },
  {
    id: "02",
    src: "https://via.placeholder.com/1400x2100?text=02",
    width: 1400,
    height: 2100,
    orientation: "portrait",
    order: 2,
  },
];

export const SEQUENCE = sequenceData.sort((a, b) => a.order - b.order);
