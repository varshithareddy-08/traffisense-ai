import { useContext, useState, useEffect, useRef } from "react";
import { TrafficContext } from "../context/TrafficContext";
import { Volume2, Square } from "lucide-react";

function VoiceAssistant() {
  const { prediction } = useContext(TrafficContext);

  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);

  const stopRef = useRef(false);
  const timeoutRef = useRef(null);

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();

    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const startNavigation = () => {
    if (!prediction.navigationSteps?.length) {
      alert("Please predict a route first.");
      return;
    }

    // Stop any previous speech
    window.speechSynthesis.cancel();

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    stopRef.current = false;

    setSpeaking(true);

    const instructions = [
      `Navigation started from ${prediction.source}.`,
      ...prediction.navigationSteps.map((step) => step.instruction),
      `You have reached ${prediction.destination}. Thank you for using TraffiSense AI.`,
    ];

    let currentIndex = 0;

    const speakNext = () => {
      if (stopRef.current) {
        setSpeaking(false);
        return;
      }

      if (currentIndex >= instructions.length) {
        setSpeaking(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(
        instructions[currentIndex]
      );

      // Prefer English voice
      const englishVoice =
        voices.find((voice) => voice.lang.startsWith("en")) || voices[0];

      if (englishVoice) {
        utterance.voice = englishVoice;
      }

      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onend = () => {
        if (stopRef.current) {
          setSpeaking(false);
          return;
        }

        currentIndex++;

        timeoutRef.current = setTimeout(() => {
          speakNext();
        }, 700);
      };

      utterance.onerror = () => {
        setSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    };

    speakNext();
  };

  const stopNavigation = () => {
    stopRef.current = true;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    window.speechSynthesis.cancel();

    setSpeaking(false);
  };

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-white">
        🎤 AI Voice Navigation
      </h2>

      <p className="text-slate-400 mt-2">
        Listen to turn-by-turn navigation powered by TraffiSense AI.
      </p>

      <div className="flex gap-4 mt-6">

        <button
          onClick={startNavigation}
          disabled={speaking}
          className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 transition-all duration-300 px-6 py-3 rounded-xl text-slate-900 font-bold flex items-center gap-2"
        >
          <Volume2 size={20} />
          {speaking ? "Speaking..." : "Start Voice Guidance"}
        </button>

        <button
          onClick={stopNavigation}
          disabled={!speaking}
          className="bg-red-500 hover:bg-red-400 disabled:opacity-50 transition-all duration-300 px-6 py-3 rounded-xl text-white font-bold flex items-center gap-2"
        >
          <Square size={18} />
          Stop
        </button>

      </div>

    </div>
  );
}

export default VoiceAssistant;