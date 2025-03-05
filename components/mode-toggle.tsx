"use client";

import * as React from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [lightMode, setLightMode] = React.useState(true);

  const handleModeToggle = () => {
    setTheme(lightMode ? "dark" : "light");
    setLightMode(!lightMode);
  };

  return (
    <div>
      <button
        onClick={handleModeToggle}
        className="flex items-center justify-center dark:text-white text-black text-xl"
      >
        {lightMode ? <IoMoonOutline /> : <IoSunnyOutline />}
      </button>
    </div>
  );
}
