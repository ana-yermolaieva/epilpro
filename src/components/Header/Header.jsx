import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { Nav } from "./Nav.jsx";
import { UserBox } from "./UserBox.jsx";

import Data from "../../common/data/Data.json"
import logoHeader from "../../common/img/logo_header.svg";

export const Header = ({ data }) => {
  
    return <>
    <header className="header">
        <div className="container header__container">
            <Link to="/" className="link header__logo">
                <img src={logoHeader} className="header__logo-img" alt="logo" aria-label="перейти на головну сторінку" />
            </Link>
            <div className="header__box">
                <Nav />
                <UserBox info={Data.USER_CONTACTS} lang={data}/>
            </div>
        </div>
    </header>
    </>
}