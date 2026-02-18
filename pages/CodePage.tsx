import React from "react"
import LogoBar from "../components/LogoBar"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import CodeContent from "../components/CodeContent"

const CodePage: React.FunctionComponent = () => {
    return (
        <>
        <LogoBar/>
        <NavBar/>
        <CodeContent/>
        <Footer/>
        </>
    )
}

export default CodePage