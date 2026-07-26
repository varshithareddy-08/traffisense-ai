import { useContext } from "react";
import { TrafficContext } from "../context/TrafficContext";
import {
  Clock,
  Route,
  Fuel,
  ShieldCheck,
  CloudRain,
  TrafficCone,
  CalendarDays,
  Sparkles,
} from "lucide-react";

function RecommendationCard() {
  const { prediction } = useContext(TrafficContext);

  return (
    <div className="mt-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-6">

        <p className="text-cyan-100 uppercase tracking-widest text-sm">

          AI Decision Engine

        </p>

        <h2 className="text-3xl font-bold text-white mt-2">

          🤖 Smart Recommendation

        </h2>

        <p className="text-cyan-100 mt-2">

          Based on predicted traffic, weather and nearby events.

        </p>

      </div>

      <div className="p-8">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-slate-400">

              Recommended Route

            </p>

            <h1 className="text-4xl font-bold text-white mt-2">

              {prediction.routeType}

            </h1>

          </div>

          <div className="bg-cyan-500/20 rounded-full p-4">

            <Sparkles
              className="text-cyan-400"
              size={32}
            />

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-5 mt-10">

          <Card
            icon={<Clock />}
            title="ETA"
            value={prediction.eta}
          />

          <Card
            icon={<Route />}
            title="Distance"
            value={prediction.distance}
          />

          <Card
            icon={<Fuel />}
            title="Fuel Saved"
            value={prediction.fuelSaved}
          />

          <Card
            icon={<ShieldCheck />}
            title="Confidence"
            value={prediction.confidence}
          />

        </div>

        {/* Prediction */}

        <div className="grid md:grid-cols-3 gap-5 mt-8">

          <Card
            icon={<TrafficCone />}
            title="Traffic"
            value={prediction.traffic}
          />

          <Card
            icon={<CloudRain />}
            title="Weather"
            value={prediction.weather}
          />

          <Card
            icon={<CalendarDays />}
            title="Event"
            value={prediction.event}
          />

        </div>

        {/* Roads */}

        <div className="mt-10">

          <h3 className="text-white text-xl font-bold">

            Recommended Roads

          </h3>

          <div className="grid md:grid-cols-2 gap-4 mt-5">

            {prediction.routeRoads?.map((road, index) => (

              <div
                key={index}
                className="bg-slate-800 hover:bg-slate-700 transition rounded-xl p-4 text-white border border-slate-700"
              >

                {index + 1}. {road}

              </div>

            ))}

          </div>

        </div>

        {/* AI Reason */}

        <div className="mt-10 bg-cyan-950/40 border border-cyan-800 rounded-2xl p-6">

          <h3 className="text-cyan-300 font-bold text-lg">

            🧠 Why AI chose this route

          </h3>

          <p className="text-slate-300 leading-8 mt-4">

            {prediction.reason}

          </p>

        </div>

      </div>

    </div>
  );
}

function Card({ icon, title, value }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">

      <div className="text-cyan-400">

        {icon}

      </div>

      <p className="text-slate-400 mt-3">

        {title}

      </p>

      <h2 className="text-white text-xl font-bold mt-1">

        {value}

      </h2>

    </div>
  );
}

export default RecommendationCard;