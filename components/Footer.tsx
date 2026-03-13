import React from "react"
import logo from "../assets/images/minilogo.png"
import "./styles/footer.less"

const Footer: React.FunctionComponent = () => {
    return (
        <div className="footer">
            <img className="footer-img" src={logo} draggable={false}/>
            <div className="footer-text-container">
                <span className="footer-text">© 2026 Moebytes</span>
            </div>
        </div>
    )
}

export default Footer