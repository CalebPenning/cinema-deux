import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import prisma from "../../lib/prisma"
import Review, { ReviewProps } from "../common/components/review/review"

export const getStaticProps: GetStaticProps = async () => {
	const reviews = await prisma.review.findMany()
	return JSON.parse(JSON.stringify({ props: { reviews } }))
}

type Props = {
	reviews: Array<ReviewProps>
}

const Home: NextPage<Props> = (props) => {
	return (
		<>
			<Head>
				<title>Caleb Penning - Software Engineer</title>
				<meta name="description" content="Caleb Penning's portfolio website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col items-center">
				<h1 className="text-7xl">Hello World</h1>
				<h2 className="text-4xl">
					I'm Caleb Penning, a Software Engineer from the San Francisco Bay
					Area!
				</h2>
			</div>
			<section className="flex flex-col items-center justify-evenly">
				{props.reviews.map((review) => (
					<Review key={review.id} review={review} />
				))}
			</section>
		</>
	)
}

export default Home
