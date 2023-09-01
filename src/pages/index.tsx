import { NextPage } from "next";
import dynamic from "next/dynamic";
import * as React from "react";
import SEO from "../components/Atoms/SEO/seo";

const Index: NextPage = () => {
  const Home = dynamic(() => import("../components/Templates/Home"));

  return (
    <>
      <SEO
        siteTitle="Movie Gallery | Home"
        siteDescription="Movie Gallery project for Frontend Developer Test"
        authorName="Rachmat Ghaly"
      />
      <Home
        headertitle="Welcome."
        description="Millions of movies, TV shows and people to discover."
      />
    </>
  );
};

export default Index;
