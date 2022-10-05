import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

export const InfoTitle = () => { 
    return <>
    <div className="main-title">
        <section className="main-title__container container">
            <h2 className="main-title__title title title--35"><Trans>студія katarina epil</Trans></h2>
            <p className="main-title__info text text--21"><Trans>Забудьте про висипи на шкірі та перші зморшки, втрачену пружність шкіри, вросле волосся та подразнення після гоління!</Trans></p>
        </section>
    </div>
    </>
}