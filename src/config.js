export const PERSON_PRICE = 25;  /** Price per person of the team */
export const ROBOT_PRICE = 50;   /** Price per robot */
export const CATEGORY_JSON = [
  {
    label: "Sumô",
    hasMiniCourse: true,
    enabled: true,
    categorias: [
      {name: "Sumô mini - 500g Autônomo", ruleContent: '/rules/sumo_rule.pdf', miniCourse: false, participants: 13},
      {name: "Sumô 1kg Lego", ruleContent: '/rules/sumo_rule.pdf', miniCourse: false, participants: 3},
      {name: "Sumô 3kg Autônomo", ruleContent: '/rules/sumo_rule.pdf', miniCourse: false, participants: 3},
      {name: "Sumô 3kg Radio Controlado", ruleContent: '/rules/sumo_rule.pdf', miniCourse: false, participants: 0},
    ]
  },
  {
    label: "Seguidor de Linha",
    enabled: true,
    hasMiniCourse: true,
    categorias: [
      {name: "Seguidor Júnior", ruleContent: '/rules/line_follow.pdf', miniCourse: true, participants: 4},
      {name: "Seguidor Pro", ruleContent: '/rules/line_follow.pdf', miniCourse: false, participants: 9},
    ]
  },
  {
    label: "Trekking",
    hasMiniCourse: false,
    enabled: true,
    categorias: [
      {name: "Trekking Pro", ruleContent: '/rules/trekking.pdf', miniCourse: false, participants: 4},
    ]
  },
  {
    label: "Combate",
    hasMiniCourse: true,
    enabled: true,
    categorias: [
      {name: "Fairyweight - 150g", ruleContent: '/rules/fight_rules.pdf', miniCourse: false, participants: 7},
      {name: "Antweight - 1lb (454g)", ruleContent: '/rules/fight_rules.pdf', miniCourse: false, participants: 12},
      {name: "Beetleweight - 3lb (1,36kg)", ruleContent: '/rules/fight_rules.pdf', miniCourse: false, participants: 18},
      {name: "Hobbyweight - 12lb (5,44kg)", ruleContent: '/rules/fight_rules.pdf', miniCourse: false, participants: 9},
    ]
  },
  {
    label: "Futebol",
    hasMiniCourse: false,
    enabled: false,
    categorias: [
      {name: "Very Small size League", ruleContent: '/rules/', miniCourse: false},
      {name: "VSS RC", ruleContent: '/rules/futebol_vss.pdf', miniCourse: false},
    ]
  },
  {
    label: "ArtBot",
    hasMiniCourse: false,
    enabled: true,
    categorias: [
      {name: "Kinetic", ruleContent: '/rules/artbot.pdf', miniCourse: false, participants: 5},
    ]
  },
  {
    label: "Hockey",
    hasMiniCourse: false,
    enabled: false,
    categorias: [
      {name: "Hockey", ruleContent: '/rules/hockey.pdf', miniCourse: false},
    ]
  },
];

export default {
  PERSON_PRICE,
  CATEGORY_JSON,
  ROBOT_PRICE
}