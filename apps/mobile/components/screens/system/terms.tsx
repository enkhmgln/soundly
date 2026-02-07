import Screen from "@/components/layout/screen";
import { Text } from "@/components/ui/text";
import { ScrollView, View } from "react-native";

export default function TermsView() {
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
          <Text className="text-2xl font-semibold">Terms of Service</Text>
          <Text className="text-sm text-muted-foreground">
            Effective date: To be announced
          </Text>
          <Text className="text-sm text-muted-foreground">
            These terms are a placeholder and will be updated before launch.
          </Text>
        </View>

        <View className="gap-4 rounded-2xl border border-border/70 bg-card p-5">
          <Text className="text-base font-semibold">
            1. Account &amp; eligibility
          </Text>
          <Text className="text-sm text-muted-foreground">
            You must be at least 18 years old to use Soundly. Keep your account
            secure and your information accurate.
          </Text>
          <View className="gap-2">
            <View className="flex-row items-start gap-3">
              <View className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
              <Text className="flex-1 text-sm text-muted-foreground">
                Provide truthful profile information.
              </Text>
            </View>
            <View className="flex-row items-start gap-3">
              <View className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
              <Text className="flex-1 text-sm text-muted-foreground">
                Keep login credentials private.
              </Text>
            </View>
          </View>
        </View>

        <View className="gap-4 rounded-2xl border border-border/70 bg-card p-5">
          <Text className="text-base font-semibold">2. Community guidelines</Text>
          <Text className="text-sm text-muted-foreground">
            Respect other members and do not post harmful, abusive, or illegal
            content.
          </Text>
          <View className="gap-2">
            <View className="flex-row items-start gap-3">
              <View className="mt-1.5 h-2 w-2 rounded-full bg-secondary" />
              <Text className="flex-1 text-sm text-muted-foreground">
                No harassment, hate speech, or explicit content.
              </Text>
            </View>
            <View className="flex-row items-start gap-3">
              <View className="mt-1.5 h-2 w-2 rounded-full bg-secondary" />
              <Text className="flex-1 text-sm text-muted-foreground">
                Report issues so we can keep the community safe.
              </Text>
            </View>
          </View>
        </View>

        <View className="gap-4 rounded-2xl border border-border/70 bg-card p-5">
          <Text className="text-base font-semibold">
            3. Changes to these terms
          </Text>
          <Text className="text-sm text-muted-foreground">
            We may update these terms as the product evolves. Continued use of
            the app means you accept the updated terms.
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
