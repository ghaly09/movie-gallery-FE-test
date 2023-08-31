import { ChildrenProps } from "@/src/utils/types";
import clsx from "clsx";

interface visibleProps extends ChildrenProps {
  visible: string;
  value: string;
}

export default function AutoComplateContainer({
  children,
  visible,
  value,
}: visibleProps) {
  return (
    <ul
      className={clsx(
        "absolute overflow-y-auto overscroll-y-auto z-40 h-80 w-full bg-white bg-opacity-90 rounded-xl px-2 py-2 mt-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:opacity-50",
        value != "" ? visible : ""
      )}
    >
      {children}
    </ul>
  );
}
