import React from "react";
import { MainServices } from "./Boxes/MainServices.jsx";
import { LaserBlocks } from "./Boxes/LaserBlocks.jsx";

export const PriceIrregularLayout = () => {
    return <>
    <div className="price">
        <section className="price__container container">
            <h2 className="price__title title title--45">Прайс</h2>
            <LaserBlocks />
            <MainServices />
        </section>
    </div>
    </>
}