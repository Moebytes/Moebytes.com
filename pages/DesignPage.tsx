import React from "react"
import LogoBar from "../components/LogoBar"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import DesignContent from "../components/DesignContent"

const DesignPage: React.FunctionComponent = () => {
    return (
        <>
        <LogoBar/>
        <NavBar/>
        <DesignContent/>
        <Footer/>
        </>
    )
}

export default DesignPage