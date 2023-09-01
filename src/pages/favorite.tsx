import React from "react";
import dynamic from "next/dynamic";
import SEO from "../components/Atoms/SEO/seo";
import { useSelector } from "react-redux";
import { favoriteType } from "../utils/types";

interface stateFavorite extends favoriteType {
  favorite: any;
}

export default function Favorite() {
  const Favorites = dynamic(() => import("../components/Templates/Favorites"));
  const { total } = useSelector((state: stateFavorite) => state.favorite);
  return (
    <>
      <SEO
        siteTitle={`Movie Gallery | (${total}) Favorites`}
        siteDescription="Movie Gallery project for Frontend Developer Test"
        authorName="Rachmat Ghaly"
      />
      <Favorites
        headertitle="Favorites."
        description="Here what you love and interest."
      />
    </>
  );
}
