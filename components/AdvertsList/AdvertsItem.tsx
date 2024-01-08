import type { Data } from '@prisma/client';
import Image from 'next/image';

type AdvertItemProps = {
  advert: Data
}

export default function AdvertItem({advert}: AdvertItemProps) {
  return (
    <div className="advert">
          <h3>{advert.title}</h3>
          <Image src={`/${advert.image}`} width={200} height={150} alt={advert.title} priority={true}/>
          <p>Price: {advert.price}$</p>
    </div>
  )
}