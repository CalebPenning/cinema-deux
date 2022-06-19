import { Movie } from "@prisma/client"

export type CreateMoviePageProps = {
	movie: Movie
}

export type ReviewDraft = {
	movieId?: string
	rating?: number
	body?: string
	title?: string,
	userId?: string
}
