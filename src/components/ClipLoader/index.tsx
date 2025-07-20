"use client";

import { PulseLoader } from "react-spinners";

export const ClipLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <PulseLoader color="#fff" size={8} />
    </div>
  );
};
