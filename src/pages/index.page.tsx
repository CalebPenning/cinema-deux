import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Caleb Penning - Software Engineer</title>
				<meta name="description" content="Caleb Penning's portfolio website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col items-center">
				<h1 className="text-7xl">Hello World</h1>
        <h2 className="text-4xl">I'm Caleb Penning, a Software Engineer from the San Francisco Bay Area!</h2>
			</div>
		</>
	)
}

export default Home
