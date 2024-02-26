import { PrismaClient } from '@prisma/client';

declare global {
	let prisma: PrismaClient | undefined;
}

const prisma = new PrismaClient();
const client = prisma ?? new PrismaClient();

export default client;
