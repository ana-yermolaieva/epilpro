import React from "react";
import { Link } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";  

const HtmlToReactParser = require('html-to-react').Parser;

export const BlogCard = ({ info, link }) => {
    const { t } = useTranslation();
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(info.excerpt);

    return <>
    <article className="blog__item-outer">
        <h3 className="visually-hidden">{info.title}</h3>
        <div className="blog__item">
            <Link to={link+info.slug} className="blog__item-title title title--26" aria-label={t("перейти в блог")}><Trans>{info.title}</Trans></Link>
            <img className="blog__item-img" src={info.featuredImage.node.sourceUrl} alt={t("зображення")} />
            <p className="blog__item-info text text--18">{t(reactElement[0].props.children)}</p>
        </div>
    </article>
    </>
}