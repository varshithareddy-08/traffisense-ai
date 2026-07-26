import { Brain, Clock } from "lucide-react";

const timeline = [
  {
    time: "Now",
    traffic: "Low",
    color: "bg-green-500",
  },
  {
    time: "10 mins",
    traffic: "Moderate",
    color: "bg-yellow-400",
  },
  {
    time: "20 mins",
    traffic: "Heavy",
    color: "bg-orange-500",
  },
  {
    time: "30 mins",
    traffic: "Severe",
    color: "bg-red-500",
  },
];

function PredictionTimeline() {
  return (
    <div className="mt-10 bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-xl">

      <div className="flex items-center gap-3 mb-8">
        <Brain className="text-cyan-400" size={32} />

        <div>
          <h2 className="text-3xl font-bold text-white">
            AI Traffic Forecast
          </h2>

          <p className="text-slate-400">
            Predicted traffic conditions for the next 30 minutes.
          </p>
        </div>
      </div>

      <div className="space-y-6">

        {timeline.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-slate-800 rounded-2xl p-5 border border-slate-700"
          >
            <div className="flex items-center gap-4">

              <Clock className="text-cyan-400" />

              <div>
                <p className="text-white font-semibold">
                  {item.time}
                </p>

                <p className="text-slate-400 text-sm">
                  Predicted Traffic
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3">

              <div
                className={`w-4 h-4 rounded-full ${item.color}`}
              />

              <span className="text-white font-semibold">
                {item.traffic}
              </span>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default PredictionTimeline;