import React, { Component} from "react";
import Social from "../components/Social"
// import Profilepic from "../img/profile.png"

import ReactTypingEffect from "react-typing-effect";

class Home extends Component{
    render() {
        return(
            <div className="condiv home">
                <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/56935157_1438215669654554_7411969605536579584_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l6hyqwacQRcAX8Oyylh&tn=w49AlM9Dui0YaolZ&_nc_ht=scontent.fbkk5-5.fna&oh=00_AT-I_oXeCVp-R-8raaJPUCve58v3WDNVH9TbkXoRieFfEw&oe=6375F1D0" alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Siwa KORNNUM', 'I am a Web Developer']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        )
    }
}

export default Home;