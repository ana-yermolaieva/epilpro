import React, { Component } from "react";
import { Trans } from "gatsby-plugin-react-i18next";

export class AccordionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClick = () => {
        console.log(`here ${this.props.title}`);
        this.setState({
            open: this.state.open ? false : true
        })
    }

    render() {
        const style = {
            display: this.state.open ? `block`: `none`,
        };

        return <>
        <div className="services__accordion-item accordion__item">
            <div className="services__accordion accordion__btn-box" onClick={this.handleClick}>
                <button className="services__accordion-title accordion__btn title title--35" type="button" aria-label="відкрити опис послуги"><Trans>{this.props.title}</Trans></button>
            </div>
            <div className="services__accordion-info" open={this.setState.open} style={style}>
                <p className="services__accordion-info-title text text--21"><Trans>{this.props.description}</Trans></p>
                <p className="services__accordion-list-label text text--21"><Trans>показання для проведення процедури:</Trans></p>
                <ul className="services__accordion-list">   
                    {this.props.indications.map((e) => {
                        return <li className="services__accordion-list-item text text--21" key={`${this.props.title}.indications.${e}`}><Trans>{e}</Trans></li>
                    })}
                </ul>
                <p className="services__accordion-list-label text text--21"><Trans>протипоказання для проведення процедури:</Trans></p>
                <ul className="services__accordion-list">
                    {this.props.contraindications.map((e) => {
                        return <li className="services__accordion-list-item text text--21" key={`${this.props.title}.contraindications.${e}`}><Trans>{e}</Trans></li>
                    })}
                </ul>
            </div>
        </div>
        </>

    }
}