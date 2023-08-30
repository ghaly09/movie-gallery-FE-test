import * as React from "react";
import { headerTitleProps } from "@/src/utils/types";

export default function HeaderTitle({
  headertitle,
  description,
}: headerTitleProps) {
  return (
    // Title and description for header with props headertitle and description
    <div>
      <h1 className="text-4xl font-extrabold leading-none md:leading-tight tracking-tighter md:text-[2.5rem] mb-2 md:mb-0">
        {headertitle}
      </h1>
      <h2 className="text-2xl font-extrabold leading-1 md:leading-tight tracking-tighter md:text-4xl mb-4">
        {description} <br /> Explore now.
      </h2>
    </div>
  );
}
