import React from "react"
import LogoBar from "../components/LogoBar"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import ArtContent from "../components/ArtContent"
import ArtPreview from "../components/ArtPreview"

const ArtPage: React.FunctionComponent = () => {
    return (
        <>
        <LogoBar/>
        <NavBar/>
        <ArtPreview/>
        <ArtContent/>
        <Footer/>
        </>
    )
}

export default ArtPage