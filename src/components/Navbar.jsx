import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400">
              🚦 TraffiSense AI
            </h1>

            <p className="hidden sm:block text-slate-400 text-sm">
              Predictive Traffic Intelligence
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-slate-300 font-medium">

            <button
              onClick={() => scrollToSection("dashboard")}
              className="hover:text-cyan-400 transition-colors"
            >
              Dashboard
            </button>

            <button
              onClick={() => scrollToSection("analytics")}
              className="hover:text-cyan-400 transition-colors"
            >
              Analytics
            </button>

            <button
              onClick={() => scrollToSection("alerts")}
              className="hover:text-cyan-400 transition-colors"
            >
              Alerts
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-5 border-t border-slate-800">

            <div className="flex flex-col mt-4 gap-3">

              <button
                onClick={() => scrollToSection("dashboard")}
                className="text-left text-slate-300 hover:text-cyan-400"
              >
                Dashboard
              </button>

              <button
                onClick={() => scrollToSection("analytics")}
                className="text-left text-slate-300 hover:text-cyan-400"
              >
                Analytics
              </button>

              <button
                onClick={() => scrollToSection("alerts")}
                className="text-left text-slate-300 hover:text-cyan-400"
              >
                Alerts
              </button>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;