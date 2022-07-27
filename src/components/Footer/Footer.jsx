import React from "react";
import { FooterSocial } from "./FooterSocial.jsx";
import { UserInfo } from "./UserInfo.jsx";

import Data from "../../common/data/Data.json";

export const Footer = () => {
    return <>
    <footer className="footer">
        <div className="container footer__container">
            <FooterSocial info={Data.USER_CONTACTS}/>
            <UserInfo info={Data.USER_CONTACTS}/>
            <p className="footer__copyright">© Drafted by AY</p>
        </div>
    </footer>
    </>
}