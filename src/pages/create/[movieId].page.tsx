import { GetServerSidePropsContext, NextPage } from "next"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import prisma from "../../../lib/prisma"
import { Movie } from "@prisma/client"
import { useSession } from "next-auth/react"

export type CreateMoviePageProps = {
	movie: Movie
}

export type ReviewDraft = {
	movieId?: string
	rating?: number
	body?: string
	title?: string
}

const CreateReviewPage: NextPage<CreateMoviePageProps> = ({
	movie
}: CreateMoviePageProps): JSX.Element => {
	const [review, setReview] = useState({})
	const [error, setError] = useState<string | null>(null)
	const { query, push } = useRouter()
	const movieId = query.movieId as string

	const { data: session, status } = useSession()
	useEffect(() => {
		if (status === "loading") return
		if (status === "unauthenticated") push("/api/auth/signin")
		else return
	}, [session, status])

	if (status === "loading")
		return (
			<div className="text-xl flex flex-col items-center justify-center font-bold font-lato tracking-widest h-full">
				<h2>Loading...</h2>
			</div>
		)

	console.log(session)
	return (
		<div className="flex flex-col items-center justify-evenly border-4 pt-4 pb-12 border-[#eee]">
			<h1 className="text-center text-2xl">
				Create a review for {movie.title}
			</h1>
			<form className="flex flex-col mt-4 px-7 pt-3 pb-8 border">
				<label htmlFor="title">Review Title</label>
				<input type="text" name="title" id="title" />

				<label htmlFor="body">Write Your Review</label>
				<textarea name="body" id="body" cols={30} rows={10} />

				<label htmlFor="rating">Rating</label>
				<select name="rating" defaultValue="10" id="rating">
					{Array.from({ length: 10 }).map((_, i) => (
						<option className="form-select" key={i} value={i + 1}>
							{i + 1}
						</option>
					))}
				</select>
				<input
					className="mt-2 pt-2 pb-2 text-[#000] bg-slate-300"
					type="submit"
					value="Submit"
				/>
			</form>
		</div>
	)
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const { movieId } = ctx.query
	const movie = await prisma.movie.findUnique({
		where: {
			id: String(movieId)
		}
	})
	return {
		props: {
			movie
		}
	}
}

export default CreateReviewPage
