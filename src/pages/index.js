import React from "react";
import { graphql } from "gatsby";
import { Header } from "../components/Header/Header.jsx";
import { Home } from "../containers/Home/Home.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

export default function HomePage({data}) {
  
  return <>
    <Header data={data.path}/>
    <Home data={data} path={data.locales.edges[0].node.language}/>
    <Footer />
  </>
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["common", "index"]}, language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    wp: allWpPost {
    nodes {
      id
      title
      content
      excerpt
      slug
      tags {
        nodes {
          name
        }
      }
      featuredImage {
        node {
        sourceUrl
        }
      }
    } 
  }
}`