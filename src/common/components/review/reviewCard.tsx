import { ReviewByIdPageProps } from "../../../pages/reviews/[id]/index.page"

export type ReviewCardProps = {
	review: ReviewByIdPageProps
	key: string | number
}

const ReviewCard: React.FC<ReviewCardProps> = (props: ReviewCardProps) => {
	console.log(props.review.user)
	return (
		<div className="flex flex-col max-w-6xl items-center justify-evenly border-black border-4 rounded-md">
			<h2 className="text-3xl">{props.review.title || ""}</h2>
			<small>{`A review by `}</small>
			<small></small>
		</div>
	)
}

export default ReviewCard
