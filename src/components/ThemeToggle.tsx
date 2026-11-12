import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { language } = useLanguage();
  const isDark = resolvedTheme !== "light";
  const label = language === "es"
    ? (isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro")
    : (isDark ? "Switch to light mode" : "Switch to dark mode");
  return (
    <Button variant="floating" size="icon" aria-label={label} title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")} className="h-10 w-10">
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
};
