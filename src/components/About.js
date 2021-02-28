import React from 'react'
import portrait from '../img/portrait.jpeg'

const About = () => {
    return(
        <div className='about'>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>We work every day with professionals to make the things you desire.</p>
                <button>Contact me</button>
            </div>
            <div className="image">
                <img src={portrait} alt="potrait of me"/>
            </div>
        </div>
    )
}

export default About