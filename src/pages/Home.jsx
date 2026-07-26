import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-10">
        <h2 className="text-4xl font-bold text-white">
          Welcome to TraffiSense AI
        </h2>

        <p className="text-slate-400 mt-3 text-lg">
          Predict traffic before it happens.
        </p>
      </div>
    </div>
  );
}

export default Home;