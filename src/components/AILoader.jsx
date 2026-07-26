import { motion } from "framer-motion";

const steps = [
  "Loading GPS Data...",
  "Reading Weather...",
  "Checking Road Events...",
  "Analyzing Traffic Cameras...",
  "Predicting Congestion...",
  "Ranking Routes..."
];

function AILoader() {
  return (
    <div className="fixed inset-0 bg-slate-950/90 flex justify-center items-center z-50">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-slate-900 rounded-3xl border border-cyan-500 p-10 w-[500px] shadow-2xl"
      >

        <h2 className="text-3xl text-cyan-400 font-bold mb-8">
          🤖 TraffiSense AI
        </h2>

        <p className="text-slate-300 mb-8">
          Analyzing your journey...
        </p>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.6 }}
            className="text-green-400 text-lg mb-4"
          >
            ✔ {step}
          </motion.div>
        ))}

      </motion.div>

    </div>
  );
}

export default AILoader;