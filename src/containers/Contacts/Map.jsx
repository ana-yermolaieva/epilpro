import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import Data from "../../common/data/Data.json";

export const Map = () => {
    return <>
    <div className="map">
        <section className="map__container container">
            <h2 className="visually-hidden"><Trans>как нас найти:</Trans></h2>
            <div className="map__box">
                <article className="map__item-outer">
                    <h3 className="map__item-title title title--35"><Trans>мы на карте:</Trans></h3>
                    <div className="map__location">
                        <iframe className="map__iframe" src={Data.USER_CONTACTS.google_maps} width="100%" height="718" loading="lazy" title="ми на мапі"></iframe>  
                    </div>
                </article>
                <article className="map__item-outer">
                    <h3 className="map__item-title title title--35"><Trans>как нас найти:</Trans></h3>
                    <div className="map__location">
                        <iframe className="map__iframe" src={Data.USER_CONTACTS.youtube} width="100%" height="718" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </article>
            </div>
        </section>
    </div>
    </>
}