import * as React from "react";
import HeaderTitle from "../../Atoms/header-title";
import { headerTitleProps } from "@/src/utils/types";
import HeadeContainer from "../../Atoms/containers/header-container";
import SearchBar from "../../Molecules/searchBar";

export default function Header({
  headertitle,
  description,
}: Partial<headerTitleProps>) {
  return (
    <HeadeContainer>
      <HeaderTitle headertitle={headertitle} description={description} />
      <SearchBar />
    </HeadeContainer>
  );
}
