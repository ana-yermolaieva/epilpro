import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import epil from "../../common/img/service-epil.jpg";

const LIST = ["Електроепіляція", "Лазерна ELOS-епіляція"];

export const Epilation = () => {
    return <>
    <div className="services__box">
        <div className="services__img-box">
            <img className="services__img" src={epil} alt="лазерная эпиляция" />
        </div>
        <article className="services__info-box">
            <h3 className="services__info-title title title--35"><Trans>Для твоєї гладкості:</Trans></h3>
            <ul className="services__info-list">
                {LIST.map(info => <li className="services__info-item text text--21" key={info}><Trans>{info}</Trans></li>)}
            </ul>
            <p className="services__info text text--21"><Trans>Інноваційне обладнання забезпечує безболісність процедури, а професіоналізм наших спеціалістів дає фантастичний результат. Ми не залишимо небажаному волоссю жодного шансу!</Trans></p>
        </article>
    </div>
    </>
}