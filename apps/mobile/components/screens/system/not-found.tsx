import Screen from "@/components/layout/screen";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { useRouter } from "expo-router";
import { TriangleAlert } from "lucide-react-native";
import { View } from "react-native";

export default function NotFoundView() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 items-center justify-center px-6">
        <View className="items-center gap-3">
          <Icon as={TriangleAlert} className="text-muted-foreground" size={48} />
          <Text className="text-2xl font-semibold text-foreground">
            Page not found
          </Text>
          <Text className="text-center text-sm text-muted-foreground">
            The screen you are looking for does not exist. It may have been
            moved, renamed, or removed.
          </Text>
        </View>

        <View className="mt-8 w-full max-w-xs gap-3">
          <Button onPress={() => router.replace("/")}>
            <Text>Go to home</Text>
          </Button>
          <Button variant="ghost" onPress={() => router.back()}>
            <Text>Go back</Text>
          </Button>
        </View>
      </View>
    </Screen>
  );
}
