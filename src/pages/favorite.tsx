import React from "react";
import dynamic from "next/dynamic";

export default function Favorite() {
  const Favorites = dynamic(() => import("../components/Templates/Favorites"));
  return (
    <>
      <Favorites
        headertitle="Favorites."
        description="Here what you love and interest."
      />
    </>
  );
}
