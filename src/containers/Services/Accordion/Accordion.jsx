import React, { Component } from "react";
import { AccordionItem } from "./AccordionItem.jsx";
import Data from "../../../common/data/Data.json";

export class Accordion extends Component {
    render (){
        return <>
            <div className="accordion container">
                {Data.SERVICES.map(e => {
                    return <AccordionItem key={`serv.${e.title}`}
                    title={e.title}
                    description={e.description}
                    indications={e.pos}
                    contraindications={e.neg}
                />})
                }
            </div>
        </>
    }
}