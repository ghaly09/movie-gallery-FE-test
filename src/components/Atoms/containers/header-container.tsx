import { ChildrenProps } from "@/src/utils/types";
import React from "react";

export default function HeadeContainer({ children }: ChildrenProps) {
  return (
    // Container for header components
    <div className="flex flex-col items-start gap-2">{children}</div>
  );
}
