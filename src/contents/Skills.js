import React, { Component } from "react";

class Skills extends Component{
    constructor(props){
        super(props);

        this.state = {
          myprogramminglanguages: [
            "C",
            "Java",
            "Python",
            "PHP",
            "JavaScript",
            "SQL",
            "XML",
          ],
          myframework: ["ReactJS", "VueJS", "Flutter"],
          mydatabase: ["MySQL"],
          myoptional: [
            "Github",
            "REST APIs ",
            "HTML/CSS",
            "NodeJS",
            "Postman",
            "Docker",
          ],
        };
    }
    
    render(){
        return(
            <div className="condiv skills">
                <h1 className="subtopic">MY TECHNICAL SKILLS <i class="fa-solid fa-computer"></i></h1>
                <h2 className="subtopic">Programming Languages</h2>
                <ul>
                    {this.state.myprogramminglanguages.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
                <h2 className="subtopic">Framework</h2>
                <ul>
                    {this.state.myframework.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
                <h2 className="subtopic">Database</h2>
                <ul>
                    {this.state.mydatabase.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
                <h2 className="subtopic">Optional</h2>
                <ul>
                    {this.state.myoptional.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills;