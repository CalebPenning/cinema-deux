import Link from "next/link"
import { ReviewByIdPageProps } from "../../../pages/reviews/[id]/index.page"

export type ReviewCardProps = {
	review: ReviewByIdPageProps
	key: string | number
}

const ReviewCard: React.FC<ReviewCardProps> = (props: ReviewCardProps) => {
	console.log(props.review)
	return (
		<div className="flex flex-col max-w-6xl items-center justify-evenly border-black border-4 rounded-md">
			<h2 className="text-3xl">{props.review.title || ""}</h2>
			<small>{`A review by ${
				props.review.user.username || props.review.user.name
			}, published ${(props.review.createdAt as unknown as string).slice(
				0,
				10
			)}`}</small>
			<Link href={`/movies/${props.review.movie.id}`}>
				<a className="cursor-pointer">{props.review.movie.title || ""}</a>
			</Link>
		</div>
	)
}

export default ReviewCard
