import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import homeInfo from "../../../../common/img/home-info.jpg";

export const Complex = () => {
    const { t } = useTranslation();

    return <>
    <div className="complex">
        <div className="complex__container container">
            <div className="complex__box">
                <div className="complex__img-box">
                    <img className="complex__img" src={homeInfo} alt={t("зображення")} />
                </div>
                <article className="complex__info-box">
                    <h2 className="complex__info-title title title--45">{t("Здорова та шовковиста шкіра - це шаг на шляху до впевненості в собі")}</h2>
                    <p className="complex__info text text--19">{t("З комплексом послуг від “Katarina Epil” - Ви забудете про висипання на шкірі та перші зморшки, про втрачену пружність шкіри, вросле волосся та подразнення від гоління!")}</p>
                    <ul className="complex__info-list">
                        <li className="complex__info-item text text--19">{t("Лазерна епіляція")}</li>
                        <li className="complex__info-item text text--19">{t("Електроепіляція")}</li>
                        <li className="complex__info-item text text--19">{t("RF-ліфтинг")}</li>
                        <li className="complex__info-item text text--19">{t("Карбоновий пілінг")}</li>
                        <li className="complex__info-item text text--19">{t("Elos-омолодження")}</li>
                    </ul>
                </article>
            </div>
        </div>
    </div>
    </>
}