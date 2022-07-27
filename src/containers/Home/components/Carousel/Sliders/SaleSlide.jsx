import React from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import Data from "../../../../../common/data/Data.json";
import saleSlide from "../../../../../common/img/sale-slide.jpg";

export const SaleSlide = () => {
    const { t } = useTranslation();

    return <>
    <section className="main-slide" key="sale-slide">
        <h1 className="visually-hidden">Sale Slide</h1>
        <div className="main-slide__box">
            <div className="main-slide__img-box">
                <img className="main-slide__img" src={saleSlide} alt="изображение мобильного телефона"/>
            </div>
            <div className="main-slide__info">
                <h2 className="main-slide__title title title--55">{t("Отмечай нас в Instagram и получи скидку в размере 10% на следующую процедуру!")}</h2>
                <Link to={Data.USER_CONTACTS.inst} className="main-slide__btn btn" target="_blank" rel="noreferrer" aria-label="открыть ссылку в инстаграмм в новом окне">{t("отметить в instagram")}</Link>
            </div>
        </div>
    </section>
    </>
}