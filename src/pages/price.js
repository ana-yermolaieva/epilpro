import React from "react";
import { graphql } from "gatsby";
import { Header } from "../components/Header/Header.jsx";
import { PriceRegularLayout } from "../components/Price/RegularLayout/PriceRegularLayout.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

export default function PricePage({data}) {
    return <>
    <Header data={data.locales}/>
    <PriceRegularLayout />
    <Footer />
    </>
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["common", "price"]}, language: {eq: $language}}) {
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