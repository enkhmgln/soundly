import { Stack } from "expo-router";
import Providers from "@/components/layout/providers";

export default function RootLayout() {
  return (
    <Providers>
      <Stack />
    </Providers>
  );
}
