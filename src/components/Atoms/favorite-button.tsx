import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "@/src/stores/reducers/favoriteSlice";
import { useAppDispatch } from "@/src/stores/store";
import clsx from "clsx";
import * as React from "react";
import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";

interface propsTypeFavorite {
  saved?: string;
  payload: any;
  id: number;
}

export default function FavoriteButton({
  saved,
  payload,
  id,
}: propsTypeFavorite) {
  const dispatch = useAppDispatch();
  const savedID = useSelector((state: any) => state.favorite.saved);
  const [save, setSave] = React.useState("text-slate-400");

  // Check for existing fav items, if exixting will return others
  const existingMovie: any = savedID.find((movie: any) => movie.id === id);

  const handleFavorite = () => {
    if (save == "text-slate-400" && !existingMovie) {
      setSave("text-red-500");
      dispatch(ADD_FAVORITE({ ...payload, save: "text-red-500" }));
    } else if (saved === "text-red-500" || existingMovie?.save) {
      setSave("text-slate-400");
      dispatch(REMOVE_FAVORITE(id));
    }
  };

  return (
    <button
      className="absolute top-5 right-5 bg-white hover:scale-150 duration-200 rounded-full"
      onClick={handleFavorite}
    >
      <MdFavorite
        className={clsx(
          `text-[2rem] sm:text-[2.5rem] hover:scale-150 duration-200 p-2`,
          existingMovie ? existingMovie?.save : save
        )}
        aria-hidden="true"
      />
    </button>
  );
}
