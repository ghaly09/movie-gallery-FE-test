import clsx from "clsx";
import * as React from "react";

// Make skeleton for loading components
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
