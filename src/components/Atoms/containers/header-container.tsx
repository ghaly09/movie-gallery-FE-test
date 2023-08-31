import * as React from "react";
import { ChildrenProps } from "@/src/utils/types";

export default function HeadeContainer({ children }: ChildrenProps) {
  return (
    // Container for header components
    <header className="relative flex flex-col items-start gap-2">
      {children}
    </header>
  );
}
