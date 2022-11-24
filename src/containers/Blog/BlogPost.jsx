import React from "react";
import { graphql } from "gatsby";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
const HtmlToReactParser = require('html-to-react').Parser;

const BlogPost = ({ data }) => {
    const post = data.wp;
    const { t } = useTranslation();
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(post.content);
    const content = [...reactElement.filter((e) => reactElement.indexOf(e)%2)]
    console.log(content)

    return <>
    <Header data={data.locales}/>
    <div className="blog-post">
        <div className="blog-post__container container">
            <article className="blog-post__article">
                <h2 className="blog-post__title title title--45">{t(post.title)}</h2>
                <div className="blog-post__item">
                    <img className="blog-post__img" src={post.featuredImage.node.sourceUrl} alt={t("зображення шкіри")}/>
                    <div className="blog-post__info">
                    {content.map(el => (
                      <div className={el.props.className} key={`content-${el.key}`}
                      ><Trans>{el.props.children}</Trans></div>
                      ))}
                    </div>
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
    locales: allLocale(filter: {ns: {in: ["common", "suntanning-and-electrolysis", "fears-and-doubts-electro", "mens-hair-removal", "laser-redhair-removal", "elos-epil-on-intimate"]}, language: {eq: $language}}) {
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