import React from "react"
import star from "../assets/svg/star.svg"
import "./styles/homecontent.less"

const ContactContent: React.FunctionComponent = () => {
    return (
        <div className="homecontent">
            <div className="homecontent-header-container">
                <img className="homecontent-header-icon" src={star} draggable={false}/>
                <span className="homecontent-header-text">Contact Me</span>
            </div>
            <div className="homecontent-text-container">
                <span className="homecontent-text">
                    If you need to contact me you can reach me by email:<br/>
                    <span className="homecontent-text-alt">moebytez@gmail.com</span>
                </span>
            </div>
        </div>
    )
}

export default ContactContent
