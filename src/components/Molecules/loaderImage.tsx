import React from "react";
import SkeletonLoader from "../Atoms/skeletonLoader";
import clsx from "clsx";
import { classNameType } from "@/src/utils/types";

export default function LoaderImage({ className }: classNameType) {
  return (
    <div
      className={clsx(
        "grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-5",
        className
      )}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
        <SkeletonLoader key={index} />
      ))}{" "}
    </div>
  );
}
