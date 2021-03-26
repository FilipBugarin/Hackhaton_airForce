import React, { Component } from 'react'
import {RiSurgicalMaskFill, RiHandSanitizerFill} from 'react-icons/ri'
import {GiMedicalThermometer} from 'react-icons/gi'
import {VscArrowBoth} from 'react-icons/vsc'
import Title from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon: <RiSurgicalMaskFill />,
                title: "Mandatory mask",
                info: "Masks required during flights and at the airport."
            },
            {
                icon: <GiMedicalThermometer />,
                title: "Temperature check",
                info: "Your temperature will be checked before entering the airport."
            },
            {
                icon: <RiHandSanitizerFill />,
                title: "Recomended desinfection",
                info: "Please use disinfectant upon entering the airport."
            },
            {
                icon: <VscArrowBoth />,
                title: "Keep distance",
                info: "Please keep distance of atleast 1,5 meters"
            }
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title='Before you go, you should know' />
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={`item-${item.title}`} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
