import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { cn } from "@/lib/utils";

type ScreenProps = PropsWithChildren<{
  className?: string;
}>;

export default function Screen({ className, children }: ScreenProps) {
  return (
    <SafeAreaView
      className={cn("flex-1 bg-background text-foreground", className)}
    >
      {children}
    </SafeAreaView>
  );
}
