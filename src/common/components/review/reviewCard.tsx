import { ReviewByIdPageProps } from "../../../pages/reviews/[id]/index.page"
import { useState } from "react"

export type ReviewCardProps = {
	review: ReviewByIdPageProps
	key: string | number
	isInListView?: boolean
}

const ReviewCard: React.FC<ReviewCardProps> = (props: ReviewCardProps) => {
	console.log(props.review)

	const [showReviewBody, setShowReviewBody] = useState<boolean>(false)

	const toggleReviewBody = () => {
		setShowReviewBody(state => !state)
	}
	return (
		<div className="flex flex-col min-w-[40%] lg:max-w-screen-lg items-center justify-evenly border-black border-4 rounded-md">
			<h2 className="text-3xl">{props.review.title || ""}</h2>
			<small>{`A review by ${
				props.review.user.username || props.review.user.name
			}, published ${(props.review.createdAt as unknown as string).slice(
				0,
				10
			)}`}</small>
			<p className="text-sm sm:text-md">{props.review.movie.title}</p>
			<p>User Rating: {props.review.rating} out of 10</p>
			{showReviewBody ? (
				<p className="text-md" onClick={toggleReviewBody}>
					{props.review.body || "No review body available"}
				</p>
			) : (
				<button onClick={toggleReviewBody}>Show Review Body</button>
			)}
		</div>
	)
}

export default ReviewCard
