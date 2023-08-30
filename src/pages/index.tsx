import { NextPage } from "next";
import Home from "../components/Templates/Home";

const Index: NextPage = () => {
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
