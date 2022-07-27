import React from "react";
import { graphql } from "gatsby";
import { Header } from "../components/Header/Header.jsx";
import { Blog } from "../components/Blog/Blog.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

export default function BlogPage({data}) {
    return <>
    <Header />
    <Blog data={data.wp} path={data.locales.edges[0].node.language} list="blog"/>
    <Footer />
    </>
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["common", "blog"]}, language: {eq: $language}}) {
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