import React from "react"
import LogoBar from "../components/LogoBar"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import SoftwareContent from "../components/SoftwareContent"

const SoftwarePage: React.FunctionComponent = () => {
    return (
        <>
        <LogoBar/>
        <NavBar/>
        <SoftwareContent/>
        <Footer/>
        </>
    )
}

export default SoftwarePage