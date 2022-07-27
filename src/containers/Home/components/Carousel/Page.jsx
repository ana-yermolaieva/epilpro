import React, { useContext } from "react";
import { CarouselContext } from "./CarouselContext.jsx";

export const Page = ({ children }) => {

    const { width } = useContext(CarouselContext);

    return <div className="carousel__item-page" style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
    }}>{children}</div> 
}