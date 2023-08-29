import React from "react";
import { ChildrenProps } from "../utils/types";
import Head from "next/head";

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Head>
        <title>Movie Gallery</title>
        <meta name="author" content="Rachmat Ghaly" />
        <meta
          name="description"
          content="Movie Gallery project for Frontend Developer Test"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main>
        <div className="max-w-[68rem] mx-auto">
          <div>{children}</div>
        </div>
      </main>
    </>
  );
}
