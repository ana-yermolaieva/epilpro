import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import aboutPic from "../../common/img/about-pic.jpg";

export const AboutInfo = () => {
    return <>
    <div className="about">
        <div className="about__container container">
            <div className="about__box">
                <div className="about__img-box">
                    <img className="about__img" src={aboutPic} alt="фото из студии" />
                </div>
                <section className="about__info-box">
                    <h2 className="about__title title title--35"><Trans>студія Katarina Epil</Trans></h2>
                    <p className="about__info text text--19"><Trans>“Katarina Epil” - це сучасна студія, яка розташована в селищі Котовського, де надаються послуги апаратної косметології, лазерної та електроепліляції.</Trans></p> 
                    <p className="about__info text text--19"><Trans>Тут працюють тільки професіонали, новітнє обладнання та інноваційні технології забезпечують безболісність процедур. Індивідуальний підхід до кожного клієнта дозволяє досягти бажаних результів за короткий термін.</Trans></p>  
                    <p className="about__info text text--19"><Trans>Безкоштовна консультація, гнучна система знижок для нових та постійних клієнтів. Головне в нашій роботі - це турбота про клієнта, тому Ваші безпека та комфорт для нас на першому місці!</Trans></p>
                    <p className="about__info text text--19"><Trans>Не вірите? Приходьте та переконайтесь особисто!</Trans></p>
                </section>
            </div>
        </div>
    </div>
    </>
}