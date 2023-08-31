import dynamic from "next/dynamic";
import { useRouter } from "next/router";

export default function SearchPage() {
  const SearchResult = dynamic(
    () => import("../components/Templates/SearchResult")
  );
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
