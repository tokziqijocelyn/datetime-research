import { taskRouter } from "@/server/api/routers/task";
import { dateRouter } from "@/server/api/routers/date";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  task: taskRouter,
  date: dateRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
