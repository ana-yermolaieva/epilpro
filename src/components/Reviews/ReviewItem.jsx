import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

import man from "../../common/img/man.svg";
import woman from "../../common/img/woman.svg";
import stars5 from "../../common/img/5stars.svg";
import quote from "../../common/img/quote.svg";

export const ReviewItem = ({ userInfo }) => {
    const { t } = useTranslation();

    return <>
    <div className="reviews__item-outer">
        <article className="reviews__item">
            <h3 className="reviews__item-title"><Trans>{userInfo.review}</Trans></h3>
            <div className="reviews__item-box">
                <img className="reviews__item-icon" src={userInfo.sex === "female" ? woman : man} alt={t("іконка користувача")} width="62" height="62"/>
                <div className="reviews__item-info">
                    <img className="reviews__item-rate" src={stars5} alt="оценка 5" width="76" height="13"/>
                    <p className="reviews__item-client">{userInfo.client}</p>
                </div>
                <div className="reviews__item-quotes">
                    <img className="reviews__item-quote" src={quote} alt="кавычка" width="27" height="55"/>
                    <img className="reviews__item-quote" src={quote} alt="кавычка" width="27" height="55"/>
                </div>
            </div>
        </article>
    </div>
    </>
}