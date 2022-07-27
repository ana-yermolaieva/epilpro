import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import homeInfo from "../../../../common/img/home-info.jpg";

export const Complex = () => {
    const { t } = useTranslation();

    return <>
    <div className="complex">
        <div className="complex__container container">
            <div className="complex__box">
                <div className="complex__img-box">
                    <img className="complex__img" src={homeInfo} alt="девушки" />
                </div>
                <article className="complex__info-box">
                    <h2 className="complex__info-title title title--45">{t("Здоровая и шелковистая кожа - это шаг на пути к уверенности в себе")}</h2>
                    <p className="complex__info text text--19">{t("С комплексом услуг от “Katarina Epil” - Вы забудете о высыпаниях на коже и первых морщинках, о потерявшей упругость коже, вросших волосках и раздражениях от бритья!")}</p>
                    <ul className="complex__info-list">
                        <li className="complex__info-item text text--19">{t("Лазерная эпиляция")}</li>
                        <li className="complex__info-item text text--19">{t("Электроэпиляция")}</li>
                        <li className="complex__info-item text text--19">{t("RF-лифтинг")}</li>
                        <li className="complex__info-item text text--19">{t("Карбоновый пилинг")}</li>
                        <li className="complex__info-item text text--19">{t("Elos-омоложение")}</li>
                    </ul>
                </article>
            </div>
        </div>
    </div>
    </>
}