import Head from "next/head";
import React from "react";

interface SEOProps {
  siteTitle: string;
  siteDescription: string;
  authorName: string;
}

export default function SEO({
  siteTitle,
  siteDescription,
  authorName,
}: SEOProps) {
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={siteDescription} />
      <meta name="author" content={authorName} />
      <meta name="robots" content="index, follow" />
    </Head>
  );
}
