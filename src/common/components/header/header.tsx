import Link from "next/link"

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="w-full pb-1 border-b-2">
      <nav>
        <ul className="flex flex-row items-center justify-around">
          <Link href="/">
            <a>
              <li className="text-3xl">
                Home
              </li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li className="text-3xl">
                About
              </li>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <li className="text-3xl">
                Blog
              </li>
            </a>
          </Link>
          <Link href="/porfolio">
            <a>
              <li className="text-3xl">
                Portfolio
              </li>
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header