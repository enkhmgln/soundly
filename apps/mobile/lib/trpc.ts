import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import type { AppRouter } from "soundly-trpc";

const apiUrl = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:3000";

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${apiUrl}/trpc`,
      transformer: superjson,
    }),
  ],
});
