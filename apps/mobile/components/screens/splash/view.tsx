import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function SplashView() {
  return (
    <View className="flex-1 justify-between px-6 py-12">
      <View className="items-center">
        <Text className="mt-6 text-3xl font-semibold text-foreground">
          Soundly
        </Text>
        <Text className="mt-3 text-center text-base text-muted-foreground">
          Connect through sound. Find people who feel your playlist.
        </Text>
      </View>

      <Text className="text-center text-xs text-muted-foreground">
        v1 preview
      </Text>
    </View>
  );
}
