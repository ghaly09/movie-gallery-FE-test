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
import { useAppDispatch } from "@/src/stores/store";
import { fetchDataHome } from "@/src/stores/reducers/homeSlice";

export default function Home({
  headertitle,
  description,
}: Partial<headerTitleProps>) {
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState<number>(1);
  const [items, setItems] = React.useState<any[]>([]);
  const { data, loading, year } = useSelector((state: any) => state.home);

  // handle Fetch movies
  const fetchMovies = () => {
    dispatch(
      fetchDataHome(
        `movie/popular?language=en-US&page=${page}&primary_release_year=${year}`
      )
    );
    if (data.length != 0) {
      setItems((prevItems: any) => {
        return prevItems !== data.results
          ? [...prevItems, ...data.results]
          : [...prevItems];
      });
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Fetch movies
  React.useEffect(() => {
    dispatch(
      fetchDataHome(
        `movie/popular?language=en-US&page=1&primary_release_year=${year}`
      )
    );
    // set page + 1 and set items to empty for input other data based on year
    setPage((prevPage) => prevPage + 1);
    setItems([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  // // handle scroll in using infinite scroll
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    {
      fetchMovies();
    }
  };

  // // detect scroll for calling handleScroll
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

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
          <>
            <LoaderImage className="" />
            <div className="inline-flex justify-center">
              <p className="text-3xl font-bold text-center">🌀 Loading...</p>
            </div>
          </>
        ) : data.length === 0 || data.results.length === 0 ? (
          <NotFround />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-5">
            {items.length == 0 ?? year !== ""
              ? data.results?.map((film: any) => (
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
                ))
              : items?.map((film: any) => (
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
        )}
      </div>
    </section>
  );
}
