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

// Auto-fit route
function FitBounds({ coordinates }) {
  const map = useMap();

  useEffect(() => {
    if (coordinates?.length > 1) {
      map.fitBounds(coordinates, {
        padding: [40, 40],
      });
    }
  }, [coordinates, map]);

  return null;
}

// Fix Leaflet resizing on mobile
function ResizeMap() {
  const map = useMap();

  useEffect(() => {
    const resize = () => {
      setTimeout(() => {
        map.invalidateSize();
      }, 200);
    };

    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, [map]);

  return null;
}

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
        const coords = waypoints
          .map(([lat, lng]) => `${lng},${lat}`)
          .join(";");

        const res = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`
        );

        const data = await res.json();

        if (cancelled) return;

        if (data.code === "Ok") {
          setRoadGeometry(
            data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng])
          );
        } else {
          setRoadGeometry(waypoints);
        }
      } catch {
        setRoadGeometry(waypoints);
      }
    }

    fetchRoute();

    return () => {
      cancelled = true;
    };
  }, [waypoints]);

  return roadGeometry;
}

function MapView() {
  const { prediction } = useContext(TrafficContext);

  const roadGeometry = useRoadGeometry(prediction.routeGeometry);

  const displayGeometry = roadGeometry || prediction.routeGeometry;

  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">

      <div className="h-[300px] sm:h-[400px] lg:h-[550px] w-full">

        <MapContainer
          center={[12.9716, 77.5946]}
          zoom={11}
          className="h-full w-full"
        >
          <ResizeMap />

          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {displayGeometry?.length > 1 && (
            <>
              <FitBounds coordinates={displayGeometry} />

              <Polyline
                positions={displayGeometry}
                pathOptions={{
                  color: "#06b6d4",
                  weight: 6,
                  opacity: 0.9,
                }}
              />
            </>
          )}

          {prediction.routeGeometry?.length > 0 && (
            <Marker position={prediction.routeGeometry[0]}>
              <Popup>
                <strong>📍 Source</strong>
                <br />
                {prediction.source}
              </Popup>
            </Marker>
          )}

          {prediction.routeGeometry?.length > 1 && (
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
        </MapContainer>

      </div>

    </div>
  );
}

export default MapView;