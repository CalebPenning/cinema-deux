import type { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import prisma from "../../../../lib/prisma"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getSession({ req })
	console.log(session)
	if (req.method === "POST") {
		try {
			await prisma.review.create({
				data: {
					...req.body
				}
			})
			return res.status(201).json({ message: "Hello" })
		} catch (e: any) {
			return res.status(400).json({ error: e.message })
		}
	} else
		return res
			.status(400)
			.json({
				message: `Method ${req.method} not allowed at endpoint ${req.url}`
			})
}

export default handler
