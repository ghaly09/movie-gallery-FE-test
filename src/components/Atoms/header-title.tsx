import { headerTitleProps } from "@/src/utils/types";
import React from "react";

export default function HeaderTitle({
  headertitle,
  description,
}: headerTitleProps) {
  return (
    <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-4">
      {headertitle}
      <br className="hidden sm:inline" />
      {description} <br /> Explore now.
    </h1>
  );
}
