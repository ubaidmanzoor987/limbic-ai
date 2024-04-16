export interface IMenuItems {
  title: string;
  active: boolean;
  path: string;
  icon: string;
  icon1: string;
}
export const MENUITEMS: IMenuItems[] = [
  {
    title: "Questions",
    active: true,
    path: "/questions",
    icon: "/svgs/question.svg",
    icon1: "/svgs/question-active.svg",
  },
  {
    title: "Answers",
    active: true,
    path: "/answers",
    icon: "/svgs/answer.svg",
    icon1: "/svgs/answer-active.svg",
  },
];
