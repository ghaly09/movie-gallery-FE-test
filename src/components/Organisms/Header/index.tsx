import * as React from "react";
import HeaderTitle from "../../Atoms/header-title";
import { headerTitleProps } from "@/src/utils/types";
import HeadeContainer from "../../Atoms/containers/header-container";
import Search from "../../Molecules/search";

export default function Header({ headertitle, description }: headerTitleProps) {
  return (
    <HeadeContainer>
      <HeaderTitle headertitle={headertitle} description={description} />
      <Search />
    </HeadeContainer>
  );
}
