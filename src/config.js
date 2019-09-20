export const PERSON_PRICE = 25;  /** Price per person of the team */
export const ROBOT_PRICE = 50;   /** Price per robot */
export const CATEGORY_JSON = [
  {
    label: "Sumô",
    hasMiniCourse: true,
    categorias: [
      {name: "Sumô mini - 500g Junior", ruleContent: '/rules/sumo_rule.pdf', miniCourse: true},
      {name: "Sumô mini - 500g Autônomo", ruleContent: '/rules/sumo_rule.pdf', miniCourse: false},
      {name: "Sumô 1kg Lego", ruleContent: '/rules/sumo_rule.pdf', miniCourse: false},
      {name: "Sumô 3kg Autônomo", ruleContent: '/rules/sumo_rule.pdf', miniCourse: false},
      {name: "Sumô 3kg Radio Controlado", ruleContent: '/rules/sumo_rule.pdf', miniCourse: false},
    ]
  },
  {
    label: "Seguidor de Linha",
    hasMiniCourse: true,
    categorias: [
      {name: "Seguidor Júnior", ruleContent: '/rules/line_follow.pdf', miniCourse: true},
      {name: "Seguidor Pro", ruleContent: '/rules/line_follow.pdf', miniCourse: false},
    ]
  },
  {
    label: "Trekking",
    hasMiniCourse: false,
    categorias: [
      {name: "Trekking Pro", ruleContent: '/rules/trekking.pdf', miniCourse: false},
    ]
  },
  {
    label: "Combate",
    hasMiniCourse: true,
    categorias: [
      {name: "Antweight Junior - 1lb (454g)", ruleContent: '/rules/fight_rules.pdf', miniCourse: true},
      {name: "Antweight - 1lb (454g)", ruleContent: '/rules/fight_rules.pdf', miniCourse: false},
      {name: "Beetleweight - 3lb (1,36kg)", ruleContent: '/rules/fight_rules.pdf', miniCourse: false},
      {name: "Hobbyweight - 12lb (5,44kg)", ruleContent: '/rules/fight_rules.pdf', miniCourse: false},
    ]
  },
  {
    label: "Futebol",
    hasMiniCourse: false,
    categorias: [
      {name: "Simulation 2D", ruleContent: '/rules/futebol_2d.pdf', miniCourse: false},
      {name: "Very Small size League", ruleContent: '/rules/', miniCourse: false},
      {name: "VSS RC", ruleContent: '/rules/futebol_vss.pdf', miniCourse: false},
    ]
  },
  {
    label: "ArtBot",
    hasMiniCourse: false,
    categorias: [
      {name: "Kinetic", ruleContent: '/rules/artbot.pdf', miniCourse: false},
    ]
  },
  {
    label: "Hockey",
    hasMiniCourse: false,
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