import dynamic from 'next/dynamic'

const Map = dynamic(
    () => import('@/components/Map/LeafletMap'), { 
    ssr: false
})

export default Map