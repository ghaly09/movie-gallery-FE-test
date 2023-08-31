import React from "react";
import SkeletonLoader from "../Atoms/skeletonLoader";

export default function LoaderImage() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-5 sm:mt-32">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
        <SkeletonLoader key={index} />
      ))}{" "}
    </div>
  );
}
