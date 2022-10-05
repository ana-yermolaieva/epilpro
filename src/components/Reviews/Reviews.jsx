import React from "react";
import Slider from "react-slick";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { ReviewItem } from "./ReviewItem.jsx";
import Data from "../../common/data/Data.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Reviews = () => {
    const { t } = useTranslation();

    const settings = {
        arrows: false,
        dots: true,
        pauseOnHover: true,
        autoplay: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                adaptiveHeight: false,
              }
            }
        ]
    };

    return <> 
    <div className="reviews">
        <section className="reviews__container container">
            <h2 className="reviews__title title title--45">{t("Що про нас кажуть...")}</h2>
            <Slider {...settings} className="reviews__box">
                {Data.REVIEWS.map(user => {
                    return <ReviewItem key={`${user.clientEng}.review`} userInfo={user} />
                })}
            </Slider>
        </section>
    </div>
    </>
}