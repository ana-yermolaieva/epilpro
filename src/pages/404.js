import React from "react";
import { graphql } from "gatsby";
import { Header } from "../components/Header/Header.jsx";
import { Footer } from "../components/Footer/Footer.jsx";
import { useTranslation } from "gatsby-plugin-react-i18next";

export default function UnknownPage({ data }) {
    const { t } = useTranslation();
    let info = data.locales.edges[0].node.language;
    let imgLang = `notFound notFound--${info}`;
    
    return <>
    <Header data={data.locales}/>
    <div className={imgLang} aria-label={t("сторінку не знайдено")}/>
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