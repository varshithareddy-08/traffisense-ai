import { useContext } from "react";
import { TrafficContext } from "../context/TrafficContext";
import {
  Rocket,
  Leaf,
  ShieldCheck,
  Clock,
  Fuel,
  MapPinned,
  CheckCircle2,
} from "lucide-react";

function RouteCards() {
  const { prediction, setPrediction } = useContext(TrafficContext);

  const icons = [
    <Rocket size={30} />,
    <Leaf size={30} />,
    <ShieldCheck size={30} />,
  ];
const handleSelectRoute = (route, index) => {
  setPrediction((prev) => ({
    ...prev,

    // Selected Card
    selectedRoute: index,

    // Recommendation
    routeType: route.name,
    eta: route.eta,
    distance: route.distance,
    traffic: route.traffic,
    weather: route.weather,
    event: route.event,
    confidence: route.confidence,
    fuelSaved: route.fuelSaved,
    reason: route.reason,

    // Roads
    routeRoads: [...route.roads],

    // Map
    routeGeometry: [...route.coordinates],

    // Navigation
    navigationSteps: route.roads.map((road, i) => ({
      instruction:
        i === 0
          ? `Start from ${prediction.source} via ${road}.`
          : i === route.roads.length - 1
          ? `Continue on ${road}. You have reached ${prediction.destination}.`
          : `Continue via ${road}.`,
      road,
      distance:
        i === route.roads.length - 1
          ? "Destination"
          : `${Math.round(
              parseFloat(route.distance) / route.roads.length
            )} km`,
    })),
  }));
};

  return (
    <div className="mt-10">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-3xl font-bold text-white">
            Route Suggestions
          </h2>

          <p className="text-slate-400 mt-2">
            AI ranked these routes based on traffic prediction.
          </p>
        </div>

      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        {prediction.routes.map((route, index) => (

          <div
            key={route.id}
            onClick={() => handleSelectRoute(route, index)}
            className={`cursor-pointer rounded-3xl p-7 transition-all duration-300 border shadow-xl hover:-translate-y-2

            ${
              prediction.selectedRoute === index
                ? "border-cyan-400 bg-gradient-to-br from-cyan-900/40 to-slate-900 scale-105"
                : "border-slate-800 bg-slate-900 hover:border-cyan-700"
            }`}
          >

            {/* Header */}

            <div className="flex justify-between items-center">

              <div className="text-cyan-400">
                {icons[index]}
              </div>

              {prediction.selectedRoute === index && (

                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">

                  <CheckCircle2 size={14} />

                  Selected

                </span>

              )}

            </div>

            {/* Name */}

            <h2 className="text-2xl text-white font-bold mt-5">

              {route.name}

            </h2>

            {/* ETA */}

            <div className="flex items-center gap-3 mt-6">

              <Clock className="text-cyan-400" size={20} />

              <div>

                <p className="text-slate-400 text-sm">

                  ETA

                </p>

                <p className="text-white font-semibold">

                  {route.eta}

                </p>

              </div>

            </div>

            {/* Distance */}

            <div className="flex items-center gap-3 mt-5">

              <MapPinned className="text-cyan-400" size={20} />

              <div>

                <p className="text-slate-400 text-sm">

                  Distance

                </p>

                <p className="text-white font-semibold">

                  {route.distance}

                </p>

              </div>

            </div>

            {/* Fuel */}

            <div className="flex items-center gap-3 mt-5">

              <Fuel className="text-green-400" size={20} />

              <div>

                <p className="text-slate-400 text-sm">

                  Fuel Saved

                </p>

                <p className="text-green-400 font-semibold">

                  {route.fuelSaved}

                </p>

              </div>

            </div>

            {/* Traffic */}

            <div className="mt-6">

              <div className="flex justify-between text-sm">

                <span className="text-slate-400">

                  Traffic

                </span>

                <span className="text-white">

                  {route.traffic}

                </span>

              </div>

              <div className="w-full bg-slate-700 rounded-full h-2 mt-2">

                <div
                  className={`h-2 rounded-full ${
  route.traffic === "Low"
    ? "bg-green-500 w-1/4"
    : route.traffic === "Moderate"
    ? "bg-yellow-500 w-2/4"
    : "bg-red-500 w-full"

                  }`}
                />

              </div>

            </div>

            {/* Button */}

            <button
              className={`mt-8 w-full rounded-xl py-3 font-bold transition

              ${
                prediction.selectedRoute === index
                  ? "bg-cyan-500 text-slate-900"
                  : "bg-slate-800 text-white hover:bg-cyan-500 hover:text-slate-900"
              }`}
            >

              {prediction.selectedRoute === index
                ? "Selected Route"
                : "Choose Route"}

            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RouteCards;