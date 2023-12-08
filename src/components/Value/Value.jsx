import React, { useState } from 'react'
import './Value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemState,
    AccordionItemPanel
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* Left Side */}

            <div className='flexCenter v-left'>
                <div className="flexCenter image-container">
                    <img src="./house2.jpg" alt="valueimg" />
                </div>
            </div>

            {/* Right Side */}

            <div className="flexColStart paddings flexCenter v-right">
                <div className="flexColStart flexCenter paddingss v-righttext">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>
                        We always ready to help by providing the best services for you.
                        <br />
                        We believe a good place to live can make your life better
                    </span>
                </div>
                

                <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
                    {
                        data.map((item, i)=> {
                            const [className, setClassName] = useState(null)
                            return (
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='accordionButton flexCenter'>
                                            <AccordionItemState>
                                                {({ expanded })=> expanded? setClassName('expanded') : setClassName("collapsed")}
                                            </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>

    </section>
  )
}

export default Value
