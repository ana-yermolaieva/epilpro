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
                    <h2 className="about__title title title--35"><Trans>студия Katarina Epil</Trans></h2>
                    <p className="about__info text text--19"><Trans>“Katarina Epil” - это современная студия, расположенная на поселке Котовского, где оказываются услуги аппаратной косметологии, лазерной и электроэпиляции.</Trans></p> 
                    <p className="about__info text text--19"><Trans>Здесь работают только профессионалы, новейшее оборудование и инновационные технологии обеспечивают безболезненность процедур. Индивидуальный подход к каждому клиенту, что позволяет добиться желаемых результатов за короткий срок.</Trans></p>  
                    <p className="about__info text text--19"><Trans>Бесплатная консультация, гибкая система скидок для новых и для постоянных клиентов. Главное в нашей работе - это забота о клиенте, поэтому Ваши безопастность и комфорт у нас на первом месте!</Trans></p>
                    <p className="about__info text text--19"><Trans>Не верите? Приходите и убедитесь сами!</Trans></p>
                </section>
            </div>
        </div>
    </div>
    </>
}