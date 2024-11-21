import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div className="flex flex-col items-center"> {/* Center the content */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
        font-bold 
        max-w-full 
        mx-auto 
        text-center 
        relative z-20 bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Elevate your brand with <br /> 
        <Cover>Xfyy Marketing Services</Cover>
      </h1>
    </div>
  );
}