import React from "react"
import LogoBar from "../components/LogoBar"
import NavBar from "../components/NavBar"
import ContactContent from "../components/ContactContent"
import Footer from "../components/Footer"

const ContactPage: React.FunctionComponent = () => {
    return (
        <>
        <LogoBar/>
        <NavBar/>
        <ContactContent/>
        <Footer/>
        </>
    )
}

export default ContactPage