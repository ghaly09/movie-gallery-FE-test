import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import SEO from "../components/Atoms/SEO/seo";

export default function SearchPage() {
  const SearchResult = dynamic(
    () => import("../components/Templates/SearchResult")
  );
  const router = useRouter();
  const { search } = router.query;
  return (
    <>
      <SEO
        siteTitle={`Movie Gallery | ${search}`}
        siteDescription="Movie Gallery project for Frontend Developer Test"
        authorName="Rachmat Ghaly"
      />
      <SearchResult
        headertitle={`${search}`}
        description="Millions of movies, TV shows and people to discover."
      />
    </>
  );
}
