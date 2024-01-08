'use client';

import "leaflet/dist/leaflet.css"
import style from "./Map.module.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { MapContainer, TileLayer, Marker, useMapEvents} from 'react-leaflet';
import type { Data } from '@prisma/client';


function MyComponent({setBounds}: any) {
  const map = useMapEvents({
    zoomend: (e) => {
      const bounds = e.target.getBounds();
      setBounds(bounds);
    },
    dragend: (e) => {
      const bounds = e.target.getBounds();
      setBounds(bounds);
    }
  });
  return null;
}


export default function LeafletMap({adverts, setClickAd, setBounds}: any) {
  return (
    <MapContainer 
      className={style.map}
      center={[49.04, 31.45]} 
      zoom={6} 
      scrollWheelZoom={false}
    >
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {adverts.map((advert: Data)  => 

        <Marker 
          position={[advert.lat, advert.lng]} 
          key={advert.id} 
          eventHandlers={{
            click: (e) => {
               setClickAd({"lat": advert.lat, "lng": advert.lng })
            },
          }}
        >
        </Marker>
      )}
       <MyComponent setBounds={setBounds}/>
    </MapContainer>
  )
}