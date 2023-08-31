import * as React from "react";
import clsx from "clsx";
import { InputProps } from "@/src/utils/types";

// Input reusable component
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        //   type for input data types
        type={type}
        // changeable className for input, use clsx for make itu more easer to put variable or state
        className={clsx(
          "flex h-10 w-full border border-slate-300 bg-transparent px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#65758b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#94a3b8] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
// displayName for import component to other components
Input.displayName = "Input";

export { Input };
