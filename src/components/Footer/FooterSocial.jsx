import React from "react";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";

import logo from "../../common/img/logo_footer.svg";
import tictokIcon from "../../common/img/common_tictok.svg";
import googleIcon from "../../common/img/common_google.svg";
import fbIcon from "../../common/img/common_fb-footer.svg";
import instaIcon from "../../common/img/common_insta-footer.svg";

export const FooterSocial = ({ info }) => {
    const { t } = useTranslation();

    return <>
    <section className="footer__social">
        <h2 className="visually-hidden">Social links</h2>
        <Link to="/" className="footer__social-logo" aria-label={t("перейти на головну сторінку")}>
            <img src={logo} className="footer__social-logo-img" alt="logo"/>
        </Link>
        <div className="footer__social-links-box">
            <div className="footer__social-box">
                <a href={info.tictok} target="_blank" className="footer__social-link" rel="noreferrer" aria-label={t("перейти на сторінку tictok")}>
                    <img src={tictokIcon} className="footer__social-link-img" alt="tictok"/>
                </a>
            </div>
            <div className="footer__social-box">
                <a href={info.google} target="_blank" className="footer__social-link" rel="noreferrer" aria-label={t("перейти на google maps")}>
                    <img src={googleIcon} className="footer__social-link-img" alt="google"/>
                </a>
            </div>
            <div className="footer__social-box">
                <a href={info.fb} target="_blank" className="footer__social-link" rel="noreferrer" aria-label={t("перейти на сторінку facebook")}>
                    <img src={fbIcon} className="footer__social-link-img" alt="facebook"/>
                </a>
            </div>
            <div className="footer__social-box">
                <a href={info.inst} target="_blank" className="footer__social-link" rel="noreferrer" aria-label={t("перейти на сторінку instagram")}>
                    <img src={instaIcon} className="footer__social-link-img" alt="instagram"/>
                </a>
            </div>
        </div>
    </section>
    </>
}