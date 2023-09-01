import clsx from "clsx";
import * as React from "react";

// Make skeleton for loading components
/**
 * Skeleton Component
 *
 * The Skeleton component provides a loading placeholder with a pulsating animation.
 * It's useful for indicating that content is being loaded, especially in asynchronous operations.
 *
 * @component
 * @param {object} props - The Skeleton component props.
 * @param {string} [props.className] - Additional CSS classes to apply to the skeleton.
 * @param {...any} props.props - Any additional props you'd like to pass to the skeleton element.
 * @returns {JSX.Element} - Returns the Skeleton component.
 *
 * @example
 * // Basic usage:
 * <Skeleton />
 *
 * @example
 * // Using additional CSS classes:
 * <Skeleton className="custom-class" />
 */

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx("animate-pulse rounded-md bg-[#f1f5f9]", className)}
      {...props}
    />
  );
}

export { Skeleton };
