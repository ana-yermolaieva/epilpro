import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import Data from "../../common/data/Data.json";

export const Adress = () => {
    return <>
    <div className="adress">
        <div className="adress__container container">
            <div className="adress__box">
                <h2 className="adress__title title title--31"><Trans>Адреса:</Trans></h2>
                <p className="adress__info title title--31"><Trans>{Data.USER_CONTACTS.location}</Trans></p>
                <p className="adress__info title title--31"><Trans>{Data.USER_CONTACTS.location_complex}</Trans></p>
            </div>
            <div className="adress__box">
                <h2 className="adress__title title title--31"><Trans>Телефон:</Trans></h2>
                <a href={Data.USER_CONTACTS.phone_number} className="adress__info title title--31">{Data.USER_CONTACTS.phone_number_outer}</a>
            </div> 
            <div className="adress__box">
                <h2 className="adress__title title title--31">e-mail:</h2>
                <a href={Data.USER_CONTACTS.email_outer} className="adress__info title title--31">{Data.USER_CONTACTS.email}</a>
            </div>
        </div>
    </div>
    </>
}