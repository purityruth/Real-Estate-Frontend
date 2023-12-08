import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">

            {/* left side */}
            <div className="flexColStart paddingss c-left">
                <div className="flexColStart c-leftcontent">
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy To Contact Us</span>
                    <span className='secondaryText'>We are always ready to help by providing the best services. <br /> We believe a good place to live can make your life better!</span>

                </div>
                
                <div className="flexColStart  contactModes">
                    {/* first row */}

                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span>034 8734 3864</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                    </div>


                    {/* second mode */}
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span>034 8734 3864</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>


                {/* second row */}

                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Video Call</span>
                                <span>034 8734 3864</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Video Call Now</div>
                    </div>
                </div>

                    {/* fourth mode */}
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span>034 8734 3864</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>
                </div>

            </div>


            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./house3.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
