export type ReviewProps = {
	id: number
	movieId: string
	userId: number
	rating: number
	title: string
	body: string
	createdAt: string | number
}

const Review: React.FC<{ review: ReviewProps }> = ({ review }) => {
	return (
		<div className="flex flex-col max-w-6xl items-center justify-evenly border-black border-4 rounded-md">
			<h2 className="text-3xl">{review.title}</h2>
			<small>{`A review `}</small>
		</div>
	)
}

export default Review
