import * as React from "react";
import { poppins } from "@/src/utils/fonts";
import clsx from "clsx";
import Header from "../../Organisms/Header";
import { headerTitleProps } from "@/src/utils/types";
import CardMovie from "../../Molecules/cardMovie";

export default function Home({
  headertitle,
  description,
  dataPopular,
}: Partial<headerTitleProps>) {
  return (
    <section
      className={clsx(
        `relative flex flex-col min-h-screen items-center justify-between px-3`,
        poppins.className
      )}
    >
      <div className="md:container grid items-center pb-8 pt-8 md:py-10 mt-10">
        <Header headertitle={headertitle} description={description} />

        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-5 mt-16 sm:mt-32">
          {dataPopular?.map((film: any) => (
            <CardMovie
              urlImage={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
              title={film?.title}
              year={film?.release_date}
              rating={film?.vote_average}
              id={film?.id}
              type={film?.media_type}
              key={film?.id}
              saved={undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
