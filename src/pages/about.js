import React from "react";
import { graphql } from "gatsby";
import { Header } from "../components/Header/Header.jsx";
import { AboutPage } from "../containers/About/AboutPage.jsx";
import { Footer } from "../components/Footer/Footer.jsx";
import { Reviews } from "../components/Reviews/Reviews.jsx";

export default function About({ data }) {
    return <>
    <Header data={data.locales}/>
    <AboutPage data={data}/>
    <Reviews />
    <Footer />
    </>
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["common", "about"]}, language: {eq: $language}}) {
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
