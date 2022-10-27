import React, { Component } from "react";

import Social from "../components/Social";

class Contact extends Component{
    render(){
        return(
            <div className="condiv ">
                <h1 className="subtopic">Contact Me</h1>
                <h3 className="contact-con">Address : 111 M.4 <br/ > Sub district : NaiKhlongBangPlaKot  <br/ >  District : PhraSamutChedi  <br/ >  Province : Samutphakarn</h3>
                <h3 className="contact-con">Email : Siwakornnum_2013@hotmail.com</h3>
                <h3 className="contact-con">Instagram : pporxw</h3>
                <Social />
            </div>
        )
    }
}

export default Contact;