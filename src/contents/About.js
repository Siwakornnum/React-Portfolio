import React, { Component } from 'react'
import profilepic from '../img/profile.png'

class About extends Component {
    render(){
        return(
            <div className='condiv about'>
                <h1 className='subtopic'>About Me</h1>
                {/* <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/56935157_1438215669654554_7411969605536579584_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l6hyqwacQRcAX8Oyylh&tn=w49AlM9Dui0YaolZ&_nc_ht=scontent.fbkk5-5.fna&oh=00_AT-I_oXeCVp-R-8raaJPUCve58v3WDNVH9TbkXoRieFfEw&oe=6375F1D0" alt="profile" className="profilepic" /> */}
                <img src={profilepic} alt="profile" className="profilepic"/>
                <h3>Hi, I'm Siwa </h3>
                <p>I'm a web developer. I started developing different languages from internships and web development. to enhance the experience to be able to work in the future in response to working in the company Can come and see the work that I can do.</p>
            </div>
        )
    }
}

export default About;