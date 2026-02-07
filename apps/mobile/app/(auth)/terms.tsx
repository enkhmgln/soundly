import TermsView from "@/components/screens/system/terms";
import { Stack } from "expo-router";

export default function TermsScreen() {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, title: "Terms", headerBackTitle: "Back" }}
      />
      <TermsView />
    </>
  );
}
