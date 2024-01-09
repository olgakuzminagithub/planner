"use client"

import AdvertList from '@/components/AdvertsList/page';
import Map from '@/components/Map/page'
import { useState, useMemo } from 'react';
import { Data } from '@prisma/client';

//function filter 
function filterAd (adverts: Data[], clickAd: any, bounds: any) {
  clickAd && 
      (adverts = adverts.filter((a: Data) => 
          a.lat.toFixed(2) === clickAd.lat.toFixed(2) &&
          a.lng.toFixed(2) === clickAd.lng.toFixed(2))
      );
  bounds &&
      (adverts = adverts.filter((a: Data) => 
          bounds._southWest.lat.toFixed(2) < a.lat.toFixed(2) &&
          a.lat.toFixed(2) < bounds._northEast.lat.toFixed(2) &&
          bounds._southWest.lng.toFixed(2) < a.lng.toFixed(2) &&
          a.lng.toFixed(2) < bounds._northEast.lng.toFixed(2))
      );
  return adverts;
}

type HomePageProps = {
    adverts: Data[]
}
export default function HomePage({adverts}: HomePageProps) {
  const [clickAd, setClickAd] = useState(null);
  const [bounds, setBounds] = useState();

 const filteredAdverts = useMemo(() =>
  filterAd(adverts, clickAd, bounds),
  [adverts, clickAd, bounds]
);


  return (
    <div className="content">
        <div className='map-container'>
            <Map adverts={adverts} setClickAd={setClickAd} setBounds={setBounds}/>
        </div>
        <div className="advert-list">
            <p>In this area searched {filteredAdverts.length} adverts</p>
            {bounds && <p>In this area searched {filteredAdverts.length} adverts</p>}
            {clickAd && <div className='my-btn my-btn_primary btn-show-all' onClick={() => setClickAd(null)}>Show all</div>}
            <AdvertList adverts={filteredAdverts}/>
        </div>
    </div>
  )
}
