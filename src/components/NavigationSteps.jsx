import { useContext } from "react";
import { TrafficContext } from "../context/TrafficContext";
import {
  Navigation,
  MapPinned,
  ArrowRight,
  Flag,
  Circle,
} from "lucide-react";

function NavigationSteps() {
  const { prediction } = useContext(TrafficContext);

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl p-6 mt-8">

      {/* Header */}

      <div className="flex items-center gap-3">

        <Navigation className="text-cyan-400" size={28} />

        <div>
          <h2 className="text-2xl font-bold text-white">
            Turn-by-Turn Navigation
          </h2>

          <p className="text-slate-400 text-sm">
            Follow the AI recommended path.
          </p>
        </div>

      </div>

      {prediction.navigationSteps?.length ? (

        <div className="mt-8">

          {prediction.navigationSteps.map((step, index) => (

            <div
              key={index}
              className="flex gap-5 relative pb-8 last:pb-0"
            >

              {/* Timeline */}

              <div className="flex flex-col items-center">

                {index === prediction.navigationSteps.length - 1 ? (

                  <Flag
                    className="text-green-400"
                    size={20}
                  />

                ) : (

                  <>
                    <Circle
                      fill="#06b6d4"
                      className="text-cyan-400"
                      size={14}
                    />

                    <div className="w-[2px] flex-1 bg-slate-700 mt-2"></div>
                  </>

                )}

              </div>

              {/* Step */}

              <div className="flex-1 bg-slate-800 rounded-xl border border-slate-700 p-4 hover:border-cyan-500 transition">

                <div className="flex justify-between items-center">

                  <h3 className="text-white font-semibold">

                    {step.instruction}

                  </h3>

                  <ArrowRight
                    className="text-cyan-400"
                    size={18}
                  />

                </div>

                <p className="text-slate-400 mt-2">

                  {step.road}

                </p>

                <div className="mt-3 flex justify-between text-sm">

                  <span className="text-cyan-400">

                    Step {index + 1}

                  </span>

                  <span className="text-slate-400">

                    {step.distance}

                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      ) : (

        <div className="text-center py-12">

          <MapPinned
            size={55}
            className="mx-auto text-slate-500"
          />

          <h3 className="text-white mt-4 text-lg font-semibold">
            No Route Selected
          </h3>

          <p className="text-slate-400 mt-2">
            Predict a smart route to view turn-by-turn navigation.
          </p>

        </div>

      )}

    </div>
  );
}

export default NavigationSteps;