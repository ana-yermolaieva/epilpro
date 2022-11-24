import React from "react";
import { LangBox } from "./LangBox.jsx";
import { useTranslation } from "gatsby-plugin-react-i18next";

import fbIcon from "../../common/img/common_fb.svg";
import instaIcon from "../../common/img/common_insta.svg";
import phoneIcon from "../../common/img/common_phone.svg";

export const UserBox = ({ info, lang }) => {
    const { t } = useTranslation();

    return <>
    <div className="header__box-user">
        <div className="header__box-user-links">
            <a href={info.phone_number} target="_blank" className="header__box-user-link" rel="noreferrer">
                <img src={phoneIcon} className="header__box-user-img" alt="телефон" aria-label={t("подзвонити в студію")}></img>
                <span className="header__box-user-phone">{info.phone_number_outer}</span>
            </a>
            <a href={info.inst} target="_blank" className="header__box-user-link" rel="noreferrer">
                <img src={instaIcon} className="header__box-user-img" alt="instagram" aria-label={t("перейти на сторінку instagram")}></img>
            </a>
            <a href={info.fb} target="_blank" className="header__box-user-link" rel="noreferrer">
                <img src={fbIcon} className="header__box-user-img" alt="facebook" aria-label={t("перейти на сторінку facebook")}></img>
            </a>
        </div>
        <LangBox lang={lang}/>
    </div>
    </>
}