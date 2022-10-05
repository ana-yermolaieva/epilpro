import React from "react";
import { MainServices } from "./Boxes/MainServices.jsx";
import { LaserBlocks } from "./Boxes/LaserBlocks.jsx";
import { Trans } from "gatsby-plugin-react-i18next"; 

export const PriceIrregularLayout = () => {
    return <>
    <div className="price">
        <section className="price__container container">
            <h2 className="price__title title title--45"><Trans>Прайс</Trans></h2>
            <LaserBlocks />
            <MainServices />
        </section>
    </div>
    </>
}