import React from "react"
import LogoBar from "../components/LogoBar"
import NavBar from "../components/NavBar"
import HomeContent from "../components/HomeContent"
import Footer from "../components/Footer"

const HomePage: React.FunctionComponent = () => {
    return (
        <>
        <LogoBar/>
        <NavBar/>
        <HomeContent/>
        <Footer/>
        </>
    )
}

export default HomePage