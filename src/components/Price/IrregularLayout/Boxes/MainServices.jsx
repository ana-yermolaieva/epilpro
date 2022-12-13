import React from "react";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Price from "../../../../common/data/Price.json";
import allServicesImg from "../../../../common/img/home-price2.jpg";

export const MainServices = () => {
    const { t } = useTranslation();

    return <>
    <div className="price__box">
        <div className="price__info-box">
            {Price.HOME_PRICE.MAIN_SERVICES.map( el => <>
            <div className="price__info">
                <p className="price__info-title title title--22"><Trans>{el.title}</Trans></p>
                <p className="price__info-price title title--22"><Trans>{el.price}</Trans> {t("грн")}</p>
            </div>
            <p className="price__info-text text text--18"><Trans>{el.info}</Trans></p>
            </>)
            }
            <Link to="/price" className="price__info-link" aria-label={t("відкрити повний прайс на послуги")}>{t("повний прайс на послуги")}</Link>
        </div>
        <div className="price__img-box price__img-box--last">
            <img className="price__img" src={allServicesImg} alt={t("RF-ліфтинг")} />
        </div>
    </div>
    </>
}