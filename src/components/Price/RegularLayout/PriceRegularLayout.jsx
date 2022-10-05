import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { MainServices } from "./Boxes/MainServices.jsx";
import { LaserTop } from "./Boxes/LaserTop.jsx";
import { LaserMedium } from "./Boxes/LaserMedium.jsx";
import { LaserBottom } from "./Boxes/LaserBottom.jsx";
import { LaserBlocks } from "./Boxes/LaserBlocks.jsx";

export const PriceRegularLayout = () => {
    return <>
    <section className="price">
        <h2 className="visually-hidden"><Trans>Прайс на послуги</Trans></h2>
        <div className="price__container price__container--page container">
        <MainServices />
        <LaserTop />
        <LaserMedium />
        <LaserBottom />
        <LaserBlocks />
        </div>
    </section>
    </>
}