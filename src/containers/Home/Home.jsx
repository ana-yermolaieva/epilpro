import React from "react";
import { Carousel } from "./components/Carousel/Carousel.jsx";
import { MainSlide } from "./components/Carousel/Sliders/MainSlide.jsx";
import { SaleSlide } from "./components/Carousel/Sliders/SaleSlide.jsx";
import { Achievements } from "./components/Achievements/Achievements.jsx";
import { Complex } from "./components/Complex/Complex.jsx";
import { PriceIrregularLayout } from "../../components/Price/IrregularLayout/PriceIrregularLayout.jsx";
import { Reviews } from "../../components/Reviews/Reviews.jsx";
import { Blog } from "../../components/Blog/Blog.jsx";

export const Home = ({ data, path }) => {
    return <>
    <Carousel>
        <Carousel.Page>
            <div className="carousel__item carousel__item--1">
                <MainSlide />
            </div>
        </Carousel.Page>
        <Carousel.Page>
            <div className="carousel__item carousel__item--2">
                <SaleSlide />
            </div>
        </Carousel.Page>
    </Carousel>
    <Achievements data={data.locales}/>
    <Complex />
    <PriceIrregularLayout />
    <Reviews />
    <Blog data={data.wp} path={path} list="home"/>
    </>
}