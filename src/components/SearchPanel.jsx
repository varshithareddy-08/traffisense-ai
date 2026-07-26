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

      const bestRoute = selectedJourney.options[0];

      setPrediction((prev) => ({
        ...prev,
        routes: selectedJourney.options,
        selectedRoute: 0,

        eta: bestRoute.eta,
        confidence: bestRoute.confidence,
        traffic: bestRoute.traffic,
        weather: bestRoute.weather,
        event: bestRoute.event,

        routeType: bestRoute.name,
        distance: bestRoute.distance,
        fuelSaved: bestRoute.fuelSaved,
        reason: bestRoute.reason,

        source,
        destination,

        routeRoads: bestRoute.roads,
        routeGeometry: bestRoute.coordinates,

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

      <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-800 p-5 sm:p-6 lg:p-8">

        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Smart Route Planner
        </h2>

        <p className="text-slate-400 mt-2 text-sm md:text-base">
          AI predicts the safest and fastest route before traffic builds up.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

          <div>
            <label className="flex items-center gap-2 text-slate-300 mb-2 font-medium">
              <MapPin size={18} />
              Source
            </label>

            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 text-white outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {locations.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-slate-300 mb-2 font-medium">
              <Navigation size={18} />
              Destination
            </label>

            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 text-white outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {locations.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
          </div>

        </div>

        <button
          onClick={handlePredict}
          className="mt-8 w-full md:w-auto inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl text-slate-900 font-bold shadow-lg"
        >
          <Search size={20} />
          Predict Smart Route
        </button>

      </div>
    </>
  );
}

export default SearchPanel;