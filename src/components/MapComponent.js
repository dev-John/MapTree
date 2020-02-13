import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function MapComponent() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 500,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 6
  });

  return (
    <ReactMapGL mapboxApiAccessToken={process.env.REACT_APP_MAPSAPI}
      {...viewport}
      onViewportChange={setViewport}
    />
  );
}
