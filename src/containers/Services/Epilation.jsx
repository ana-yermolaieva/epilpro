import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import epil from "../../common/img/service-epil.jpg";

const LIST = ["Электроэпиляция", "Лазерная ELOS-эпиляция"];

export const Epilation = () => {
    return <>
    <div className="services__box">
        <div className="services__img-box">
            <img className="services__img" src={epil} alt="лазерная эпиляция" />
        </div>
        <article className="services__info-box">
            <h3 className="services__info-title title title--35"><Trans>Для твоей гладкости:</Trans></h3>
            <ul className="services__info-list">
                {LIST.map(info => <li className="services__info-item text text--21" key={info}><Trans>{info}</Trans></li>)}
            </ul>
            <p className="services__info text text--21"><Trans>Инновационное оборудование обеспечивает бесболезненность процедуры, а профессионализм наших специалистов даёт фантастический результат. Мы не оставим ненавистным волоскам ни единого шанса!</Trans></p>
        </article>
    </div>
    </>
}