import { fetchDataHome } from "@/src/stores/reducers/homeSlice";
import { useAppDispatch } from "@/src/stores/store";
import { Badge } from "./badge";

interface Text {
  text: number | string;
}

export function BadgeFilterByYear({ text }: Text) {
  const dispatch = useAppDispatch();
  const handleFIlter = () => {
    dispatch(
      fetchDataHome(
        `movie/popular?language=en-US&page=1&primary_release_year=${text}`
      )
    );
  };
  return (
    <Badge
      className="cursor-pointer mx-1 my-1 text-xl border-2 border-slate-300 hover:bg-slate-300"
      variant="outline"
      onClick={handleFIlter}
    >
      {text}
    </Badge>
  );
}
