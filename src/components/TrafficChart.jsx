import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function TrafficChart() {

  const data = {
    labels: ["Now","10m","20m","30m","40m","50m"],

    datasets:[
      {
        label:"Traffic Prediction",

        data:[30,40,58,82,65,42],

        borderColor:"#06b6d4",

        tension:0.4,

        fill:false
      }
    ]
  }

  return(

    <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

      <h2 className="text-white text-xl font-bold mb-6">

        📊 Traffic Prediction

      </h2>

      <Line data={data}/>

    </div>

  )

}

export default TrafficChart;