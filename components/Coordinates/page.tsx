import dynamic from 'next/dynamic'

const MapForCoordinates = dynamic(
    () => import('@/components/Coordinates/LeafletMap'), { 
    ssr: false
})

export default MapForCoordinates