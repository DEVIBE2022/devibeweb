import { useLocation } from "@reach/router";
import React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import favIcon from "../../images/favicon.svg";

interface CustomHeadProps {
  description?: string;
  lang?: string;
  title?: string;
  image?: string;
  article?: boolean;
  canonicalUrl?: string;
  nonCanonical?: boolean;
  author?: string;
  noindex?: boolean;
}

export const CustomHead: React.FC<React.PropsWithChildren<CustomHeadProps>> = ({
  description: propDescription,
  lang: propLang,
  title: propTitle,
  image,
  article,
  canonicalUrl: propCanonicalPath,
  nonCanonical = false,
  author: propAuthor,
  noindex = false,
  children,
}) => {
  const {
    title: siteTitle,
    description: siteDescription,
    siteUrl,
  } = useSiteMetadata();

  // By default, we will construct the canonical path ourselves, but this can
  // be overwritten via the component properties
  const { pathname } = useLocation();
  const defaultCanonicalPath = `${siteUrl}${pathname}`;
  const canonicalUrl = propCanonicalPath || defaultCanonicalPath;

  const siteName = siteTitle || "My Gatsby Blog";
  const title = propTitle;
  const description = propDescription || siteDescription || "";
  const lang = propLang || "en_US";

  return (
    <>
      <title>{title}</title>
      {!nonCanonical && <link rel="canonical" href={canonicalUrl} />}
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={lang} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" type="image/svg+xml" href={favIcon} />
      <meta name="author" content={propAuthor} />
      {noindex && <meta name="googlebot" content="noindex, nofollow" />}
      {children}
    </>
  );
};
