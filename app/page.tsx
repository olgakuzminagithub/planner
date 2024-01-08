import prisma from '@/utils/db'
import HomePage from '@/components/HomePage/page';






export default async function Home() {
  const adverts = await prisma.data.findMany();
  adverts.reverse();

  return (
    <HomePage adverts={adverts}/>
  )
}
