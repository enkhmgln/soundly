import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { Music } from "lucide-react-native";
import * as React from "react";
import { View } from "react-native";

type LogoProps = React.ComponentProps<typeof View> & {
  size?: number;
  accessibilityLabel?: string;
};

export default function Logo({
  size = 64,
  className,
  accessibilityLabel = "Soundly logo",
  ...props
}: LogoProps) {
  return (
    <View
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="image"
      className={cn(
        "items-center justify-center overflow-hidden rounded-2xl bg-foreground",
        className,
      )}
      style={{ width: size, height: size }}
      {...props}
    >
      <Icon
        as={Music}
        size={Math.round(size * 0.56)}
        className="text-background"
        strokeWidth={1.8}
      />
    </View>
  );
}
