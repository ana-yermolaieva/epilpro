import React from "react";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

export const UserInfo = ({ info }) => {
    const { t } = useTranslation();

    return <>
    <section className="footer__info">
        <h2 className="visually-hidden"><Trans>Контакти</Trans></h2>
        <div className="footer__info-box">
            <article className="footer__info-link-list">
                <h3 className="visually-hidden"><Trans>навігація</Trans></h3>
                <Link to="/about" className="footer__info-link link text--18" aria-label={t("перейти на сторінку 'про нас'")}>{t("Про нас")}</Link>
                <Link to="/services" className="footer__info-link link text--18" aria-label={t("перейти на сторінку 'послуги'")}>{t("Послуги")}</Link>
                <Link to="/price" className="footer__info-link link text--18" aria-label={t("перейти на сторінку 'прайс'")}>{t("Прайс")}</Link>
                <Link to="/blog" className="footer__info-link link text--18" aria-label={t("перейти на сторінку 'блог'")}>{t("Блог")}</Link>
            </article>  
            <article className="footer__info-contacts-list">
                <h3 className="footer__info-title title--22">{t("Контакти:")}</h3>
                <div className="footer__info-contacts-box">
                    <span className="footer__info-contacts-key text--18">{t("Адреса :")}</span>
                    <a className="footer__info-contacts-info text--18" href={info.google} target="blank" aria-label={t("перейти на google maps")}><Trans>{info.location} {info.location_complex}</Trans></a>
                    <span className="footer__info-contacts-key text--18">{t("Телефон :")}</span>
                    <a className="footer__info-contacts-info text--18" href={info.phone_number} aria-label={t("подзвонити в студію")}>{info.phone_number_outer}</a>
                </div>
            </article>
            <article className="footer__info-time-list">
                <h3 className="footer__info-title title--22">{t("РЕЖИМ РОБОТИ:")}</h3>
                <div className="footer__info-time-box">
                    <span className="footer__info-time text--18">{t("Пн-Сб:")} 10:00-19:00</span>
                </div>
            </article>
        </div>
    </section>
    </>
}