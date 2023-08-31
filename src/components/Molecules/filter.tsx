import clsx from "clsx";
import { BadgeFilterByYear } from "../Atoms/badgeFilterByYear";
import { classNameType } from "@/src/utils/types";

export default function FilterBy({ className }: classNameType) {
  const yearsOfRelease: number[] = [];

  for (let i: number = 2023; i >= 1980; i--) {
    yearsOfRelease.push(i);
  }
  return (
    <div
      className={clsx(
        "flex overflow-x-hidden custom-scrollbar w-full my-3",
        className
      )}
    >
      <div className="inline-flex items-center border-r-2">
        <p className="text-sm font-semibold">Filter by year</p>
      </div>
      <div className="flex overflow-x-scroll custom-scrollbar w-full my-3">
        {yearsOfRelease.map((year: number | string, index: number) => (
          <BadgeFilterByYear key={index} text={year} />
        ))}
      </div>
    </div>
  );
}
