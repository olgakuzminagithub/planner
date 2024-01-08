import AdvertItem from '@/components/AdvertsList/AdvertsItem'
import type { Data } from '@prisma/client';

type AdvertListProps = {
  adverts: Data[],
}


function AdvertList({adverts}: AdvertListProps) {
  return (
    <>
      {adverts?.map((advert: Data) => 
        <AdvertItem advert={advert} key={advert.id}/>
      )}
    </>
  )
}

export default AdvertList