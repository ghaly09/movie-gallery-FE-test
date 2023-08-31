import { poppins } from "@/src/utils/fonts";
import { headerTitleProps } from "@/src/utils/types";
import clsx from "clsx";
import Header from "../../Organisms/Header";
import { useSelector } from "react-redux";
import NotFround from "../../Atoms/notFround";
import CardMovie from "../../Molecules/cardMovie";
import LoaderImage from "../../Molecules/loaderImage";
import { useRouter } from "next/router";

export default function SearchResult({
  headertitle,
  description,
}: Partial<headerTitleProps>) {
  const { data, loading } = useSelector((state: any) => state.search);

  return (
    <section
      className={clsx(
        `flex flex-col min-h-screen items-center justify-between px-3`,
        poppins.className
      )}
    >
      <div className="md:container grid items-center pb-8 pt-6 md:py-10 mt-10">
        <Header headertitle={headertitle} description={description} />

        {loading === true ? (
          <LoaderImage className="sm:mt-32" />
        ) : data.length === 0 || data.results.length === 0 ? (
          <NotFround />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-5 mt-16 sm:mt-32">
            {data.results?.map((item: any) => (
              <CardMovie
                urlImage={
                  item?.poster_path == null
                    ? "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
                    : `https://image.tmdb.org/t/p/w500${item?.poster_path}`
                }
                title={item?.title}
                year={item?.release_date}
                rating={item?.vote_average}
                id={item?.id}
                key={item?.id}
                saved={item?.save}
                type={""}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
