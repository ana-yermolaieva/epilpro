import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import face from "../../common/img/service-cosmetology.jpg";

const LIST = ["RF-ліфтинг", "ELOS-омолодження", "Карбоновий пілінг"];

export const Cosmetology = () => {
    return <>
    <div className="services__box">
        <article className="services__info-box">
            <h3 className="services__info-title title title--35"><Trans>Для твоєї молодості:</Trans></h3>
            <ul className="services__info-list">
                {LIST.map(info => <li className="services__info-item text text--21" key={info}><Trans>{info}</Trans></li>)}
            </ul>
            <p className="services__info text text--21"><Trans>Використовуємо тільки професійні лінійки косметичних засобів, перевірені досвідом та часом. Видимий ефект одразу після першої процедури!</Trans></p>
        </article>
        <div className="services__img-box">
            <img className="services__img" src={face} alt="омоложение" />
        </div>
    </div>
    </>
}