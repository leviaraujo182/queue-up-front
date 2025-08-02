"use client";

import { PulseLoader } from "react-spinners";

type ClipLoaderProps = {
  color?: "purple" | "white";
  size?: number;
};

export const ClipLoader = ({ color, size }: ClipLoaderProps) => {
  return (
    <div className="flex items-center">
      <PulseLoader
        color={color === "purple" ? "#812ad2" : "#fff"}
        size={size || 8}
      />
    </div>
  );
};
