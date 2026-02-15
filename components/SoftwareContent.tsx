import React, {useEffect, useState} from "react"
import {useLayoutSelector} from "../store"
import moepicturesIcon from "../assets/icons/moepictures-icon.png"
import kisaragiIcon from "../assets/icons/kisaragi-icon.png"
import appsIcon from "../assets/svg/apps.svg"
import musicIcon from "../assets/svg/music.svg"
import codeIcon from "../assets/svg/code.svg"
import moepicturesLogo from "../assets/images/moepictures-logo.png"
import kisaragiLogo from "../assets/images/kisaragi-logo.png"
import musicPlayerLogo from "../assets/images/musicplayer-logo.png"
import photoViewerLogo from "../assets/images/photoviewer-logo.png"
import videoPlayerLogo from "../assets/images/videoplayer-logo.png"
import waifu2xGUILogo from "../assets/images/waifu2xgui-logo.png"
import imageCompressorLogo from "../assets/images/imagecompressor-logo.png"
import gainBoosterLogo from "../assets/images/gainbooster-logo.png"
import vocalChopperLogo from "../assets/images/vocalchopper-logo.png"
import "./styles/softwarecontent.less"

const SoftwareContent: React.FunctionComponent = () => {
    const {mobile} = useLayoutSelector()
    const [activeTab, setActiveTab] = useState("moepictures")

    useEffect(() => {
        const savedTab = localStorage.getItem("softwareTab")
        if (savedTab) setActiveTab(savedTab)
    }, [])

    useEffect(() => {
        localStorage.setItem("softwareTab", activeTab)
    }, [activeTab])

    const generateTabJSX = () => {
        if (activeTab === "moepictures") {
            return (
                <>
                <img className="softwarecontent-image" src={moepicturesLogo} draggable={false}/>
                <div className="softwarecontent-text-container">
                    <span className="softwarecontent-text">
                        Moepictures is a website for posting cute anime artworks. 
                        <br/><br/>
                        The project is primarily made with Node.js and React, and uses a PostgreSQL database.
                        We also make use of Python scripts for a few things. 
                        <br/><br/>
                        Website: <a href="https://moepictures.net">https://moepictures.net</a><br/>
                        Website Code: <a href="https://github.com/Moebytes/Moepictures">https://github.com/Moebytes/Moepictures</a><br/>
                        Website Design: <a href="https://www.figma.com/design/f7fQmrcMwfKOGYUnHnXZ0B/Moepictures-Website">https://www.figma.com/design/f7fQmrcMwfKOGYUnHnXZ0B/Moepictures-Website</a>
                        <br/><br/>
                        Mobile App: <span className="softwarecontent-text-alt">In Development</span><br/>
                        Mobile Code: <a href="https://github.com/Moebytes/Moepictures-App">https://github.com/Moebytes/Moepictures-App</a><br/>
                        Mobile Design: <a href="https://www.figma.com/design/iB9H1DBk2qVhloD4nD1RGF/Moepictures-App">https://www.figma.com/design/iB9H1DBk2qVhloD4nD1RGF/Moepictures-App</a>
                    </span>
                </div>
                </>
            )
        } else if (activeTab === "kisaragi") {
            return (
                <>
                <img className="softwarecontent-image" src={kisaragiLogo} draggable={false} style={{height: mobile ? "270px" : "550px"}}/>
                <div className="softwarecontent-text-container">
                    <span className="softwarecontent-text">
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
                <img className="softwarecontent-image" src={musicPlayerLogo} draggable={false}/>
                <div className="softwarecontent-text-container">
                    <span className="softwarecontent-text">
                        Music Player is an app for playing music and adding pitch effects. 
                        <br/><br/>
                        Code: <a href="https://github.com/Moebytes/Music-Player">https://github.com/Moebytes/Music-Player</a><br/>
                    </span>
                </div>
                <img className="softwarecontent-image" src={photoViewerLogo} draggable={false}/>
                <div className="softwarecontent-text-container">
                    <span className="softwarecontent-text">
                        Photo Viewer is an app for viewing images and adding adjustments.
                        <br/><br/>
                        Code: <a href="https://github.com/Moebytes/Photo-Viewer">https://github.com/Moebytes/Photo-Viewer</a><br/>
                    </span>
                </div>
                <img className="softwarecontent-image" src={videoPlayerLogo} draggable={false}/>
                <div className="softwarecontent-text-container">
                    <span className="softwarecontent-text">
                        Video Player is an app for playing videos and adding adjustments.
                        <br/><br/>
                        Code: <a href="https://github.com/Moebytes/Video-Player">https://github.com/Moebytes/Video-Player</a><br/>
                    </span>
                </div>
                <img className="softwarecontent-image" src={waifu2xGUILogo} draggable={false}/>
                <div className="softwarecontent-text-container">
                    <span className="softwarecontent-text">
                        Waifu2x GUI is an app that upscales images using waifu2x and similar upscalers. The core logic was also 
                        released as a npm package. 
                        <br/><br/>
                        Code: <a href="https://github.com/Moebytes/Waifu2x-GUI">https://github.com/Moebytes/Waifu2x-GUI</a><br/>
                        Package: <a href="https://github.com/Moebytes/waifu2x">https://github.com/Moebytes/waifu2x</a><br/>
                    </span>
                </div>
                <img className="softwarecontent-image" src={imageCompressorLogo} draggable={false}/>
                <div className="softwarecontent-text-container">
                    <span className="softwarecontent-text">
                        Image Compressor is an app for compressing images. It also has some miscellaneous features in the header bar. 
                        <br/><br/>
                        Code: <a href="https://github.com/Moebytes/Image-Compressor">https://github.com/Moebytes/Image-Compressor</a><br/>
                    </span>
                </div>
                </>
            )
        } else if (activeTab === "audio-plugins") {
            return (
                <>
                <img className="softwarecontent-image" src={gainBoosterLogo} draggable={false}/>
                <div className="softwarecontent-text-container">
                    <span className="softwarecontent-text">
                        Gain Booster is a plugin for simple gain adjustments.
                        <br/><br/>
                        Code: <a href="https://github.com/Moebytes/Gain-Booster">https://github.com/Moebytes/Gain-Booster</a><br/>
                    </span>
                </div>
                <img className="softwarecontent-image" src={vocalChopperLogo} draggable={false}/>
                <div className="softwarecontent-text-container">
                    <span className="softwarecontent-text">
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
                <div className="softwarecontent-text-container">
                    <span className="softwarecontent-text">
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
        <div className="softwarecontent">
            <div className="softwarecontent-icon-container">
                <div className="softwarecontent-icon-box" onClick={() => setActiveTab("moepictures")}>
                    <img className="softwarecontent-icon" src={moepicturesIcon} draggable={false}/>
                    <span className="softwarecontent-icon-text">Moepictures</span>
                </div>
                <div className="softwarecontent-icon-box" onClick={() => setActiveTab("kisaragi")}>
                    <img className="softwarecontent-icon" src={kisaragiIcon} draggable={false}/>
                    <span className="softwarecontent-icon-text">Kisaragi</span>
                </div>
                <div className="softwarecontent-icon-box" onClick={() => setActiveTab("apps-&-utilities")}>
                    <img className="softwarecontent-icon" src={appsIcon} draggable={false}/>
                    <span className="softwarecontent-icon-text">Apps & Utilities</span>
                </div>
                <div className="softwarecontent-icon-box" onClick={() => setActiveTab("audio-plugins")}>
                    <img className="softwarecontent-icon" src={musicIcon} draggable={false}/>
                    <span className="softwarecontent-icon-text">Audio Plugins</span>
                </div>
                <div className="softwarecontent-icon-box" onClick={() => setActiveTab("more")}>
                    <img className="softwarecontent-icon" src={codeIcon} draggable={false}/>
                    <span className="softwarecontent-icon-text">More</span>
                </div>
            </div>
            <div className="softwarecontent-container">
                {generateTabJSX()}
            </div>
        </div>
    )
}

export default SoftwareContent