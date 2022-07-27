import React from "react";
import { AchievementsCard } from "./AchievementsCard.jsx";

export const Achievements = () => {
    return <>
        <section className="achievements">
            <h2 className="visually-hidden">Наши особенности</h2>
            <div className="achievements__container container">
                <div className="achievements__info">
                    <div className="achievements__box">
                        <AchievementsCard />
                    </div>
                </div>
            </div>
        </section>
    </>
}