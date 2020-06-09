import React from 'react';
import { Map, TileLayer } from 'react-leaflet'
import './App.css';
import 'leaflet/dist/leaflet.css'

const position = [38.9072, -77.0369]
const accessToken = process.env.REACT_APP_MAPBOX_KEY;


function App() {
  return (
    <div className="App">
      <Map center={position} zoom={8}>
        <TileLayer
          url={``}
        />
      </Map>
    </div>
  );
}

export default App;
