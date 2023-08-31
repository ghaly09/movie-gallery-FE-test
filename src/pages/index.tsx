import { NextPage } from "next";
import dynamic from "next/dynamic";
import * as React from "react";
import { fetchDataHome } from "../stores/reducers/homeSlice";
import { useAppDispatch } from "../stores/store";

const Index: NextPage = () => {
  const Home = dynamic(() => import("../components/Templates/Home"));
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchDataHome(`movie/popular?language=en-US&page=1`));
  }, [dispatch]);

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
