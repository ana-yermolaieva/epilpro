import React from "react";
import { Link } from "gatsby"; 

export const BlogCard = ({ info, link }) => {
    return <>
    <article className="blog__item-outer">
        <h3 className="visually-hidden">{info.title}</h3>
        <div className="blog__item">
            <Link to={link+info.slug} className="blog__item-title title title--26" aria-label="переход в блог">{info.title}</Link>
            <img className="blog__item-img" src={info.featuredImage.node.sourceUrl} alt="Лазерная эпиляция" />
            <p className="blog__item-info text text--18" dangerouslySetInnerHTML={{__html: info.excerpt}} />
        </div>
    </article>
    </>
}