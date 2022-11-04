import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useState } from "react";

export const LangBox = ({ lang }) => {
    const language = lang.edges[0].node.language;
    const [ langStyle, setLangStyle] = useState({ flag: 'header__box-lng-flag', lngs: 'header__box-lng-lang'});
    const { languages, changeLanguage } = useI18next();
    
    const handleOnLangBox = () => {
        setLangStyle({...langStyle, flag: 'header__box-lng-flag--open', lngs: 'header__box-lng-lang--open'})
    }

    return <>
        <ul className="header__box-lng">
            <li className={langStyle.flag} onClick={handleOnLangBox} key="langboxFlag">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30">
                    <rect width="40" height="15" fill="#005BBB"/>
                    <rect width="40" height="15" y="15" fill="#FFD500"/>
                </svg> */}
                {language}
            </li>
            {
            languages.map(lng => (<>
                <li className="header__box-lng-item" key={lng+languages.indexOf(lng).toString()}>
                    <a className={langStyle.lngs} href="#" onClick={(e) => {
                        e.preventDefault();
                        changeLanguage(lng);
                        setLangStyle({...langStyle, flag: 'header__box-lng-flag', lngs: 'header__box-lng-lang'});                        
                    }}
                        key={lng} >{lng}</a>
                </li>
                </>
            ))
            }
        </ul>
    </>
}