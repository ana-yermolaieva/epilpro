import React from "react";
import { LangBox } from "./LangBox.jsx";
import fbIcon from "../../common/img/common_fb.svg";
import instaIcon from "../../common/img/common_insta.svg";
import phoneIcon from "../../common/img/common_phone.svg";

export const UserBox = ({ info }) => {
    return <>
    <div className="header__box-user">
        <div className="header__box-user-links">
            <a href={info.phone_number} target="_blank" className="header__box-user-link" rel="noreferrer">
                <img src={phoneIcon} className="header__box-user-img" alt="телефон" aria-label="позвонить в студию"></img>
                <span className="header__box-user-phone">{info.phone_number_outer}</span>
            </a>
            <a href={info.inst} target="_blank" className="header__box-user-link" rel="noreferrer">
                <img src={instaIcon} className="header__box-user-img" alt="instagram" aria-label="перейти на страницу в instagram"></img>
            </a>
            <a href={info.fb} target="_blank" className="header__box-user-link" rel="noreferrer">
                <img src={fbIcon} className="header__box-user-img" alt="facebook" aria-label="перейти на страницу в facebook"></img>
            </a>
        </div>
        <LangBox />
    </div>
    </>
}