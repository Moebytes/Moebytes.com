import React from "react"
import {useNavigate} from "react-router-dom"
import {useThemeSelector, useThemeActions} from "../store"
import light from "../assets/svg/light.svg"
import dark from "../assets/svg/dark.svg"
import "./styles/navbar.less"

const NavBar: React.FunctionComponent = () => {
    const {theme} = useThemeSelector()
    const {setTheme} = useThemeActions()
    const navigate = useNavigate()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div className="navbar">
            <div className="navbar-container">
                <button className="navbar-button" onClick={() => navigate("/")}>Home</button>
                <button className="navbar-button" onClick={() => navigate("/code")}>Code</button>
                <button className="navbar-button" onClick={() => navigate("/design")}>Design</button>
                <button className="navbar-button" onClick={() => navigate("/art")}>Art</button>
                <button className="navbar-button" onClick={() => navigate("/music")}>Music</button>
                <button className="navbar-button" onClick={() => navigate("/contact")}>Contact</button>
                <img className="navbar-icon" src={theme === "dark" ? light : dark} onClick={toggleTheme} draggable={false}/>
            </div>
        </div>
    )
}

export default NavBar