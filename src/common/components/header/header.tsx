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
								<li className="text-lg sm:text-2xl">Home</li>
							</a>
						</Link>
						<Link href="/featured">
							<a>
								<li className="text-lg sm:text-2xl">Featured Posts</li>
							</a>
						</Link>
						<Link href="/search">
							<a>
								<li className="text-lg sm:text-2xl">Search</li>
							</a>
						</Link>{" "}
						<Link href="/">
							<a>
								<li className="text-md sm:text-lg">Logging in...</li>
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
								<li className="text-lg sm:text-2xl">Home</li>
							</a>
						</Link>
						<Link href="/featured">
							<a>
								<li className="text-lg sm:text-2xl">Featured Posts</li>
							</a>
						</Link>
						<Link href="/search">
							<a>
								<li className="text-lg sm:text-2xl">Search</li>
							</a>
						</Link>{" "}
						<Link href="/api/auth/signin">
							<a data-active={isActive("/signup")}>
								<li className="text-md sm:text-lg">Log In</li>
							</a>
						</Link>
					</ul>
				</nav>
			</header>
		)

	if (session)
		return (
			<header className="w-full pb-1 border-b-2 font-lato font-semibold">
				<nav>
					<ul className="flex flex-row items-center justify-around">
						<Link href="/">
							<a>
								<li className="text-lg sm:text-2xl">Home</li>
							</a>
						</Link>
						<Link href="/featured">
							<a>
								<li className="text-lg sm:text-2xl">Featured Posts</li>
							</a>
						</Link>
						<Link href="/search">
							<a>
								<li className="text-lg sm:text-2xl">Search</li>
							</a>
						</Link>{" "}
						<Link href="/reviews">
							<a data-active={isActive("/reviews")}>
								<li className="text-lg sm:text-2xl">My Reviews</li>
							</a>
						</Link>
						<button className="text-md sm:text-lg" onClick={() => signOut()}>
							Log out
						</button>
					</ul>
				</nav>
			</header>
		)

	return <div>what the fuck</div>
}

export default Header
