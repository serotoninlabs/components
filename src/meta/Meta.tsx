import React from "react";
import { useTheme } from "styled-components";

export interface MetaProps {
  pageTitle: string;
  siteName: string;
  thumbnail?: string;
  container: React.FunctionComponent | React.ComponentClass;
}

export const Meta: React.FC<MetaProps> = (props) => {
  const theme = useTheme();
  const Head = props.container;
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link rel="icon" type="image/png" href="/favicon.png" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href={`https://fonts.googleapis.com/css2?family=${theme.fonts.sansSerif.replace(
          " ",
          "+"
        )}:wght@200;400;700&family=${theme.fonts.serif.replace(
          " ",
          "+"
        )}:wght@200;400;700&&family=${theme.fonts.mono.replace(
          " ",
          "+"
        )}:wght@200;400;700&display=swap`}
        rel="stylesheet"
      />
      <title>
        {props.siteName} | {props.pageTitle}
      </title>
      <meta property="og:title" content={props.pageTitle}></meta>

      {props.thumbnail && (
        <>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:image" content={props.thumbnail}></meta>
          <meta property="og:image" content={props.thumbnail}></meta>
        </>
      )}
    </Head>
  );
};
