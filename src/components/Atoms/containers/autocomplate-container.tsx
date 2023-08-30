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
        "overflow-y-auto overscroll-y-auto h-80 w-full rounded-xl bg-transparent px-2 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:opacity-50",
        value != "" ? visible : ""
      )}
    >
      {children}
    </ul>
  );
}
