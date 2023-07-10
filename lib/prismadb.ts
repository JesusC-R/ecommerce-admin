// This code sets up a global instance of PrismaClient,
// allowing access to the Prisma database client throughout the application.
// It ensures a single instance is created and avoids creating multiple instances.

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismadb;
}

export default prismadb;
