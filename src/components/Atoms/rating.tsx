import { resultsFetching } from "@/src/utils/types";
import { AiFillStar } from "react-icons/ai";

export default function Rating({ rating }: Partial<resultsFetching>) {
  return (
    <div className="absolute top-5 left-5 bg-gradient-to-r from-cyan-500 to-[#00A8A3] rounded-full">
      <div className="flex flex-row items-center py-1 px-[10px]">
        <AiFillStar className="text-yellow-500 text-sm sm:text-lg" />
        <span className="text-white text-xs sm:text-sm ml-1">
          {rating != undefined && rating.toFixed(1) !== 0
            ? rating.toFixed(1)
            : "N/A"}
        </span>
      </div>
    </div>
  );
}
