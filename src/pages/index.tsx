import { NextPage } from "next";
import dynamic from "next/dynamic";
import * as React from "react";

const Index: NextPage = () => {
  const Home = dynamic(() => import("../components/Templates/Home"));

  return (
    <>
      <Home
        headertitle="Welcome."
        description="Millions of movies, TV shows and people to discover."
      />
    </>
  );
};

export default Index;
