import Screen from "@/components/layout/screen";
import { Text } from "@/components/ui/text";
import { ScrollView, View } from "react-native";

export default function PrivacyView() {
  return (
    <Screen className="px-6 pt-6" edges={["left", "right", "bottom"]}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-6 pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="gap-6">
        <View className="gap-3">
          <View className="self-start rounded-full border border-primary/30 bg-card px-3 py-1">
            <Text className="text-xs font-medium uppercase tracking-widest text-primary">
              Policy
            </Text>
          </View>
          <Text className="text-2xl font-semibold">Privacy Policy</Text>
          <Text className="text-sm text-muted-foreground">
            Effective date: To be announced
          </Text>
          <Text className="text-sm text-muted-foreground">
            This policy is a placeholder and will be updated before launch.
          </Text>
        </View>

        <View className="gap-4 rounded-2xl border border-border/70 bg-card p-5">
          <Text className="text-base font-semibold">1. What we collect</Text>
          <Text className="text-sm text-muted-foreground">
            We collect the information needed to provide matching and a safe
            experience.
          </Text>
          <View className="gap-2">
            <View className="flex-row items-start gap-3">
              <View className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
              <Text className="flex-1 text-sm text-muted-foreground">
                Profile details you choose to share.
              </Text>
            </View>
            <View className="flex-row items-start gap-3">
              <View className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
              <Text className="flex-1 text-sm text-muted-foreground">
                App usage and device info for stability and safety.
              </Text>
            </View>
          </View>
        </View>

        <View className="gap-4 rounded-2xl border border-border/70 bg-card p-5">
          <Text className="text-base font-semibold">2. How we use data</Text>
          <Text className="text-sm text-muted-foreground">
            We use data to deliver matches, personalize the experience, and keep
            the community safe.
          </Text>
          <View className="gap-2">
            <View className="flex-row items-start gap-3">
              <View className="mt-1.5 h-2 w-2 rounded-full bg-secondary" />
              <Text className="flex-1 text-sm text-muted-foreground">
                Improve recommendations and in-app safety.
              </Text>
            </View>
            <View className="flex-row items-start gap-3">
              <View className="mt-1.5 h-2 w-2 rounded-full bg-secondary" />
              <Text className="flex-1 text-sm text-muted-foreground">
                Analyze trends to improve performance and reliability.
              </Text>
            </View>
          </View>
        </View>

        <View className="gap-4 rounded-2xl border border-border/70 bg-card p-5">
          <Text className="text-base font-semibold">3. Your choices</Text>
          <Text className="text-sm text-muted-foreground">
            You control what you share publicly and can update or delete your
            profile information at any time.
          </Text>
        </View>

        <View className="gap-3 rounded-2xl border border-border/70 bg-card p-5">
          <Text className="text-base font-semibold">Questions?</Text>
          <Text className="text-sm text-muted-foreground">
            Contact us anytime at support@soundly.app.
          </Text>
        </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
