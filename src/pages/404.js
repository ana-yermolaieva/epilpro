import React from "react";
import { graphql } from "gatsby";
import { Header } from "../components/Header/Header.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

export default function UnknownPage({ data }) {
    let info = data.locales.edges[0].node.language;
    let imgLang = `notFound notFound--${info}`;
    
    return <>
    <Header />
    <div className={imgLang} />
    <Footer />
    </>
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["common"]}, language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;