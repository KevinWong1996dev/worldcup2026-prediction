const RESULTS = {
  groups: {},
  thirdPlace: [],
  "groupMatches": {
    "A": {
      "Mexico__South Africa": { "home": 2, "away": 0 },
      "Mexico__South Korea": { "home": 100, "away": 100 },
      "Mexico__Czech Republic": { "home": 100, "away": 100 },
      "South Africa__South Korea": { "home": 100, "away": 100 },
      "South Africa__Czech Republic": { "home": 1, "away": 1 },
      "South Korea__Czech Republic": { "home": 2, "away": 1 }
    },
    "B": {
      "Canada__Switzerland": { "home": 100, "away": 100 },
      "Canada__Qatar": { "home": 100, "away": 100 },
      "Canada__Bosnia & Herzegovina": { "home": 1, "away": 1 },
      "Switzerland__Qatar": { "home": 1, "away": 1 },
      "Switzerland__Bosnia & Herzegovina": { "home": 100, "away": 100 },
      "Qatar__Bosnia & Herzegovina": { "home": 100, "away": 100 }
    },
    "C": {
      "Brazil__Haiti": { "home": 100, "away": 100 },
      "Brazil__Morocco": { "home": 1, "away": 1 },
      "Brazil__Scotland": { "home": 100, "away": 100 },
      "Haiti__Morocco": { "home": 100, "away": 100 },
      "Haiti__Scotland": { "home": 0, "away": 1 },
      "Morocco__Scotland": { "home": 100, "away": 100 }
    },
    "D": {
      "Turkey__Paraguay": { "home": 100, "away": 100 },
      "Australia__Turkey": { "home": 2, "away": 0 },
      "Turkey__USA": { "home": 100, "away": 100 },
      "Paraguay__Australia": { "home": 100, "away": 100 },
      "USA__Paraguay": { "home": 4, "away": 1 },
      "Australia__USA": { "home": 100, "away": 100 }
    },
    "E": {
      "Curaçao__Ecuador": { "home": 100, "away": 100 },
      "Germany__Curaçao": { "home": 7, "away": 1 },
      "Curaçao__Ivory Coast": { "home": 100, "away": 100 },
      "Ecuador__Germany": { "home": 100, "away": 100 },
      "Ivory Coast__Ecuador": { "home": 1, "away": 0 },
      "Germany__Ivory Coast": { "home": 100, "away": 100 }
    },
    "F": {
      "Japan__Netherlands": { "home": 2, "away": 2 },
      "Japan__Tunisia": { "home": 100, "away": 100 },
      "Japan__Sweden": { "home": 100, "away": 100 },
      "Netherlands__Tunisia": { "home": 100, "away": 100 },
      "Netherlands__Sweden": { "home": 100, "away": 100 },
      "Tunisia__Sweden": { "home": 5, "away": 1 }
    },
    "G": {
      "Egypt__Belgium": { "home": 1, "away": 1 },
      "Egypt__Iran": { "home": 100, "away": 100 },
      "Egypt__New Zealand": { "home": 100, "away": 100 },
      "Belgium__Iran": { "home": 100, "away": 100 },
      "Belgium__New Zealand": { "home": 100, "away": 100 },
      "Iran__New Zealand": { "home": 2, "away": 2 }
    },
    "H": {
      "Uruguay__Spain": { "home": 100, "away": 100 },
      "Uruguay__Saudi Arabia": { "home": 1, "away": 1 },
      "Uruguay__Cape Verde": { "home": 100, "away": 100 },
      "Spain__Saudi Arabia": { "home": 100, "away": 100 },
      "Spain__Cape Verde": { "home": 0, "away": 0 },
      "Saudi Arabia__Cape Verde": { "home": 0, "away": 100 }
    },
    "I": {
      "France__Iraq": { "home": 100, "away": 100 },
      "France__Senegal": { "home": 3, "away": 1 },
      "France__Norway": { "home": 100, "away": 100 },
      "Iraq__Senegal": { "home": 100, "away": 100 },
      "Iraq__Norway": { "home": 1, "away": 4 },
      "Senegal__Norway": { "home": 100, "away": 100 }
    },
    "J": {
      "Argentina__Jordan": { "home": 100, "away": 100 },
      "Argentina__Algeria": { "home": 3, "away": 0 },
      "Argentina__Austria": { "home": 100, "away": 100 },
      "Jordan__Algeria": { "home": 100, "away": 100 },
      "Austria__Jordan": { "home": 3, "away": 1 },
      "Algeria__Austria": { "home": 100, "away": 100 }
    },
    "K": {
      "Portugal__Uzbekistan": { "home": 100, "away": 100 },
      "Portugal__DR Congo": { "home": 1, "away": 1 },
      "Portugal__Colombia": { "home": 100, "away": 100 },
      "Uzbekistan__DR Congo": { "home": 100, "away": 100 },
      "Uzbekistan__Colombia": { "home": 1, "away": 3 },
      "DR Congo__Colombia": { "home": 100, "away": 100 }
    },
    "L": {
      "England__Ghana": { "home": 100, "away": 100 },
      "England__Croatia": { "home": 4, "away": 2 },
      "England__Panama": { "home": 100, "away": 100 },
      "Ghana__Croatia": { "home": 100, "away": 100 },
      "Ghana__Panama": { "home": 1, "away": 0 },
      "Croatia__Panama": { "home": 100, "away": 100 }
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
