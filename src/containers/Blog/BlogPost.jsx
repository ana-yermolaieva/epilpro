import React from "react";
import { graphql } from "gatsby";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

const BlogPost = ({ data }) => {
    const post = data.wp;

    return <>
    <Header />
    <div className="blog-post">
        <div className="blog-post__container container">
            <article className="blog-post__article">
                <h2 className="blog-post__title title title--45">{post.title}</h2>
                <div className="blog-post__item">
                    <img className="blog-post__img" src={post.featuredImage.node.sourceUrl} alt="зображення шкіри"/>
                    <div className="blog-post__info" dangerouslySetInnerHTML={{__html: post.content}} />
                </div>
            </article>
        </div>
        <div className="blog-post__btn-container container">
            <Link to="/blog" className="blog-post__btn btn" ><Trans>в блог</Trans></Link>
        </div>
    </div>
    <Footer />
    </>
}

export default BlogPost;

export const query = graphql`
  query ($slug: String!, $language: String!) {
    locales: allLocale(filter: {ns: {in: ["common"]}, language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    wp: wpPost(slug: {eq: $slug}) {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
}`