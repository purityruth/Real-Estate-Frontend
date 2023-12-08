import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper paddingss paddings">
        <div className="paddings innerWidth flexCenter f-container">

            {/* left side */}

            <div className="flexColStart f-left">
                <img src="./logo.jpg" alt="" width={120}/>

                <span>Our Vision is to make all people <br /> the best place to live for them</span>
            </div>

            {/* right side */}

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span>145 New York, FL 4571, USA</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About Us</span>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
