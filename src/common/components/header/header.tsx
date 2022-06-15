import Link from "next/link"
import { useRouter } from "next/router"
import { signOut, useSession } from "next-auth/react"

const Header: React.FC = (): JSX.Element => {
	const router = useRouter()
	const isActive: (pathname: string) => boolean = (pathname) =>
		router.pathname === pathname

	const { data: session, status } = useSession()

	if (status === "loading")
		return (
			<header className="w-full pb-1 border-b-2">
				<nav>
					<ul className="flex flex-row items-center justify-around">
						<Link href="/">
							<a>
								<li className="text-3xl">Home</li>
							</a>
						</Link>
						<Link href="/about">
							<a>
								<li className="text-3xl">About</li>
							</a>
						</Link>
						<Link href="/blog">
							<a>
								<li className="text-3xl">Blog</li>
							</a>
						</Link>
						<Link href="/porfolio">
							<a>
								<li className="text-3xl">Portfolio</li>
							</a>
						</Link>
					</ul>
				</nav>
			</header>
		)

	if (!session)
		return (
			<header className="w-full pb-1 border-b-2">
				<nav>
					<ul className="flex flex-row items-center justify-around">
						<Link href="/">
							<a>
								<li className="text-3xl">Home</li>
							</a>
						</Link>
						<Link href="/about">
							<a>
								<li className="text-3xl">About</li>
							</a>
						</Link>
						<Link href="/blog">
							<a>
								<li className="text-3xl">Blog</li>
							</a>
						</Link>
						<Link href="/porfolio">
							<a>
								<li className="text-3xl">Portfolio</li>
							</a>
						</Link>
						<Link href="/api/auth/signin">
							<a data-active={isActive("/signup")}>Log In</a>
						</Link>
					</ul>
				</nav>
			</header>
		)

	if (session)
		return (
			<header className="w-full pb-1 border-b-2">
				<nav>
					<ul className="flex flex-row items-center justify-around">
						<Link href="/">
							<a>
								<li className="text-3xl">Home</li>
							</a>
						</Link>
						<Link href="/about">
							<a>
								<li className="text-3xl">About</li>
							</a>
						</Link>
						<Link href="/blog">
							<a>
								<li className="text-3xl">Blog</li>
							</a>
						</Link>
						<Link href="/porfolio">
							<a>
								<li className="text-3xl">Portfolio</li>
							</a>
						</Link>
						<Link href="/reviews">
							<a data-active={isActive("/reviews")}>My Reviews</a>
						</Link>
						<button onClick={() => signOut()}>Log out</button>
					</ul>
				</nav>
			</header>
		)

	return <div>what the fuck</div>
}

export default Header
