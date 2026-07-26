import { useState, useContext } from "react";
import { Search, MapPin, Navigation } from "lucide-react";
import AILoader from "./AILoader";
import { TrafficContext } from "../context/TrafficContext";
import routes from "../data/routes";

function SearchPanel() {
  const [loading, setLoading] = useState(false);

  const [source, setSource] = useState("Kempegowda Airport");
  const [destination, setDestination] = useState("MG Road");

  const { setPrediction } = useContext(TrafficContext);

  // Get all unique locations
  const locations = [
    ...new Set(routes.flatMap((route) => [route.source, route.destination])),
  ];

  const handlePredict = () => {
    if (!source || !destination) {
      alert("Please select both Source and Destination.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // Find selected journey
      console.log("Routes:", routes);

const selectedJourney = routes.find(
  (route) =>
    route &&
    route.source === source &&
    route.destination === destination
);

      if (!selectedJourney) {
        alert("No demo route available for this journey.");
        setLoading(false);
        return;
      }

      // Default recommendation = Fastest Route
      const bestRoute = selectedJourney.options[0];

      setPrediction((prev) => ({
        ...prev,

        // Save all available routes
        routes: selectedJourney.options,

        selectedRoute: 0,

        // AI Prediction
        eta: bestRoute.eta,
        confidence: bestRoute.confidence,
        traffic: bestRoute.traffic,
        weather: bestRoute.weather,
        event: bestRoute.event,

        // Recommendation
        routeType: bestRoute.name,
        distance: bestRoute.distance,
        fuelSaved: bestRoute.fuelSaved,
        reason: bestRoute.reason,

        // User Input
        source,
        destination,

        // Roads
        routeRoads: bestRoute.roads,

        // Map
        routeGeometry: bestRoute.coordinates,

        // Navigation
        navigationSteps: bestRoute.roads.map((road, index) => ({
          instruction:
            index === 0
              ? `Head towards ${road}.`
              : index === bestRoute.roads.length - 1
              ? `Continue on ${road}. Your destination is just ahead.`
              : `Continue via ${road}.`,
          road,
          distance: "2 km",
        })),
      }));

      setLoading(false);
    }, 2000);
  };

  return (
    <>
      {loading && <AILoader />}

      <div className="bg-slate-900 rounded-3xl shadow-xl p-8 mt-8 border border-slate-800">

        <h2 className="text-3xl text-white font-bold">
          Smart Route Planner
        </h2>

        <p className="text-slate-400 mt-2">
          AI predicts the safest and fastest route before traffic builds up.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div>
            <label className="text-slate-300 flex gap-2 mb-2">
              <MapPin />
              Source
            </label>

            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full rounded-xl bg-slate-800 p-4 text-white border border-slate-700"
            >
              {locations.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-slate-300 flex gap-2 mb-2">
              <Navigation />
              Destination
            </label>

            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full rounded-xl bg-slate-800 p-4 text-white border border-slate-700"
            >
              {locations.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
          </div>

        </div>

        <button
          onClick={handlePredict}
          className="mt-8 bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl text-slate-900 font-bold flex items-center gap-3 shadow-lg"
        >
          <Search />
          Predict Smart Route
        </button>

      </div>
    </>
  );
}

export default SearchPanel;