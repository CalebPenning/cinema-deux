import { ReviewByIdPageProps } from "../../../pages/reviews/[id]/index.page"

const ReviewCard: React.FC<ReviewByIdPageProps> = (review: ReviewByIdPageProps) => {
	console.log(review)
	return (
		<div className="flex flex-col max-w-6xl items-center justify-evenly border-black border-4 rounded-md">
			<h2 className="text-3xl">{review.title || ""}</h2>
			<small>{`A review by ${review.user.name}`}</small>
			<small></small>
		</div>
	)
}

export default ReviewCard
