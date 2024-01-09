'use client';

import "leaflet/dist/leaflet.css"
import style from "./Map.module.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { Icon } from "leaflet"
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


export default function LeafletMap({adverts, clickAd, setClickAd, setBounds}: any) {
  const myIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/727/727606.png",
    iconSize: [32, 32]
  });
  const myIcon2 = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/7976/7976202.png",
    iconSize: [32, 32]
  });

  
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
          icon={clickAd && advert.id === clickAd.id ? myIcon2 : myIcon}
          eventHandlers={{
            click: (e) => {
               setClickAd({"id": advert.id, "lat": advert.lat, "lng": advert.lng })
            },
          }}
        >
        </Marker>
      )}
       <MyComponent setBounds={setBounds}/>
    </MapContainer>
  )
}