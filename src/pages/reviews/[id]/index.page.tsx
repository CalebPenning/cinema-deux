import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next"
import Head from "next/head"
import ReviewCard from "../../../common/components/review/reviewCard"
import prisma from "../../../../lib/prisma"
import type { Review, User, Movie } from "@prisma/client"

/**
 *  TODO: Add type definitions for this page
 *  TODO: Add type definitions for getServerSideProps parameter
 */
export const getServerSideProps: GetServerSideProps = async ({
	params
}: any) => {
	const { id } = params
	const review = await prisma.review.findUnique({
		where: {
			id: Number(id)
		},
		include: {
			movie: true,
			user: true
		}
	})

	return JSON.parse(JSON.stringify({ props: review }))
}

export interface ReviewByIdPageProps extends Review {
	user: User
	movie: Movie
}

/**
 *
 * TODO: Add a review card component
 */

const ReviewById: NextPage<ReviewByIdPageProps> = ({
	user,
	movie,
	...review
}: ReviewByIdPageProps): JSX.Element => {
	console.log(review)
	return (
		<>
			<Head>
				<title>{`Review #${review.id} of ${movie.title}`}</title>
			</Head>
			<div className="p-4 flex flex-row items-center justify-evenly">
				<ReviewCard key={review.id} review={{ user, movie, ...review }} />
			</div>
		</>
	)
}

export default ReviewById
