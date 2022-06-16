import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import prisma from "../../lib/prisma"
import type { Review } from "@prisma/client"
import ReviewCard from "../common/components/review/reviewCard"
import { ReviewByIdPageProps } from "../pages/reviews/[id]/index.page"

export const getStaticProps: GetStaticProps = async () => {
	const reviews: Array<Review> = await prisma.review.findMany({
		include: {
			movie: true,
			user: true
		}
	})
	return {
		props: {
			reviews: JSON.parse(JSON.stringify(reviews))
		}
	}
}

type HomePageProps = {
	reviews: Array<ReviewByIdPageProps>
}

const Home: NextPage<HomePageProps> = ({ reviews }: HomePageProps) => {
	return (
		<>
			<Head>
				<title>Caleb Penning - Software Engineer</title>
				<meta name="description" content="Caleb Penning's portfolio website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col items-center">
				<h1 className="text-7xl">Latest Movie Reviews</h1>	
			</div>
			<section className="flex flex-col items-center justify-evenly">
				{reviews.map((review) => (
					<Link key={review.id} href={`/reviews/${review.id}`}>
						<a>
							<ReviewCard key={review.id} review={review} />
						</a>
					</Link>
				))}
			</section>
		</>
	)
}

export default Home
