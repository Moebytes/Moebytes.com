import React, {useEffect, useState} from "react"
import {useLayoutSelector} from "../store"
import moepicturesIcon from "../assets/icons/moepictures-icon.png"
import kisaragiIcon from "../assets/icons/kisaragi-icon.png"
import appsIcon from "../assets/svg/apps.svg"
import musicIcon from "../assets/svg/music.svg"
import codeIcon from "../assets/svg/code.svg"
import moepicturesLogo from "../assets/images/moepictures-logo.png"
import kisaragiLogo from "../assets/images/kisaragi-logo.png"
import tunePlayerLogo from "../assets/images/tuneplayer-logo.png"
import picViewerLogo from "../assets/images/picviewer-logo.png"
import motionPlayerLogo from "../assets/images/motionplayer-logo.png"
import waifu2xUpscalerLogo from "../assets/images/waifu2xupscaler-logo.png"
import pixelCompressorLogo from "../assets/images/pixelcompressor-logo.png"
import gainBoosterLogo from "../assets/images/gainbooster-logo.png"
import vocalChopperLogo from "../assets/images/vocalchopper-logo.png"
import "./styles/codecontent.less"

const CodeContent: React.FunctionComponent = () => {
    const {mobile, tablet} = useLayoutSelector()
    const [activeTab, setActiveTab] = useState("moepictures")

    useEffect(() => {
        const savedTab = localStorage.getItem("codeTab")
        if (savedTab) setActiveTab(savedTab)
    }, [])

    useEffect(() => {
        localStorage.setItem("codeTab", activeTab)
    }, [activeTab])

    const generateTabJSX = () => {
        if (activeTab === "moepictures") {
            return (
                <>
                <img className="codecontent-image" src={moepicturesLogo} draggable={false} style={{height: tablet ? "180px" : ""}}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Moepictures is a website for posting cute anime artworks. 
                        <br/><br/>
                        The project is primarily made with Node.js and React, and uses a PostgreSQL database.
                        We also make use of Python scripts for a few things. 
                        <br/><br/>
                        Website: <a href="https://moepictures.net">https://moepictures.net</a><br/>
                        Website Code: <a href="https://github.com/Moebytes/Moepictures">https://github.com/Moebytes/Moepictures</a><br/>
                        Website Design: <a href="https://www.figma.com/design/f7fQmrcMwfKOGYUnHnXZ0B/Moepictures-Website">https://www.figma.com/design/f7fQmrcMwfKOGYUnHnXZ0B/Moepictures-Website</a>
                        <br/><br/>
                        Mobile App: <span className="codecontent-text-alt">In Development</span><br/>
                        Mobile Code: <a href="https://github.com/Moebytes/Moepictures-App">https://github.com/Moebytes/Moepictures-App</a><br/>
                        Mobile Design: <a href="https://www.figma.com/design/iB9H1DBk2qVhloD4nD1RGF/Moepictures-App">https://www.figma.com/design/iB9H1DBk2qVhloD4nD1RGF/Moepictures-App</a>
                    </span>
                </div>
                </>
            )
        } else if (activeTab === "kisaragi") {
            return (
                <>
                <img className="codecontent-image" src={kisaragiLogo} draggable={false} style={{height: mobile ? "250px" : "550px"}}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Kisaragi is a discord bot with a lot of commands. 
                        <br/><br/>
                        The project was made with Node.js and the Discord.js library, and it uses a PostgreSQL database. 
                        The website was created using React.
                        <br/><br/>
                        Website: <a href="https://kisaragi.moe/">https://kisaragi.moe</a><br/>
                        Bot Code: <a href="https://github.com/Moebytes/Kisaragi">https://github.com/Moebytes/Kisaragi</a><br/>
                        Website Code: <a href="https://github.com/Moebytes/Kisaragi.moe">https://github.com/Moebytes/Kisaragi.moe</a>
                    </span>
                </div>
                </>
            )
        } else if (activeTab === "apps-&-utilities") {
            return (
                <>
                <img className="codecontent-image" src={tunePlayerLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Tune Player is an app for playing music and adding pitch effects. 
                        <br/><br/>
                        Code: <a href="https://github.com/Moebytes/Tune-Player">https://github.com/Moebytes/Tune-Player</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={picViewerLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Pic Viewer is an app for viewing images and adding adjustments.
                        <br/><br/>
                        Code: <a href="https://github.com/Moebytes/Pic-Viewer">https://github.com/Moebytes/Pic-Viewer</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={motionPlayerLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Motion Player is an app for playing videos and adding adjustments.
                        <br/><br/>
                        Code: <a href="https://github.com/Moebytes/Motion-Player">https://github.com/Moebytes/Motion-Player</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={waifu2xUpscalerLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Waifu2x Upscaler is an app that upscales images using waifu2x and similar upscalers. The core logic was also 
                        released as a npm package. 
                        <br/><br/>
                        Code: <a href="https://github.com/Moebytes/Waifu2x-Upscaler">https://github.com/Moebytes/Waifu2x-Upscaler</a><br/>
                        Package: <a href="https://github.com/Moebytes/waifu2x">https://github.com/Moebytes/waifu2x</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={pixelCompressorLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Pixel Compressor is an app for compressing and resizing images.
                        <br/><br/>
                        Code: <a href="https://github.com/Moebytes/Pixel-Compressor">https://github.com/Moebytes/Pixel-Compressor</a><br/>
                    </span>
                </div>
                </>
            )
        } else if (activeTab === "audio-plugins") {
            return (
                <>
                <img className="codecontent-image" src={gainBoosterLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Gain Booster is a plugin for simple gain adjustments.
                        <br/><br/>
                        Code: <a href="https://github.com/Moebytes/Gain-Booster">https://github.com/Moebytes/Gain-Booster</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={vocalChopperLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Vocal Chopper is a plugin that separates the vocals from an audio track and generates chopped samples.
                        <br/><br/>
                        Code: <a href="https://github.com/Moebytes/Vocal-Chopper">https://github.com/Moebytes/Vocal-Chopper</a><br/>
                    </span>
                </div>
                </>
            )
        } else if (activeTab === "more") {
            return (
                <>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        To view all of my other smaller projects, check me out on Github. 
                        <br/><br/>
                        Primary: <a href="https://github.com/Moebytes">https://github.com/Moebytes</a><br/>
                        Secondary: <a href="https://github.com/Moestash">https://github.com/Moestash</a><br/>
                    </span>
                </div>
                </>
            )
        }
    }

    return (
        <div className="codecontent">
            <div className="codecontent-icon-container">
                <div className="codecontent-icon-box" onClick={() => setActiveTab("moepictures")}>
                    <img className="codecontent-icon" src={moepicturesIcon} draggable={false}/>
                    <span className="codecontent-icon-text">Moepictures</span>
                </div>
                <div className="codecontent-icon-box" onClick={() => setActiveTab("kisaragi")}>
                    <img className="codecontent-icon" src={kisaragiIcon} draggable={false}/>
                    <span className="codecontent-icon-text">Kisaragi</span>
                </div>
                <div className="codecontent-icon-box" onClick={() => setActiveTab("apps-&-utilities")}>
                    <img className="codecontent-icon" src={appsIcon} draggable={false}/>
                    <span className="codecontent-icon-text">Apps & Utilities</span>
                </div>
                <div className="codecontent-icon-box" onClick={() => setActiveTab("audio-plugins")}>
                    <img className="codecontent-icon" src={musicIcon} draggable={false}/>
                    <span className="codecontent-icon-text">Audio Plugins</span>
                </div>
                <div className="codecontent-icon-box" onClick={() => setActiveTab("more")}>
                    <img className="codecontent-icon" src={codeIcon} draggable={false}/>
                    <span className="codecontent-icon-text">More</span>
                </div>
            </div>
            <div className="codecontent-container">
                {generateTabJSX()}
            </div>
        </div>
    )
}

export default CodeContent