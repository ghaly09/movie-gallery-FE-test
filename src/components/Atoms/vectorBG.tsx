import bgVector from "@/src/assets/img/metamorp01.svg";
import Image from "next/image";

export default function VectorBackground() {
  return (
    <Image
      className="absolute right-0 top-80 w-[300px] sm:w-[1000px] sm:h-[1000px] h-[300px] sm:top-10 -z-10 opacity-80"
      src={bgVector}
      width={500}
      height={500}
      alt={"oval vector"}
    />
  );
}
