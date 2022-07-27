import React from "react";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Price from "../../../../common/data/Price.json";
import laserImg from "../../../../common/img/home-price.jpg";

export const LaserBlocks = () => {
    const { t } = useTranslation();

    return <>
    <div className="price__box">
        <div className="price__img-box">
            <img className="price__img" src={laserImg} alt="лазерная эпиляция" />
        </div>
        <div className="price__info-box">
            {Price.HOME_PRICE.LASER_BLOCKS.map( el => <>
            <div className="price__info">
                <p className="price__info-title title title--22"><Trans>{el.title}</Trans></p>
                <p className="price__info-price title title--22">{el.price} {t("грн")}</p>
            </div>
            <p className="price__info-text text text--18"><Trans>{el.info}</Trans></p>
            </>)
            }
            <Link to="/price" className="price__info-link">{t("прайс на ELOS-эпиляцию")}</Link>
        </div>
    </div>
    </>
}