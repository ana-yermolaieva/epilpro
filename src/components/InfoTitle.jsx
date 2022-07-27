import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

export const InfoTitle = () => { 
    return <>
    <div className="main-title">
        <section className="main-title__container container">
            <h2 className="main-title__title title title--35"><Trans>студия katarina epil</Trans></h2>
            <p className="main-title__info text text--21"><Trans>Забудьте о высыпаниях на коже и первых морщинках, о потерявшей упругость коже, вросших волосках и раздражении после бритья!</Trans></p>
        </section>
    </div>
    </>
}