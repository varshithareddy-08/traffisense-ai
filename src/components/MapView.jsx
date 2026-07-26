import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";

import { useContext, useEffect, useState } from "react";
import { TrafficContext } from "../context/TrafficContext";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Automatically fit map to selected route
function FitBounds({ coordinates }) {
  const map = useMap();

  useEffect(() => {
    if (coordinates && coordinates.length > 1) {
      map.fitBounds(coordinates, {
        padding: [50, 50],
      });
    }
  }, [coordinates, map]);

  return null;
}

// Fetches a real, road-following route from OSRM for the given
// waypoints (each [lat, lng]) instead of straight lines between them.
function useRoadGeometry(waypoints) {
  const [roadGeometry, setRoadGeometry] = useState(null);

  useEffect(() => {
    if (!waypoints || waypoints.length < 2) {
      setRoadGeometry(null);
      return;
    }

    let cancelled = false;

    async function fetchRoute() {
      try {
        const coordsParam = waypoints
          .map(([lat, lng]) => `${lng},${lat}`) // OSRM wants lng,lat
          .join(";");

        const url = `https://router.project-osrm.org/route/v1/driving/${coordsParam}?overview=full&geometries=geojson`;

        const res = await fetch(url);
        const data = await res.json();

        if (cancelled) return;

        if (data.code === "Ok" && data.routes?.[0]?.geometry?.coordinates) {
          // GeoJSON is [lng, lat] — flip to Leaflet's [lat, lng]
          const leafletCoords = data.routes[0].geometry.coordinates.map(
            ([lng, lat]) => [lat, lng]
          );
          setRoadGeometry(leafletCoords);
        } else {
          // Fall back to the straight-line waypoints if OSRM can't route it
          setRoadGeometry(waypoints);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Routing lookup failed, using straight line:", err);
          setRoadGeometry(waypoints);
        }
      }
    }

    fetchRoute();

    return () => {
      cancelled = true;
    };
  }, [JSON.stringify(waypoints)]);

  return roadGeometry;
}

function MapView() {
  const { prediction } = useContext(TrafficContext);
  const roadGeometry = useRoadGeometry(prediction.routeGeometry);
  const displayGeometry = roadGeometry || prediction.routeGeometry;

  return (
    <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">

      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={11}
        style={{
          height: "550px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {displayGeometry?.length > 1 && (
          <FitBounds coordinates={displayGeometry} />
        )}

        {/* Source */}

        {prediction.routeGeometry?.length > 0 && (
          <Marker position={prediction.routeGeometry[0]}>
            <Popup>
              <strong>📍 Source</strong>
              <br />
              {prediction.source}
            </Popup>
          </Marker>
        )}

        {/* Destination */}

        {prediction.routeGeometry?.length > 0 && (
          <Marker
            position={
              prediction.routeGeometry[
                prediction.routeGeometry.length - 1
              ]
            }
          >
            <Popup>
              <strong>🎯 Destination</strong>
              <br />
              {prediction.destination}
            </Popup>
          </Marker>
        )}

        {/* Route */}

        {displayGeometry?.length > 1 && (
          <Polyline
            positions={displayGeometry}
            pathOptions={{
              color: "#06b6d4",
              weight: 7,
              opacity: 0.9,
            }}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default MapView;