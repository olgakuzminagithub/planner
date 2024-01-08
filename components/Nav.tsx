import Link from "next/link"

const Nav = () => {
  return (
    <nav>
        <Link href="/">Map</Link>
        <Link href="/new">Add new</Link>
    </nav>
  )
}

export default Nav