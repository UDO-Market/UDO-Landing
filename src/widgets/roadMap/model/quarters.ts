import { TQuarters } from "./typesRoadMap";

const createMilestone = (iconSrc: string, text: string, color: string = '') => ({
  iconSrc,
  text,
  color,
});

export const quarters: TQuarters[] = [
  {
    id: 0,
    quarter: "2024 Q4",
    milestones: [
      createMilestone("/svg/presention_icon_white.svg", "Landing", '#018eff'),
      createMilestone("/svg/cloasing_tag_roadMap.svg", "MVP"),
      createMilestone("/svg/toncoin_roadMap.svg", "Ton Nest"),
      createMilestone("/svg/human_roadMap.svg", "Community"),
      createMilestone("/svg/toncoin_roadMap.svg", "Investors"),
      createMilestone("/svg/gifts_roadMap.svg", "Gifts"),
    ],
  },
  {
    id: 1,
    quarter: "2025 Q1",
    milestones: [
      createMilestone("/svg/closing_brackets_roadMap.svg", "Alpha-Test"),
      createMilestone("/svg/paper_roadMap.svg", "Ton Apps"),
      createMilestone("/svg/human_roadMap.svg", "Closed Beta-Test"),
      createMilestone("/svg/human_roadMap.svg", "Opened Beta-Test"),
    ],
  },
  {
    id: 2,
    quarter: "2025 Q2",
    milestones: [
      createMilestone("/svg/logo_roadMap.svg", "Release"),
      createMilestone("/svg/notcoin_roadMap.svg", "TON Jettons"),
      createMilestone("/svg/paper_roadMap.svg", "More Categories"),
      createMilestone("", "Soon..."),
    ],
  },
];