import Image from "next/image";
import React from "react";
import notFoundImg from "@/src/assets/img/not-found.png";

export default function NotFround() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={notFoundImg}
        width={300}
        height={300}
        priority={true}
        alt="not-found"
      />
      <h3 className="font-bold text-xl">Oops! Your Movie not Found!</h3>
    </div>
  );
}
