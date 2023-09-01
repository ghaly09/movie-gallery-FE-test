import * as React from "react";
import clsx from "clsx";
import { InputProps } from "@/src/utils/types";

// Input reusable component
/**
 * Input Component
 *
 * This is a reusable input component built using React for handling various input types.
 * @component
 * @param {object} props - The input component props.
 * @param {string} [props.className] - Additional CSS classes to apply to the input.
 * @param {string} props.type - The type of input (e.g., text, password, email).
 * @param {...any} props.props - Any additional props you'd like to pass to the input element.
 * @param {React.Ref<HTMLInputElement>} ref - A React ref to access the input element.
 * @returns {JSX.Element} - Returns the input component.
 *
 * @example
 * // Basic usage:
 * <Input type="text" placeholder="Enter text" />
 *
 * @example
 * // Using additional CSS classes:
 * <Input type="password" className="custom-class" />
 */

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        // type for input data types
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
