import * as React from "react";
import { poppins } from "@/src/utils/fonts";
import clsx from "clsx";
import Header from "../../Organisms/Header";
import { headerTitleProps } from "@/src/utils/types";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Image from "next/image";
import haveNoFavorite from "@/src/assets/img/haveNoFavorite.png";

// Favorite component for favorite page
export default function Favorites({
  headertitle,
  description,
}: Partial<headerTitleProps>) {
  const CardMovie = dynamic(() => import("../../Molecules/cardMovie"));
  const { saved } = useSelector((state: any) => state.favorite);
  return (
    <section
      className={clsx(
        `relative flex flex-col min-h-screen items-center justify-between px-3`,
        poppins.className
      )}
    >
      <div className="md:container grid items-center pb-8 pt-8 md:py-10 mt-10">
        <Header headertitle={headertitle} description={description} />

        {saved.length === 0 ? (
          <div className="flex flex-col items-center py-4 mt-8">
            <Image
              src={haveNoFavorite}
              width={300}
              height={300}
              priority={true}
              alt="not-found"
            />
            <h3 className="font-bold text-xl py-4">
              Oops! You have no favorite yet!
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-5 sm:mt-32">
            {saved?.map((item: any) => (
              <CardMovie
                urlImage={item.urlImage}
                title={item?.title}
                year={item?.year}
                rating={item?.rating}
                id={item?.id}
                saved={item?.save}
                key={item?.id}
                type={""}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
