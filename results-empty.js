const RESULTS = {
  groups: {
    "A": [
      "Mexico",
      "South Africa",
      "South Korea",
      "Czech Republic"
    ],
    "B": [
      "Switzerland",
      "Canada",
      "Bosnia & Herzegovina",
      "Qatar"
    ],
    "C": [
      "Brazil",
      "Morocco",
      "Scotland",
      "Haiti"
    ],
     "D": [
      "USA",
      "Australia",
      "Paraguay",
      "Turkey"
    ],
    "E": [
      "Germany",
      "Ivory Coast",
      "Ecuador",
      "Curaçao"
    ],
    "F": [
      "Netherlands",
      "Japan",
      "Sweden",
      "Tunisia"
    ]
  },
  thirdPlace: [],
  "groupMatches": {
    "A": {
      "Mexico__South Africa": { "home": 2, "away": 0 },
      "Mexico__South Korea": { "home": 1, "away": 0 },
      "Czech Republic__Mexico": { "home": 0, "away": 3 },
      "South Africa__South Korea": { "home": 1, "away": 0 },
      "South Africa__Czech Republic": { "home": 1, "away": 1 },
      "South Korea__Czech Republic": { "home": 2, "away": 1 }
    },
    "B": {
      "Switzerland__Canada": { "home": 2, "away": 1 },
      "Canada__Qatar": { "home": 6, "away": 0 },
      "Canada__Bosnia & Herzegovina": { "home": 1, "away": 1 },
      "Switzerland__Qatar": { "home": 1, "away": 1 },
      "Switzerland__Bosnia & Herzegovina": { "home": 4, "away": 1 },
      "Bosnia & Herzegovina__Qatar": { "home": 3, "away": 1 }
    },
    "C": {
      "Brazil__Haiti": { "home": 3, "away": 0 },
      "Brazil__Morocco": { "home": 1, "away": 1 },
      "Scotland__Brazil": { "home": 0, "away": 3 },
      "Morocco__Haiti": { "home": 4, "away": 2 },
      "Haiti__Scotland": { "home": 0, "away": 1 },
      "Scotland__Morocco": { "home": 0, "away": 1 }
    },
    "D": {
      "Turkey__Paraguay": { "home": 0, "away": 1 },
      "Australia__Turkey": { "home": 2, "away": 0 },
      "Turkey__USA": { "home": 3, "away": 2 },
      "Paraguay__Australia": { "home": 0, "away": 0 },
      "USA__Paraguay": { "home": 4, "away": 1 },
      "USA__Australia": { "home": 2, "away": 0 }
    },
    "E": {
      "Curaçao__Ecuador": { "home": 0, "away": 0 },
      "Germany__Curaçao": { "home": 7, "away": 1 },
      "Curaçao__Ivory Coast": { "home": 0, "away": 2 },
      "Ecuador__Germany": { "home": 2, "away": 1 },
      "Ivory Coast__Ecuador": { "home": 1, "away": 0 },
      "Germany__Ivory Coast": { "home": 2, "away": 1 }
    },
    "F": {
      "Japan__Netherlands": { "home": 2, "away": 2 },
      "Tunisia__Japan": { "home": 0, "away": 4 },
      "Japan__Sweden": { "home": 1, "away": 1 },
      "Tunisia__Netherlands": { "home": 1, "away": 3 },
      "Netherlands__Sweden": { "home": 5, "away": 1 },
      "Tunisia__Sweden": { "home": 5, "away": 1 }
    },
    "G": {
      "Egypt__Belgium": { "home": 1, "away": 1 },
      "Egypt__Iran": { "home": 1, "away": 1 },
      "New Zealand__Egypt": { "home": 1, "away": 3 },
      "Belgium__Iran": { "home": 0, "away": 0 },
      "New Zealand__Belgium": { "home": 1, "away": 5 },
      "Iran__New Zealand": { "home": 2, "away": 2 }
    },
    "H": {
      "Uruguay__Spain": { "home": 0, "away": 1 },
      "Uruguay__Saudi Arabia": { "home": 1, "away": 1 },
      "Uruguay__Cape Verde": { "home": 2, "away": 2 },
      "Spain__Saudi Arabia": { "home": 4, "away": 0 },
      "Spain__Cape Verde": { "home": 0, "away": 0 },
      "Saudi Arabia__Cape Verde": { "home": 0, "away": 0 }
    },
    "I": {
      "France__Iraq": { "home": 3, "away": 0 },
      "France__Senegal": { "home": 3, "away": 1 },
      "Norway__France": { "home": 1, "away": 4 },
      "Senegal__Iraq": { "home": 5, "away": 0 },
      "Iraq__Norway": { "home": 1, "away": 4 },
      "Norway__Senegal": { "home": 3, "away": 2 }
    },
    "J": {
      "Argentina__Jordan": { "home": 100, "away": 100 },
      "Argentina__Algeria": { "home": 3, "away": 0 },
      "Argentina__Austria": { "home": 2, "away": 0 },
      "Jordan__Algeria": { "home": 1, "away": 2 },
      "Austria__Jordan": { "home": 3, "away": 1 },
      "Algeria__Austria": { "home": 100, "away": 100 }
    },
    "K": {
      "Portugal__Uzbekistan": { "home": 5, "away": 0 },
      "Portugal__DR Congo": { "home": 1, "away": 1 },
      "Colombia__Portugal": { "home": 0, "away": 0 },
      "DR Congo__Uzbekistan": { "home": 3, "away": 1 },
      "Uzbekistan__Colombia": { "home": 1, "away": 3 },
      "Colombia__DR Congo": { "home": 1, "away": 0 }
    },
    "L": {
      "England__Ghana": { "home": 0, "away": 0 },
      "England__Croatia": { "home": 4, "away": 2 },
      "Panama__England": { "home": 0, "away": 2 },
      "Croatia__Ghana": { "home": 2, "away": 1 },
      "Ghana__Panama": { "home": 1, "away": 0 },
      "Panama__Croatia": { "home": 0, "away": 1 }
    }
  },
  
  knockout: {
    round32: [],
    round16: [],
    quarterfinals: [],
    semifinals: [],

    champion: "",
    runnerUp: "",
    finalists: [],

    thirdPlaceWinner: "",
    final: "",
    thirdPlace: "",

    matches: {
      round32: [
        // {
        //   match: 73,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      round16: [
        // {
        //   match: 89,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      quarterfinals: [
        // {
        //   match: 97,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      semifinals: [
        // {
        //   match: 101,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      thirdPlace: [
        // {
        //   match: 103,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],

      final: [
        // {
        //   match: 104,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ]
    }
  },

  semifinalists: [],
  finalists: [],

  champion: "",
  runnerUp: "",
  thirdPlaceWinner: "",

  awards: {
    goldenBoot: [],
    goldenBall: []
  }
};
