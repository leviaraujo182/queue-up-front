import * as React from "react";

import { cn } from "@/lib/utils";

type TextAreaProps = {
  label?: string;
  errorMessage?: string;
};

function Textarea({
  className,
  label,
  errorMessage,
  ...props
}: React.ComponentProps<"textarea"> & TextAreaProps) {
  return (
    <div className="w-full">
      {label && <div className="font-[500] text-[0.9rem]"> {label} </div>}
      <textarea
        data-slot="textarea"
        className={cn(
          "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        {...props}
      />
      {errorMessage && (
        <label className="text-red-400 text-[0.9rem] font-[600]">
          {errorMessage}
        </label>
      )}
    </div>
  );
}

export { Textarea };
