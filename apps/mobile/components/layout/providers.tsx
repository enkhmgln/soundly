import { PropsWithChildren } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc, trpcClient } from "@/lib/trpc";
import { useColorScheme } from "@/hooks/use-color-scheme";

const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          {children}
        </trpc.Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
