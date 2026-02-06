import "./global.css";
import Providers from "@/components/layout/providers";
import { cn } from "@/lib/utils";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { View } from "react-native";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <View className={cn("flex-1", colorScheme === "dark" && "dark")}>
      <Providers>
        <Stack screenOptions={{ headerShown: false }} />
      </Providers>
    </View>
  );
}
