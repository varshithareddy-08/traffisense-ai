import Navbar from "../components/Navbar";
import SearchPanel from "../components/SearchPanel";
import MapView from "../components/MapView";
import RouteCards from "../components/RouteCards";
import RecommendationCard from "../components/RecommendationCard";
import PredictionTimeline from "../components/PredictionTimeline";
import NavigationSteps from "../components/NavigationSteps";
import VoiceAssistant from "../components/VoiceAssistant";
import AlertPanel from "../components/AlertPanel";
import TrafficChart from "../components/TrafficChart";
import WeatherCard from "../components/WeatherCard";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 space-y-8 lg:space-y-12">

        {/* ================= Dashboard ================= */}

        <section id="dashboard">

          <SearchPanel />

        </section>

        {/* ================= Map ================= */}

        <section>

          <div className="mb-6">

            <h2 className="text-3xl font-bold text-white">
              🗺 AI Predicted Route
            </h2>

            <p className="text-slate-400 mt-2">
              Visual route generated using predicted traffic,
              weather and nearby events.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2">

              <MapView />

            </div>

            <div>

              <WeatherCard />

            </div>

          </div>

        </section>

        {/* ================= Route Suggestions ================= */}

        <section>

          <RouteCards />

        </section>

        {/* ================= Recommendation ================= */}

        <section>

          <RecommendationCard />

        </section>

        {/* ================= Navigation ================= */}

        <section>

          <div className="mb-6">

            <h2 className="text-3xl font-bold text-white">
              🧭 Navigation Assistant
            </h2>

            <p className="text-slate-400 mt-2">
              Follow turn-by-turn navigation with optional AI voice guidance.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            <NavigationSteps />

            <VoiceAssistant />

          </div>

        </section>

        {/* ================= Analytics ================= */}

        <section id="analytics">

          <div className="mb-6">

            <h2 className="text-3xl font-bold text-white">
              📊 AI Forecast & Analytics
            </h2>

            <p className="text-slate-400 mt-2">
              Understand why AI selected the recommended route using
              traffic prediction, weather analysis and historical trends.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            <PredictionTimeline />

            <TrafficChart />

          </div>

        </section>

        {/* ================= Alerts ================= */}

        <section id="alerts">

          <div className="mb-6">

            <h2 className="text-3xl font-bold text-white">
              🚨 Smart Alerts
            </h2>

            <p className="text-slate-400 mt-2">
              Live warnings and important traffic notifications.
            </p>

          </div>

          <AlertPanel />

        </section>

      </div>

    </div>
  );
}

export default Dashboard;