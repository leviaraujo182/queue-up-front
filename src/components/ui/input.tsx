import * as React from "react";

import { cn } from "@/lib/utils";
import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  leftElement?: React.ReactNode;
  label?: string;
  type?: HTMLInputTypeAttribute;
  variant?: "default" | "large";
  errorMessage?: string;
};

function Input({
  className,
  variant = "default",
  type,
  leftElement,
  label,
  errorMessage,
  ...props
}: React.ComponentProps<"input"> & InputProps) {
  const getInputStyleByType = (variant: string) => {
    switch (variant) {
      case "large":
        return "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-13 w-full min-w-0 rounded-md border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex items-center gap-2";
      case "default":
        return "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex items-center gap-2";
    }
  };

  return (
    <div className="w-full">
      {label && <div className="font-[500] text-[0.9rem]"> {label} </div>}
      <div
        className={cn(getInputStyleByType(variant), className)}
        style={{ padding: "10px" }}
      >
        <div>{leftElement}</div>
        <input
          type={type}
          data-slot="input"
          className="h-full w-full border-none focus:border-none focus: outline-none"
          {...props}
        />
      </div>
      {errorMessage && (
        <label className="text-red-400 text-[0.9rem] font-[600]">
          {errorMessage}
        </label>
      )}
    </div>
  );
}

export { Input };
