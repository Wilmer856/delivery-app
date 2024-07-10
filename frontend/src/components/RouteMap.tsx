import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const RouteMap: React.FC<{start: [number,number], end: [number, number]}> = ({start, end}) => {

  const [route, setRoute] = useState<[number, number][]>([]);

  useEffect(() => {
    const fetchRoute = async () => {
      const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`);
      const data = await response.json();
      const coordinates = data.routes[0].geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);
      setRoute(coordinates);
    };

    if (start && end) {
      fetchRoute();
    }
  }, [start, end]);


  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {route.length > 0 && <Polyline positions={route} color="blue" />}
      <Marker position={start}>
        <Popup>Start</Popup>
      </Marker>
      <Marker position={end}>
        <Popup>End</Popup>
      </Marker>
    </MapContainer>
  );
};

export default RouteMap;