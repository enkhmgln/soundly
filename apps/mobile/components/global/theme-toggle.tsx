import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import * as React from "react";

type ThemeToggleProps = React.ComponentProps<typeof Button> & {
  iconButtonSize?: number;
};

export default function ThemeToggle({
  iconButtonSize = 44,
  className,
  ...props
}: ThemeToggleProps) {
  const { colorScheme, setColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const iconSize = Math.round(iconButtonSize * 0.45);

  return (
    <Button
      variant="outline"
      size="icon"
      accessibilityRole="button"
      accessibilityLabel="Toggle theme"
      onPress={() => setColorScheme(isDark ? "light" : "dark")}
      className={cn(
        "rounded-full border border-border bg-card",
        className,
      )}
      style={{ width: iconButtonSize, height: iconButtonSize }}
      {...props}
    >
      <Icon
        as={isDark ? Sun : Moon}
        size={iconSize}
        className="text-foreground"
        strokeWidth={1.8}
      />
    </Button>
  );
}
