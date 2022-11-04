import React from "react";
import { graphql } from "gatsby";
import { Header } from "../components/Header/Header.jsx";
import { InfoTitle } from "../components/InfoTitle.jsx";
import { Contacts } from "../containers/Contacts/Contacts.jsx";
import { Reviews } from "../components/Reviews/Reviews.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

export default function ContactsPage({data}) {
    return <>
    <Header data={data.locales}/>
    <InfoTitle />
    <Contacts />
    <Reviews />
    <Footer />
    </>
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["common", "contacts"]}, language: {eq: $language}}) {
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