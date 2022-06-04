export type ReviewProps = {
    id: number;
    movieId: string;
    userId: number;
    rating: number;
    title: string;
    body: string;
    createdAt: string;
}

const Review: React.FC<{ review: ReviewProps }> = ({ review }) => {
    return (
        <div className="flex flex-col items-center justify-evenly">
            <h2 className="text-5xl">{review.title}</h2>
            <small>{`A review `}</small>
        </div>
    )
}

export default Review