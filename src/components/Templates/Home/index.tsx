import * as React from "react";
import { poppins } from "@/src/utils/fonts";
import clsx from "clsx";
import Header from "../../Organisms/Header";
import { headerTitleProps } from "@/src/utils/types";

export default function Home({ headertitle, description }: headerTitleProps) {
  return (
    <section
      className={clsx(
        `relative flex flex-col min-h-screen items-center justify-between px-3`,
        poppins.className
      )}
    >
      <div className="md:container grid items-center pb-8 pt-8 md:py-10 mt-10">
        <Header headertitle={headertitle} description={description} />
      </div>
    </section>
  );
}
