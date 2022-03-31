import Link from "next/link"

export default function Header() {
  return (
    <nav className="flex justify-between items-center gap-6 w-full shadow-sm filter backdrop-blur-lg z-50 bg-white/90 fixed h-20 px-20">
      <Link href="/">
        <a className="link">🐳</a>
      </Link>
      <Link href="/">
        <a className="link">NTWSK</a>
      </Link>
    </nav>
  )
}
