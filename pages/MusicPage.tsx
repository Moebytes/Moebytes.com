import React from "react"
import LogoBar from "../components/LogoBar"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import MusicContent from "../components/MusicContent"

const MusicPage: React.FunctionComponent = () => {
    return (
        <>
        <LogoBar/>
        <NavBar/>
        <MusicContent/>
        <Footer/>
        </>
    )
}

export default MusicPage