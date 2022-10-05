import React from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import Data from "../../../../../common/data/Data.json";
import legs from "../../../../../common/img/legs.png";

export const MainSlide = () => {
    const { t } = useTranslation();

    return <>
    <section className="main-slide" key="main-slide">
        <h1 className="visually-hidden">Main Slide</h1>
        <div className="main-slide__box">
            <div className="main-slide__info">
                <h2 className="main-slide__title title title--55">{t("Приходь за гладкою шкірою!")}</h2>
                <p className="main-slide__text text">{t("Студія лазерної та електроепіляції, апаратної косметології в Одесі. Безкоштовна консультація. Позбавлення від небажаного волосся назавжди. Очищення шкіри на клітинному рівні та омолодження. Безпечно та безболісно.")}</p>
                <Link to={Data.USER_CONTACTS.inst} className="main-slide__btn btn" target="_blank" rel="noreferrer">{t("записатися онлайн")}</Link>
            </div>
            <div className="main-slide__img-box">
                <img className="main-slide__img" src={legs} alt="изображение"/>
            </div>
        </div>
    </section>
    </>
}