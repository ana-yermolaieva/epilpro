import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Price from "../../../../common/data/Price.json";
import laserTopImg from "../../../../common/img/price-2.jpg";

export const LaserTop = () => {
    const { t } = useTranslation();

    return <>
    <div className="price__box price__box--page">
        <div className="price__img-box">
            <img className="price__img" src={laserTopImg} alt={t("ЕЛЕКТРОЕПІЛЯЦІЯ")} />
        </div>
        <div className="price__info-box">
        {Price.PRICE.LASER_TOP.map(el =>
            <>
            <div className="price__info">
                <p className="price__info-title title title--22"><Trans>{el.title}</Trans></p>
                <p className="price__info-price title title--22"><Trans>{el.price}</Trans> {t("грн")}</p>
            </div>
            <p className="price__info-text text text--18"><Trans>{el.info}</Trans></p>
            </>
        )}
        </div>
    </div>
    </>
}