import React from "react";
import { AboutInfo } from "./AboutInfo.jsx";
import { Certificates } from "./Certificates/Certificates.jsx";

export const AboutPage = ({data}) => {
    return <>
    <AboutInfo data={data}/>
    <Certificates />
    </>
}
 