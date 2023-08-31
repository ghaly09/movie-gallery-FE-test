// import { fetchDataDetail } from "@/redux/slices/slice-detail";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../Atoms/rating";
import FavoriteButton from "../Atoms/favorite-button";
import { fetchDataDetail } from "@/src/stores/reducers/detailSlice";
import { useAppDispatch } from "@/src/stores/store";

interface CardPropsType {
  urlImage: string;
  year: any;
  title?: string;
  rating: number;
  id: number;
  type: string;
  saved?: string;
}

const CardMovie = (props: CardPropsType) => {
  const { urlImage, year, title, rating, id, type, saved } = props;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const src = `${
    urlImage ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;

  const payload = { urlImage, year, title, rating, id };
  const date = new Date(year);
  const dateFormat: any = { month: "long", day: "numeric", year: "numeric" };
  const releaseDate = date.toLocaleDateString("en-US", dateFormat);

  // fetch Data Details
  const handleDetail = () => {
    dispatch(fetchDataDetail(`movie/${id}?language=en-US`));
    router.push(`/detail/${id}`);
  };

  return (
    <div className="relative ease-in-out duration-300 hover:scale-110 hover:cursor-pointer">
      {/* image */}
      <div className="flex justify-center" onClick={handleDetail}>
        <Image
          className="lg:w-full w-60 md:h-[400px] lg:h-96 flex-1 object-cover rounded-xl"
          loader={() => src}
          src={src}
          width={100}
          height={100}
          priority={true}
          alt="movie-picture-not-found"
        />
      </div>

      {/* rating */}
      <Rating rating={rating} />

      {/* Favorite */}
      <FavoriteButton saved={saved} payload={payload} id={id} />

      {/* Title and year */}
      <div className="flex flex-col py-4 ml-4 flex-1">
        <h4 className="font-semibold text-[20px]">{title}</h4>
        <p className="text-sm text-black">
          {year === undefined ? " " : releaseDate}
        </p>
      </div>
    </div>
  );
};

export default CardMovie;
