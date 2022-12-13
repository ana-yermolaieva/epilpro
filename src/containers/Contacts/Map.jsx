import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Data from "../../common/data/Data.json";

export const Map = () => {
    const { t } = useTranslation();

    return <>
    <div className="map">
        <section className="map__container container">
            <h2 className="visually-hidden"><Trans>як нас знайти:</Trans></h2>
            <div className="map__box">
                <article className="map__item-outer">
                    <h3 className="map__item-title title title--35"><Trans>ми на мапі:</Trans></h3>
                    <div className="map__location">
                        <iframe className="map__iframe" src={Data.USER_CONTACTS.google_maps} width="100%" height="718" loading="lazy" title="ми на мапі" aria-label={t("наше розташування на мапі")}></iframe>  
                    </div>
                </article>
                <article className="map__item-outer">
                    <h3 className="map__item-title title title--35"><Trans>як нас знайти:</Trans></h3>
                    <div className="map__location">
                        <iframe className="map__iframe" src={Data.USER_CONTACTS.youtube} width="100%" height="718" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen aria-label={t("відео як нас знайти")}></iframe>
                    </div>
                </article>
            </div>
        </section>
    </div>
    </>
}