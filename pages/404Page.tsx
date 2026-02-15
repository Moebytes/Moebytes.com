import React from "react"
import LogoBar from "../components/LogoBar"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import $404Image from "../components/404Image"

const $404Page: React.FunctionComponent = () => {
    return (
        <>
        <LogoBar/>
        <NavBar/>
        <$404Image/>
        <Footer/>
        </>
    )
}

export default $404Page