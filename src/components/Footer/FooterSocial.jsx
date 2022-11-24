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
        <Link to="/" className="footer__social-logo">
            <img src={logo} className="footer__social-logo-img" alt="logo" aria-label={t("перейти на головну сторінку")}/>
        </Link>
        <div className="footer__social-links-box">
            <div className="footer__social-box">
                <a href={info.tictok} target="_blank" className="footer__social-link" rel="noreferrer">
                    <img src={tictokIcon} className="footer__social-link-img" alt="tictok" aria-label={t("перейти на сторінку tictok")}/>
                </a>
            </div>
            <div className="footer__social-box">
                <a href={info.google} target="_blank" className="footer__social-link" rel="noreferrer">
                    <img src={googleIcon} className="footer__social-link-img" alt="google" aria-label={t("перейти на google maps")}/>
                </a>
            </div>
            <div className="footer__social-box">
                <a href={info.fb} target="_blank" className="footer__social-link" rel="noreferrer">
                    <img src={fbIcon} className="footer__social-link-img" alt="facebook" aria-label={t("перейти на сторінку facebook")}/>
                </a>
            </div>
            <div className="footer__social-box">
                <a href={info.inst} target="_blank" className="footer__social-link" rel="noreferrer">
                    <img src={instaIcon} className="footer__social-link-img" alt="instagram" aria-label={t("перейти на сторінку instagram")}/>
                </a>
            </div>
        </div>
    </section>
    </>
}