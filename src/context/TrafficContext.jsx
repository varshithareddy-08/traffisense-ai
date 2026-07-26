import { createContext, useState } from "react";

export const TrafficContext = createContext();

export function TrafficProvider({ children }) {
  const [prediction, setPrediction] = useState({
    // AI Prediction
    eta: "--",
    confidence: "--",
    traffic: "Waiting...",
    weather: "--",
    event: "--",

    // Recommendation
    routeType: "--",
    distance: "--",
    fuelSaved: "--",
    reason: "Click Predict Smart Route",

    // User Input
    source: "",
    destination: "",

    // Coordinates
    start: null,
    end: null,

    // Route Geometry
    routeGeometry: [],

    // Turn-by-turn Navigation
    navigationSteps: [],

    // Recommended Roads
    routeRoads: [],

    // Selected Route
    selectedRoute: 0,

    // Route Options (loaded from routes.js after prediction)
    routes: [],
  });

  return (
    <TrafficContext.Provider
      value={{
        prediction,
        setPrediction,
      }}
    >
      {children}
    </TrafficContext.Provider>
  );
}