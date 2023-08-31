import { NextPage } from "next";
import axios from "axios";
import baseAPI from "../services/API/base-API";
import { headerTitleProps } from "../utils/types";
import dynamic from "next/dynamic";

const Index: NextPage = ({ dataPopular }: Partial<headerTitleProps>) => {
  const Home = dynamic(() => import("../components/Templates/Home"));
  return (
    <>
      <Home
        headertitle="Welcome."
        description="Millions of movies, TV shows and people to discover."
        dataPopular={dataPopular}
      />
    </>
  );
};

export default Index;

export async function getServerSideProps() {
  try {
    const responsePopular = await axios.request(
      baseAPI(`movie/popular?language=en-US&page=1`)
    );

    const dataPopular = responsePopular.data.results;

    return {
      props: {
        dataPopular,
      },
    };
  } catch (error) {
    console.log("errorFetchingHomeAPI", error);
    return {
      props: {
        dataPopular: [],
      },
    };
  }
}
