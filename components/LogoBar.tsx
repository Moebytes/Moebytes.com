import React from "react"
import logo from "../assets/images/logo.png"
import "./styles/logobar.less"

const LogoBar: React.FunctionComponent = () => {
    return (
        <div className="logobar">
            <img className="logo" src={logo} draggable={false}/>
        </div>
    )
}

export default LogoBar