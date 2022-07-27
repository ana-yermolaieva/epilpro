import React, { useState } from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

export const Nav = () => {
    const { t } = useTranslation();
    const [ state, setState ] = useState({ open : false });
    const style = {
        mobNavigation: state.open ? "header__box-nav-list header__box-nav-list--mob" : "header__box-nav-list",
        btnLabel: state.open ? "закрыть меню" : "открыть меню",
    }

    const handleMenu = () => {
        setState({
            ...state, open : state.open ? false : true
        })
    }

    return <>
        <nav className="header__box-nav" open={state} >
            <div className={style.mobNavigation}>
                <Link to="/" className="link header__box-nav-link header__box-nav-link--mob">{t("Главная")}</Link>
                <Link to="/about" className="link header__box-nav-link header__box-nav-link--mob">{t("О нас")}</Link>
                <Link to="/services" className="link header__box-nav-link header__box-nav-link--mob">{t("Услуги")}</Link>
                <Link to="/price" className="link header__box-nav-link header__box-nav-link--mob">{t("Прайс")}</Link>
                <Link to="/blog" className="link header__box-nav-link header__box-nav-link--mob">{t("Блог")}</Link>
                <Link to="/contacts" className="link header__box-nav-link header__box-nav-link--mob">{t("Контакты")}</Link>
            </div>
            <button type="button" className="header__box-nav-btn button" onClick={handleMenu} aria-label={style.btnLabel}>
                {state.open 
                ? <svg width="27" height="24" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="header__box-nav-btn-path" d="M7 7.93945L25 25.9395" strokeWidth="2"/>
                    <path className="header__box-nav-btn-path" d="M25 7.93945L7 25.9395" strokeWidth="2"/>
                </svg>
                : <svg className="header__box-nav-hum" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="27" height="27">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
                </svg>}
            </button>
        </nav>
    </>
}