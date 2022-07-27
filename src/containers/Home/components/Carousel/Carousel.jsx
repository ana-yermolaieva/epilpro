import React, { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CarouselContext } from "./CarouselContext.jsx";
import { Page } from "./Page.jsx";

export const Carousel = ({ children }) => {

    const[width, setWidth] = useState(1200);
    const[offset, setOffset] = useState(0);
    const windowElRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            const _width = windowElRef.current.offsetWidth;
            setWidth(_width);
            setOffset(0);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            let newOffset = currentOffset + Number(width);
            if (newOffset > 0) newOffset = -(width * (children.length - 1));
            return Math.min(newOffset, 0);
        })
    };

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            let newOffset = currentOffset - Number(width);
            const maxOffset = -(+width * (children.length - 1));
            if(newOffset < maxOffset) newOffset = 0;
            return Math.max(newOffset, maxOffset);
        })
    };

    return (
        <CarouselContext.Provider value={{ width: width }}>
            <div className="carousel">
                <div className="carousel__container container">
                    <div className="carousel__window" ref={windowElRef}>
                        <div className="carousel__all-pages"
                        style={{
                            transform: `translateX(${offset}px)`,
                        }}>{children}</div>
                    </div>
                    <div className="carousel__btn-box">
                        <div className="carousel__btn-item">
                            <FaChevronLeft className="carousel__arrow" onClick={handleLeftArrowClick} style={{
                                fill: `#094709`,
                                height: `2em`,
                            }} />
                        </div>
                        <div  className="carousel__btn-item">
                            <FaChevronRight className="carousel__arrow" onClick={handleRightArrowClick} style={{
                                fill: `#094709`,
                                height: `2em`,
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </CarouselContext.Provider>
    )
}

Carousel.Page = Page;