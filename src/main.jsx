import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import "leaflet/dist/leaflet.css";

import { TrafficProvider } from "./context/TrafficContext";

ReactDOM.createRoot(document.getElementById("root")).render(

<TrafficProvider>

<App/>

</TrafficProvider>

);