import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import face from "../../common/img/service-cosmetology.jpg";

const LIST = ["RF-лифтинг", "ELOS-омоложение", "Карбоновый пилинг"];

export const Cosmetology = () => {
    return <>
    <div className="services__box">
        <article className="services__info-box">
            <h3 className="services__info-title title title--35"><Trans>Для твоей молодости:</Trans></h3>
            <ul className="services__info-list">
                {LIST.map(info => <li className="services__info-item text text--21" key={info}><Trans>{info}</Trans></li>)}
            </ul>
            <p className="services__info text text--21"><Trans>Используем только профессиональные линейки косметических средств, проверенные опытом и временем. Видимый эффект уже после первой процедуры!</Trans></p>
        </article>
        <div className="services__img-box">
            <img className="services__img" src={face} alt="омоложение" />
        </div>
    </div>
    </>
}