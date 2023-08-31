import * as React from "react";
import { poppins } from "@/src/utils/fonts";
import clsx from "clsx";
import Header from "../../Organisms/Header";
import { headerTitleProps } from "@/src/utils/types";
import CardMovie from "../../Molecules/cardMovie";
import FilterBy from "../../Molecules/filter";
import { useSelector } from "react-redux";
import LoaderImage from "../../Molecules/loaderImage";
import NotFround from "../../Atoms/notFround";

export default function Home({
  headertitle,
  description,
}: Partial<headerTitleProps>) {
  const { data, loading } = useSelector((state: any) => state.home);
  return (
    <section
      className={clsx(
        `relative flex flex-col min-h-screen items-center justify-between px-3`,
        poppins.className
      )}
    >
      <div className="md:container grid items-center pb-8 pt-8 md:py-10 mt-10">
        <Header headertitle={headertitle} description={description} />

        <FilterBy className="mt-16 sm:mt-32" />
        {loading === true ? (
          <LoaderImage className="" />
        ) : data.length === 0 || data.results.length === 0 ? (
          <NotFround />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-5">
            {data.results?.map((film: any) => (
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
            F
          </div>
        )}
      </div>
    </section>
  );
}
