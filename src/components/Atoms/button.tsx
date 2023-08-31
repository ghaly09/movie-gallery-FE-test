import * as React from "react";
import clsx from "clsx";
import { buttonVariantsTypes } from "@/src/utils/types";

// Variants for button styles reusable components
const buttonVariants: buttonVariantsTypes = {
  variant: {
    default: "bg-[#0f1729] text-[#f8fafc] hover:bg-[#0f1729]/90",
    outline: "border border-[#e1e7ef] hover:bg-[#f1f5f9] hover:text-[#0f1729]",
    secondary: "bg-[#f1f5f9] text-[#0f1729] hover:bg-[#f1f5f9]/80",
  },
  size: {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
  size: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        // changeable className, variant, size and props for button, use clsx for make it more easer to put variable or state
        className={clsx(
          variant,
          size,
          className,
          "inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#94a3b8] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-[#ffffff]"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
// displayName for import component to other components
Button.displayName = "Button";

export { Button, buttonVariants };
