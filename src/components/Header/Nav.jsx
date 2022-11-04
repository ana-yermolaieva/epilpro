import React, { useState } from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

export const Nav = () => {
    const { t } = useTranslation();
    const [ state, setState ] = useState({ open : false });
    const style = {
        mobNavigation: state.open ? "header__box-nav-list header__box-nav-list--mob" : "header__box-nav-list",
        btnLabel: state.open ? t("закрити меню") : t("відкрити меню"),
    }

    const handleMenu = () => {
        setState({
            ...state, open : state.open ? false : true
        })
    }

    return <>
        <nav className="header__box-nav" open={state} >
            <div className={style.mobNavigation}>
                <Link to="/" className="link header__box-nav-link header__box-nav-link--mob">{t("Головна")}</Link>
                <Link to="/about" className="link header__box-nav-link header__box-nav-link--mob">{t("Про нас")}</Link>
                <Link to="/services" className="link header__box-nav-link header__box-nav-link--mob">{t("Послуги")}</Link>
                <Link to="/price" className="link header__box-nav-link header__box-nav-link--mob">{t("Прайс")}</Link>
                <Link to="/blog" className="link header__box-nav-link header__box-nav-link--mob">{t("Блог")}</Link>
                <Link to="/contacts" className="link header__box-nav-link header__box-nav-link--mob">{t("Контакти")}</Link>
            </div>
            <button type="button" className="header__box-nav-btn button" onClick={handleMenu} aria-label={style.btnLabel}>
                {state.open 
                ? <svg width="27px" height="27px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="header__box-nav-btn-path" d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z" fill="white"/>
                </svg>
                : <svg className="header__box-nav-hum" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="27" height="27">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
                </svg>}
            </button>
        </nav>
    </>
}