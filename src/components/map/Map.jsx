import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Map.css";

// Custom marker icon fix (Leaflet default icons may not load correctly)
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map = () => {
  const position = [52.2047, 21.3435]; // Example: Wroclaw, Poland

  return (
    <div className="map-container">
      <p className="company-address">📍Bosmańska 23, 05-462 Duchnów, Polska</p>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>Polskamp</Popup>
        </Marker>
      </MapContainer>
      
    </div>
  );
};

export default Map;