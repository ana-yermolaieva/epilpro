import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { INFOLIST } from "./AchievementsList.jsx";

export const AchievementsCard = () => {
    return <>
    {INFOLIST.map(info => 
        <div className="achievements__item-outer"  key={"achievement_"+info.title}>
            <article className="achievements__item">
                <h3 className="achievements__item-title title title--26"><Trans>{info.title}</Trans></h3>
                <img className="achievements__item-icon" src={info.img} width="50px" height="50px" alt="icon" />
                <p className="achievements__item-info text text--19"><Trans>{info.info}</Trans></p>
            </article>
        </div>
    )}
    </>
}