import VectorBackground from "../components/Atoms/vectorBG";
import { ChildrenProps } from "../utils/types";

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <main>
        {/* Background global */}
        <VectorBackground />
        <div className="max-w-[68rem] mx-auto">
          <div>{children}</div>
        </div>
      </main>
    </>
  );
}
