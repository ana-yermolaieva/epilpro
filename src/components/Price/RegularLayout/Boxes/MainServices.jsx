import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Price from "../../../../common/data/Price.json";
import mainServices from "../../../../common/img/price-1.jpg";

export const MainServices = () => {
    const { t } = useTranslation();

    return <>
    <div className="price__box price__box--page">
        <div className="price__img-box">
            <img className="price__img" src={mainServices} alt="лазерная эпиляция" />
        </div>
        <div className="price__info-box price__info-box--page">
            <h3 className="price__title price__title--box title title--45"><Trans>Прайс на послуги</Trans></h3>
            {Price.PRICE.MAIN_SERVICES.map(el =>
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