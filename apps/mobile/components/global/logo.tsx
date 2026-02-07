import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import * as React from "react";
import { View } from "react-native";

type LogoProps = React.ComponentProps<typeof View> & {
  size?: number;
  showWordmark?: boolean;
  accessibilityLabel?: string;
};

const SIZE_CLASSES: Record<number, string> = {
  48: "h-12 w-12 rounded-[14px]",
  56: "h-14 w-14 rounded-[16px]",
  64: "h-16 w-16 rounded-[18px]",
  72: "h-[72px] w-[72px] rounded-[20px]",
  80: "h-20 w-20 rounded-[22px]",
  96: "h-24 w-24 rounded-[24px]",
};

export default function Logo({
  size = 64,
  showWordmark = false,
  className,
  accessibilityLabel = "Soundly logo",
  ...props
}: LogoProps) {
  const sizeClass = SIZE_CLASSES[size] ?? SIZE_CLASSES[64];
  return (
    <View
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="image"
      className={cn("items-center", className)}
      {...props}
    >
      <View
        className={cn(
          "relative items-center justify-center border border-primary/30 bg-card shadow-2xl shadow-black/40",
          sizeClass,
        )}
      >
        <View className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-secondary" />
        <View className="flex-row items-center gap-1">
          <View className="h-3 w-2 rounded-full bg-primary/40" />
          <View className="h-5 w-2 rounded-full bg-secondary/70" />
          <View className="h-7 w-2 rounded-full bg-primary" />
          <View className="h-5 w-2 rounded-full bg-secondary/70" />
          <View className="h-3 w-2 rounded-full bg-primary/40" />
        </View>
        <View className="absolute bottom-3 h-1.5 w-6 rounded-full bg-primary/30" />
      </View>

      {showWordmark ? (
        <Text className="mt-3 text-lg font-semibold tracking-tight text-foreground">
          Soundly<Text className="text-primary">.</Text>
        </Text>
      ) : null}
    </View>
  );
}
