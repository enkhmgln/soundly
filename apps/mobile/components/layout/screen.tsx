import { PropsWithChildren } from "react";
import { SafeAreaView, type Edge } from "react-native-safe-area-context";
import { cn } from "@/lib/utils";

type ScreenProps = PropsWithChildren<{
  className?: string;
  edges?: Edge[];
}>;

export default function Screen({ className, edges, children }: ScreenProps) {
  return (
    <SafeAreaView
      className={cn("flex-1 bg-background text-foreground", className)}
      edges={edges}
    >
      {children}
    </SafeAreaView>
  );
}
