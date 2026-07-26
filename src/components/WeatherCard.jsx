import { CloudRain, Sun } from "lucide-react";

function WeatherCard() {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
      <h2 className="text-white text-xl font-bold mb-5">
        🌦 Weather Forecast
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">

          <div className="flex gap-3">

            <Sun className="text-yellow-400"/>

            <span className="text-white">

              Temperature

            </span>

          </div>

          <span className="text-cyan-400">

            28°C

          </span>

        </div>

        <div className="flex justify-between">

          <div className="flex gap-3">

            <CloudRain className="text-blue-400"/>

            <span className="text-white">

              Rain Chance

            </span>

          </div>

          <span className="text-green-400">

            30%

          </span>

        </div>

      </div>

    </div>
  );
}

export default WeatherCard;