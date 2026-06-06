import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis

function createClient() {
  if (!process.env.DATABASE_URL) return null
  try {
    return new PrismaClient()
  } catch {
    return null
  }
}

export const prisma = globalForPrisma.prisma ?? createClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
