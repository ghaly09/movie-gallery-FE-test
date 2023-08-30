import * as React from "react";
import { poppins } from "@/src/utils/fonts";
import clsx from "clsx";
import Header from "../../Organisms/Header";
import { Input } from "../../Atoms/input";

export default function Home() {
  return (
    <section
      className={clsx(
        `flex flex-col min-h-screen items-center justify-between px-3`,
        poppins.className
      )}
    >
      <div className="md:container grid items-center pb-8 pt-6 md:py-10">
        <Header
          headertitle="Welcome."
          description="Millions of movies, TV shows and people to discover."
        />
      </div>
    </section>
  );
}
