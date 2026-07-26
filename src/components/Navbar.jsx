import { Bell, UserCircle } from "lucide-react";

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div>

          <h1 className="text-3xl font-bold text-cyan-400">
            🚦 TraffiSense AI
          </h1>

          <p className="text-slate-400 text-sm">
            Predictive Traffic Intelligence
          </p>

        </div>

        <div className="flex gap-8 text-slate-300 font-medium">

          <button
            onClick={() => scrollToSection("dashboard")}
            className="hover:text-cyan-400 transition"
          >
            Dashboard
          </button>

          <button
            onClick={() => scrollToSection("analytics")}
            className="hover:text-cyan-400 transition"
          >
            Analytics
          </button>

          <button
            onClick={() => scrollToSection("alerts")}
            className="hover:text-cyan-400 transition"
          >
            Alerts
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;