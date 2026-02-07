import PrivacyView from "@/components/screens/system/privacy";
import { Stack } from "expo-router";

export default function PrivacyScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Privacy",
          headerBackTitle: "Back",
        }}
      />
      <PrivacyView />
    </>
  );
}
