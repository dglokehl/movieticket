import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const client = new PrismaClient().$extends(withAccelerate());
export const prisma = client;
