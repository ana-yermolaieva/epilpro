import React, { useState } from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import certElectroFirst from "../../../common/img/cert-epil1.jpg";
import certElectroSecond from "../../../common/img/cert-epil2.jpg";
import certLaser from "../../../common/img/cert-laser.jpg";

export const Certificates = () => {
    const [ state, setState ] = useState({ isClicked: false});

    const imgList = [certElectroFirst, certLaser, certElectroSecond]

    const handleOnImgClick = (e) => {
        if (e.target.parentElement.classList.contains('certificates__item') && document.documentElement.clientWidth > 767) {
            e.target.parentElement.classList.toggle('certificates__item--opened');
            e.target.classList.toggle('certificates__img--opened');
            setState({...state, isClicked: state.isClicked ? false : true})
        }
    }

    const style = {
        display: state.isClicked ? `block` : `none`
    }

    return <>
    <div className="certificates">
        <section className="certificates__container container">
            <h2 className="certificates__title title title--35"><Trans>ДИПЛОМИ ТА СЕРТИФіКАТИ</Trans></h2>
            <div className="certificates__box" onClick={handleOnImgClick} >
                {imgList.map(img => 
                    <div className="certificates__item" key={`img:${img}`}>
                        <img className="certificates__img" src={img} alt="сертификат"/>
                    </div>
                )}
            </div>
        </section>
    </div>
    <div className="mask" style={style}></div>
    </>
}