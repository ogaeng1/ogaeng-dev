"use client";

import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      className="flex items-center justify-center"
      onClick={() => {
        setTheme(currentTheme === "dark" ? "light" : "dark");
      }}
    >
      {currentTheme === "dark" ? (
        <HiOutlineSun size={20} />
      ) : (
        <HiOutlineMoon size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
