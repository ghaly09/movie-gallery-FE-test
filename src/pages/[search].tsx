import React from "react";
import SearchResult from "../components/Templates/SearchResult";
import { useRouter } from "next/router";

export default function SearchPage() {
  const router = useRouter();
  const { search } = router.query;
  return (
    <>
      <SearchResult
        headertitle={`${search}`}
        description="Millions of movies, TV shows and people to discover."
      />
    </>
  );
}
