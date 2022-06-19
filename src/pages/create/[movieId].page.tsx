import { GetServerSidePropsContext, NextPage } from "next"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import prisma from "../../../lib/prisma"
import { useSession } from "next-auth/react"
import { CreateMoviePageProps, ReviewDraft } from "../../common/types/FormTypes"
import axios from 'axios'

const CreateReviewPage: NextPage<CreateMoviePageProps> = ({
	movie
}: CreateMoviePageProps): JSX.Element => {
	const [review, setReview] = useState<ReviewDraft>({})
	const [error, setError] = useState<string | null>(null)
	const { query, push } = useRouter()
	const movieId = query.movieId as string

	const { data: session, status } = useSession()
	useEffect(() => {
		if (status === "loading") return
		if (status === "unauthenticated") push("/api/auth/signin")
		else return
	}, [session, status])

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	): void => {
		const { name, value } = e.currentTarget
		if (name === "rating") {
			setReview({ ...review, rating: +value })
		} else {
			setReview({ ...review, [name]: value })
		}
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault()
		const { title, body, rating } = review
		if (!title || !body || !rating) setError("All fields are required")
		else {
			const newReview = {
				...review,
				userID: session?.userId,
				movieID: movieId
			}
			const hasMessage = await axios.post("/api/reviews/create", newReview)
			if (hasMessage.data.message) {
				push(`/movies/${movieId}`)
			}
			else setError('Something went wrong')
		}
	}

	if (status === "loading")
		return (
			<div className="text-xl flex flex-col items-center justify-center font-bold font-lato tracking-widest min-h-full min-w-full">
				<h2>Loading...</h2>
			</div>
		)

	console.log(session)
	return (
		<div className="flex flex-col items-center justify-evenly border-4 pt-4 pb-12 border-[#eee]">
			{error && <p className="text-red-500">{error}</p>}
			<h1 className="text-center text-2xl">
				Create a review for {movie.title}
			</h1>
			<form onSubmit={handleSubmit} className="flex flex-col mt-4 px-7 pt-3 pb-8 border">
				<label htmlFor="title">Review Title</label>
				<input
					className="form-input rounded-sm"
					type="text"
					name="title"
					id="title"
					onChange={handleChange}
				/>

				<label htmlFor="body">Write Your Review</label>
				<textarea
					className="form-textarea rounded-sm"
					name="body"
					id="body"
					cols={30}
					rows={10}
					onChange={handleChange}
				/>

				<label htmlFor="rating">Rating</label>
				<select
					className="form-select rounded-sm"
					name="rating"
					defaultValue="10"
					id="rating"
					onChange={handleChange}
				>
					{Array.from({ length: 10 }).map((_, i) => (
						<option key={i} value={i + 1}>
							{i + 1}
						</option>
					))}
				</select>
				<input
					className="mt-2 pt-2 pb-2 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-[#fff] text-[#000] bg-slate-300"
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
