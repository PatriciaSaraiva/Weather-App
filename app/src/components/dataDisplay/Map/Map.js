import React from "react";

import { MapContainer, TileLayer, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const Marker = ({ LocationDot }) => <div>{LocationDot}</div>;

const Map = ({ lat, lon }) => {
  return (
    <MapContainer
      center={[lat, lon]}
      attributionControl={false}
      zoom={5}
      scrollWheelZoom
      style={{ height: "100%", width: "100%", zIndex: -1 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
