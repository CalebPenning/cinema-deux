import { PrismaClient } from "@prisma/client"

export const queries = () => (client: PrismaClient) => ({
	async getUser(userId: number) {
		return await client.user.findUnique({
			where: { id: userId }
		})
	}
})
