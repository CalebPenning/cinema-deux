import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../../lib/prisma"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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
    }
    else return res.status(400).json({ message: "Bad Request" })
}

export default handler