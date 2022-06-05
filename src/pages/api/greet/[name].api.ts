import type { NextApiRequest, NextApiResponse } from "next"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const { name } = req.query
    res.status(200).json({ message: `Hello ${name}` })
}

export default handler