import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc, trpcClient } from "@/lib/trpc";
import { PortalHost } from "@rn-primitives/portal";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@react-navigation/native";
import { NAV_THEME } from "@/lib/theme";
import { useColorScheme } from "nativewind";

const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
  const { colorScheme } = useColorScheme();
  const navTheme = colorScheme === "dark" ? NAV_THEME.dark : NAV_THEME.light;

  return (
    <SafeAreaProvider>
      <ThemeProvider value={navTheme}>
        <QueryClientProvider client={queryClient}>
          <trpc.Provider client={trpcClient} queryClient={queryClient}>
            {children}
          </trpc.Provider>
          <PortalHost name="root" />
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
