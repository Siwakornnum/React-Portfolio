import React, { Component } from "react";
import Widecard from '../components/Widecard'

class Education extends Component{
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard  title="MilerDev Information Technology" where="Miler University" from="2018" to="2022"/>
                <Widecard  title="MilerDev" where="Miler High School" from="2012" to="2018"/>
                <h1 className="subtopic">My Internship Experience</h1>
                <Widecard  title="Full Stack DEVELOPER" where="HYDRA DATA AND CONSULTING CO., LTD" from="15 Nov 2021" to="1 Apr 2022"/>
            </div>
        )
    }
}

export default Education;