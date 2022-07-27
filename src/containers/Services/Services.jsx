import React from "react";
import { Accordion } from "./Accordion/Accordion.jsx";
import { InfoTitle } from "../../components/InfoTitle.jsx";
import { Epilation } from "./Epilation.jsx";
import { Cosmetology } from "./Cosmetology.jsx";

export const Services = () => {
    return <>
    <InfoTitle />
    <section className="services">
        <h2 className="services__title visually-hidden">Услуги</h2>
        <div className="services__container container">
            <Epilation />
            <Cosmetology />
        </div>
    </section>
    <Accordion />
    </>
}