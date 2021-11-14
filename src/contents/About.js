import React, { Component } from 'react'
import profilepic from '../img/me.png'
import ReactTypingEffect from 'react-typing-effect'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src={profilepic} alt="profile" className="profilepic" />
                {/* <img src={profilepic} /> */}
                <h2>Hi, I'm NiLout</h2>
                <ReactTypingEffect text={['Thank You for visiting my website', 'About me is that I am hilarious person, Easy to get along with others and I am someone who always listens when others speak.I am currently live in TaoHai village Sangthong district and vientiane capital. Now I study at National University of Laos Department of Computer Engineering and Information Technology']} speed={100} eraseDelay={200} className="typingeffect-font" />
            </div>
        );
    }
}

export default About;
