import React from "react";
import { Link } from "gatsby";
import { BlogCard } from "./BlogCard.jsx";
import { Trans } from "gatsby-plugin-react-i18next";

export const Blog = ({ list, data }) => {

    return <>
    <div className="blog">
        <section className="blog__container container">
            <h2 className="blog__title title title--45"><Trans>Все про епіляцію та не тільки</Trans></h2>
            <div className="blog__box">
            {list === "blog"
            ? data.nodes.filter(node => (node.tags.nodes[0].name === `blog-ua`))
            .map(node => (
                <BlogCard link="" info={node} key={"blogCard"+node.title} /> 
            ))
            : data.nodes.filter(node => (node.tags.nodes[1].name === `main-ua`))
            .map(node => (
                <BlogCard link="blog/" info={node} key={"blogCard"+node.title} />
            ))}
            </div>
            {list === "blog"
            ? <Link to="/" className="blog__btn btn"><Trans>на головну</Trans></Link>
            : <Link to="/blog" className="blog__btn btn"><Trans>в блог</Trans></Link>}
        </section>
    </div>
    </>
}