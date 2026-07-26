const routes = [
  {
    source: "Kempegowda Airport",
    destination: "MG Road",

    options: [
      {
        id: 1,
        name: "🚀 Fastest Route",

        eta: "18 mins",
        distance: "22.4 km",

        traffic: "Low",

        weather: "Cloudy",

        event: "Concert Nearby",

        confidence: "94%",

        fuelSaved: "0.8 L",

        reason:
          "Heavy congestion is predicted near Hebbal Flyover due to an upcoming concert. AI recommends this route to save approximately 12 minutes.",

        roads: [
          "Airport Road",
          "Bellary Road",
          "Hebbal Flyover",
          "Race Course Road",
          "MG Road",
        ],

        coordinates: [
          [13.1986, 77.7066],
          [13.1450, 77.6650],
          [13.0358, 77.5970],
          [12.9900, 77.5925],
          [12.9758, 77.6055],
        ],
      },

      {
        id: 2,
        name: "🌱 Fuel Efficient",

        eta: "21 mins",
        distance: "23.7 km",

        traffic: "Moderate",

        weather: "Cloudy",

        event: "No Major Event",

        confidence: "96%",

        fuelSaved: "1.3 L",

        reason:
          "Although slightly longer, this route has fewer traffic signals and smoother traffic flow, reducing fuel consumption.",

        roads: [
          "Airport Road",
          "Yelahanka",
          "Outer Ring Road",
          "Indiranagar",
          "MG Road",
        ],

        coordinates: [
          [13.1986, 77.7066],
          [13.1000, 77.5960],
          [13.0200, 77.6400],
          [12.9780, 77.6400],
          [12.9758, 77.6055],
        ],
      },

      {
        id: 3,
        name: "🛡️ Safest Route",

        eta: "25 mins",
        distance: "25.6 km",

        traffic: "Low",

        weather: "Light Rain",

        event: "Road Maintenance",

        confidence: "92%",

        fuelSaved: "0.9 L",

        reason:
          "This route avoids accident-prone roads and expected waterlogging near Hebbal Flyover.",

        roads: [
          "Airport Road",
          "Yeshwanthpur",
          "Malleshwaram",
          "Race Course Road",
          "MG Road",
        ],

        coordinates: [
          [13.1986, 77.7066],
          [13.0280, 77.5550],
          [13.0060, 77.5700],
          [12.9900, 77.5925],
          [12.9758, 77.6055],
        ],
      },
    ],
  },

  {
    source: "MG Road",
    destination: "Electronic City",

    options: [
      {
        id: 1,
        name: "🚀 Fastest Route",

        eta: "25 mins",
        distance: "18 km",

        traffic: "Moderate",

        weather: "Sunny",

        event: "Tech Conference",

        confidence: "95%",

        fuelSaved: "0.7 L",

        reason:
          "AI predicts increasing congestion near Silk Board after 20 minutes. Leaving now minimizes delays.",

        roads: [
          "Richmond Road",
          "Hosur Road",
          "Silk Board",
          "Electronic City Flyover",
        ],

        coordinates: [
          [12.9758, 77.6055],
          [12.9600, 77.6100],
          [12.9175, 77.6238],
          [12.8399, 77.6770],
        ],
      },

      {
        id: 2,
        name: "🌱 Fuel Efficient",

        eta: "29 mins",
        distance: "19.6 km",

        traffic: "Low",

        weather: "Sunny",

        event: "No Event",

        confidence: "97%",

        fuelSaved: "1.1 L",

        reason:
          "Smoother traffic flow reduces braking and acceleration, improving fuel efficiency.",

        roads: [
          "Richmond Road",
          "BTM Layout",
          "Outer Ring Road",
          "Electronic City",
        ],

        coordinates: [
          [12.9758, 77.6055],
          [12.9490, 77.6110],
          [12.9000, 77.6400],
          [12.8399, 77.6770],
        ],
      },

      {
        id: 3,
        name: "🛡️ Safest Route",

        eta: "33 mins",
        distance: "21.2 km",

        traffic: "Low",

        weather: "Cloudy",

        event: "Road Maintenance",

        confidence: "93%",

        fuelSaved: "0.8 L",

        reason:
          "Avoids ongoing maintenance near Silk Board and provides safer driving conditions.",

        roads: [
          "Richmond Road",
          "Jayanagar",
          "Bannerghatta Road",
          "Electronic City",
        ],

        coordinates: [
          [12.9758, 77.6055],
          [12.9290, 77.5930],
          [12.8890, 77.6000],
          [12.8399, 77.6770],
        ],
      },
    ],
  },

  {
    source: "Electronic City",
    destination: "Kempegowda Airport",

    options: [
      {
        id: 1,
        name: "🚀 Fastest Route",

        eta: "42 mins",

        distance: "42 km",

        traffic: "Moderate",

        weather: "Cloudy",

        event: "No Event",

        confidence: "94%",

        fuelSaved: "0.9 L",

        reason:
          "Fastest available route considering predicted traffic over the next 30 minutes.",

        roads: [
          "Electronic City Flyover",
          "Silk Board",
          "Hebbal",
          "Airport Road",
        ],

        coordinates: [
          [12.8399, 77.6770],
          [12.9175, 77.6238],
          [13.0358, 77.5970],
          [13.1986, 77.7066],
        ],
      },

      {
        id: 2,
        name: "🌱 Fuel Efficient",

        eta: "47 mins",

        distance: "44 km",

        traffic: "Low",

        weather: "Cloudy",

        event: "No Event",

        confidence: "97%",

        fuelSaved: "1.5 L",

        reason:
          "Maintains steady speeds with fewer traffic signals, reducing fuel usage.",

        roads: [
          "Electronic City",
          "Outer Ring Road",
          "Yelahanka",
          "Airport Road",
        ],

        coordinates: [
          [12.8399, 77.6770],
          [12.9000, 77.6400],
          [13.1000, 77.5960],
          [13.1986, 77.7066],
        ],
      },

      {
        id: 3,
        name: "🛡️ Safest Route",

        eta: "51 mins",

        distance: "46 km",

        traffic: "Low",

        weather: "Rain",

        event: "Road Maintenance",

        confidence: "92%",

        fuelSaved: "1.0 L",

        reason:
          "Avoids slippery flyovers and accident-prone roads during rainfall.",

        roads: [
          "Electronic City",
          "Bannerghatta Road",
          "Malleshwaram",
          "Airport Road",
        ],

        coordinates: [
          [12.8399, 77.6770],
          [12.8890, 77.6000],
          [13.0060, 77.5700],
          [13.1986, 77.7066],
        ],
      },
    ],
  },
,
{
  source: "Electronic City",
  destination: "MG Road",

  options: [
    {
      id: 1,
      name: "🚀 Fastest Route",
      eta: "24 mins",
      distance: "18 km",
      traffic: "Moderate",
      weather: "Sunny",
      event: "Tech Conference",
      confidence: "95%",
      fuelSaved: "0.7 L",
      reason:
        "AI predicts increasing congestion near Silk Board after 20 minutes. Leaving now minimizes delays.",

      roads: [
        "Electronic City Flyover",
        "Silk Board",
        "Hosur Road",
        "Richmond Road",
        "MG Road",
      ],

      coordinates: [
        [12.8399,77.6770],
        [12.9175,77.6238],
        [12.9400,77.6200],
        [12.9600,77.6100],
        [12.9758,77.6055],
      ],
    },

    {
      id:2,
      name:"🌱 Fuel Efficient",

      eta:"28 mins",
      distance:"19.4 km",

      traffic:"Low",

      weather:"Sunny",

      event:"No Event",

      confidence:"97%",

      fuelSaved:"1.1 L",

      reason:"Steady traffic flow helps reduce fuel consumption.",

      roads:[
        "Electronic City",
        "Outer Ring Road",
        "BTM Layout",
        "Richmond Road",
        "MG Road"
      ],

      coordinates:[
        [12.8399,77.6770],
        [12.9000,77.6400],
        [12.9490,77.6110],
        [12.9600,77.6100],
        [12.9758,77.6055]
      ]
    },

    {
      id:3,
      name:"🛡️ Safest Route",

      eta:"31 mins",

      distance:"21 km",

      traffic:"Low",

      weather:"Cloudy",

      event:"Road Maintenance",

      confidence:"93%",

      fuelSaved:"0.8 L",

      reason:"Avoids accident-prone roads around Silk Board.",

      roads:[
        "Electronic City",
        "Bannerghatta Road",
        "Jayanagar",
        "Richmond Road",
        "MG Road"
      ],

      coordinates:[
        [12.8399,77.6770],
        [12.8890,77.6000],
        [12.9290,77.5930],
        [12.9600,77.6100],
        [12.9758,77.6055]
      ]
    }
  ]
},

{
  source:"MG Road",
  destination:"Kempegowda Airport",

  options:[
    {
      id:1,

      name:"🚀 Fastest Route",

      eta:"19 mins",

      distance:"22 km",

      traffic:"Low",

      weather:"Cloudy",

      event:"Concert Nearby",

      confidence:"94%",

      fuelSaved:"0.8 L",

      reason:"Fastest route with minimum congestion.",

      roads:[
        "MG Road",
        "Race Course Road",
        "Hebbal Flyover",
        "Bellary Road",
        "Airport Road"
      ],

      coordinates:[
        [12.9758,77.6055],
        [12.9900,77.5925],
        [13.0358,77.5970],
        [13.1450,77.6650],
        [13.1986,77.7066]
      ]
    },

    {
      id:2,

      name:"🌱 Fuel Efficient",

      eta:"22 mins",

      distance:"23 km",

      traffic:"Moderate",

      weather:"Cloudy",

      event:"No Event",

      confidence:"96%",

      fuelSaved:"1.3 L",

      reason:"Saves fuel by avoiding frequent traffic signals.",

      roads:[
        "MG Road",
        "Indiranagar",
        "Outer Ring Road",
        "Yelahanka",
        "Airport Road"
      ],

      coordinates:[
        [12.9758,77.6055],
        [12.9780,77.6400],
        [13.0200,77.6400],
        [13.1000,77.5960],
        [13.1986,77.7066]
      ]
    },

    {
      id:3,

      name:"🛡️ Safest Route",

      eta:"26 mins",

      distance:"25 km",

      traffic:"Low",

      weather:"Light Rain",

      event:"Road Work",

      confidence:"92%",

      fuelSaved:"0.9 L",

      reason:"Avoids waterlogged roads near Hebbal.",

      roads:[
        "MG Road",
        "Race Course Road",
        "Malleshwaram",
        "Yeshwanthpur",
        "Airport Road"
      ],

      coordinates:[
        [12.9758,77.6055],
        [12.9900,77.5925],
        [13.0060,77.5700],
        [13.0280,77.5550],
        [13.1986,77.7066]
      ]
    }
  ]
},

{
  source:"Kempegowda Airport",
  destination:"Electronic City",

  options:[
    {
      id:1,

      name:"🚀 Fastest Route",

      eta:"39 mins",

      distance:"41 km",

      traffic:"Moderate",

      weather:"Cloudy",

      event:"Tech Conference",

      confidence:"94%",

      fuelSaved:"0.9 L",

      reason:"Fastest route considering predicted congestion.",

      roads:[
        "Airport Road",
        "Hebbal",
        "Silk Board",
        "Electronic City Flyover"
      ],

      coordinates:[
        [13.1986,77.7066],
        [13.0358,77.5970],
        [12.9175,77.6238],
        [12.8399,77.6770]
      ]
    },

    {
      id:2,

      name:"🌱 Fuel Efficient",

      eta:"45 mins",

      distance:"43 km",

      traffic:"Low",

      weather:"Cloudy",

      event:"No Event",

      confidence:"97%",

      fuelSaved:"1.5 L",

      reason:"Consumes the least fuel due to smoother traffic.",

      roads:[
        "Airport Road",
        "Yelahanka",
        "Outer Ring Road",
        "Electronic City"
      ],

      coordinates:[
        [13.1986,77.7066],
        [13.1000,77.5960],
        [12.9000,77.6400],
        [12.8399,77.6770]
      ]
    },

    {
      id:3,

      name:"🛡️ Safest Route",

      eta:"49 mins",

      distance:"45 km",

      traffic:"Low",

      weather:"Rain",

      event:"Road Maintenance",

      confidence:"92%",

      fuelSaved:"1.0 L",

      reason:"Safest route during rainfall conditions.",

      roads:[
        "Airport Road",
        "Malleshwaram",
        "Bannerghatta Road",
        "Electronic City"
      ],

      coordinates:[
        [13.1986,77.7066],
        [13.0060,77.5700],
        [12.8890,77.6000],
        [12.8399,77.6770]
      ]
    }
  ]
}
];

export default routes;