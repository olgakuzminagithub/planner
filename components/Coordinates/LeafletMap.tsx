'use client';

import "leaflet/dist/leaflet.css"
import style from "./Coordinates.module.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { MapContainer, TileLayer, Marker, useMapEvents} from 'react-leaflet';


function MyComponent({setDecode}: any) {
  const map = useMapEvents({
    click: (e) => {
      setDecode(e.latlng)
    },
  });
  return null;
}


export default function LeafletMap({decode, setDecode}: any) {
  return (
    <MapContainer 
      className={style.smallMap}
      center={[49.04, 31.45]} 
      zoom={6} 
      scrollWheelZoom={false}
    >
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {decode && <Marker position={[decode.lat, decode.lng]}/>}
       <MyComponent setDecode={setDecode}/>
    </MapContainer>
  )
}