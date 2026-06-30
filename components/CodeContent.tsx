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
import picDisplayLogo from "../assets/images/picdisplay-logo.png"
import framePlayerLogo from "../assets/images/frameplayer-logo.png"
import waifu2xUpscalerLogo from "../assets/images/waifu2xupscaler-logo.png"
import pixelCompressorLogo from "../assets/images/pixelcompressor-logo.png"
import cuteGainLogo from "../assets/images/cutegain-logo.png"
import cutePitchLogo from "../assets/images/cutepitch-logo.png"
import cuteCrushLogo from "../assets/images/cutecrush-logo.png"
import cuteFilterLogo from "../assets/images/cutefilter-logo.png"
import cuteStopLogo from "../assets/images/cutestop-logo.png"
import cuteReverseLogo from "../assets/images/cutereverse-logo.png"
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
                        The project is made with Node.js and React, and uses a PostgreSQL database.
                        We also make use of Python scripts for a few things. The mobile app is made in React Native.
                        <br/><br/>
                        Website: <a href="https://moepictures.net">https://moepictures.net</a><br/>
                        Website Code: <a href="https://github.com/Moebytes/Moepictures">https://github.com/Moebytes/Moepictures</a><br/>
                        Website Design: <a href="https://www.figma.com/design/f7fQmrcMwfKOGYUnHnXZ0B/Moepictures-Website">https://www.figma.com/design/f7fQmrcMwfKOGYUnHnXZ0B/Moepictures-Website</a>
                        <br/><br/>
                        Mobile App: <a href="https://moepictures.net/mobile">https://moepictures.net/mobile</a><br/>
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
                        The project is made with Node.js and the Discord.js library, and it uses a PostgreSQL database. 
                        The website was created using React.
                        <br/><br/>
                        Website: <a href="https://kisaragi.moe/">https://kisaragi.moe</a><br/>
                        Bot Code: <a href="https://github.com/Moebytes/Kisaragi">https://github.com/Moebytes/Kisaragi</a><br/>
                        Website Code: <a href="https://github.com/Moebytes/Kisaragi.moe">https://github.com/Moebytes/Kisaragi.moe</a>
                        Website Design: <a href="https://www.figma.com/design/FOhUu52kqqjUObKzRoNcP9/Kisaragi-Site">https://www.figma.com/design/FOhUu52kqqjUObKzRoNcP9/Kisaragi-Site</a>
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
                        Mac: <a href="https://apps.apple.com/us/app/tune-player/id6760257927">https://apps.apple.com/us/app/tune-player/id6760257927</a><br/>
                        Windows: <a href="https://apps.microsoft.com/detail/9pf51md96mgl">https://apps.microsoft.com/detail/9pf51md96mgl</a><br/>
                        Code: <a href="https://github.com/Moebytes/Tune-Player">https://github.com/Moebytes/Tune-Player</a><br/>
                        Design: <a href="https://www.figma.com/design/CTEs64SQjKg7M1SXzGx0Kh/Tune-Player">https://www.figma.com/design/CTEs64SQjKg7M1SXzGx0Kh/Tune-Player</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={picDisplayLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Pic Display is an app for viewing images and adding adjustments.
                        <br/><br/>
                        Mac: <a href="https://apps.apple.com/us/app/pic-display/id6760277745">https://apps.apple.com/us/app/pic-display/id6760277745</a><br/>
                        Windows: <a href="https://apps.microsoft.com/detail/9p0pv1767t83">https://apps.microsoft.com/detail/9p0pv1767t83</a><br/>
                        Code: <a href="https://github.com/Moebytes/Pic-Display">https://github.com/Moebytes/Pic-Display</a><br/>
                        Design: <a href="https://www.figma.com/design/kqGaBzYxe93zSPxDPz6wRa/Pic-Display">https://www.figma.com/design/kqGaBzYxe93zSPxDPz6wRa/Pic-Display</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={framePlayerLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Frame Player is an app for playing videos and adding adjustments.
                        <br/><br/>
                        Mac: <a href="https://apps.apple.com/us/app/frame-player/id6760277892">https://apps.apple.com/us/app/frame-player/id6760277892</a><br/>
                        Windows: <a href="https://apps.microsoft.com/store/detail/9NF7NHT63XVQ">https://apps.microsoft.com/store/detail/9NF7NHT63XVQ</a><br/>
                        Code: <a href="https://github.com/Moebytes/Frame-Player">https://github.com/Moebytes/Frame-Player</a><br/>
                        Design: <a href="https://www.figma.com/design/PpYPQAYojONPWedMbDRL8t/Frame-Player">https://www.figma.com/design/PpYPQAYojONPWedMbDRL8t/Frame-Player</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={waifu2xUpscalerLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Waifu2x Upscaler is an app that upscales images using waifu2x and similar upscalers.
                        <br/><br/>
                        Mac: <a href="https://apps.apple.com/us/app/waifu2x-upscaler/id6760260194">https://apps.apple.com/us/app/waifu2x-upscaler/id6760260194</a><br/>
                        Windows: <a href="https://apps.microsoft.com/detail/9p877b2q79cc">https://apps.microsoft.com/detail/9p877b2q79cc</a><br/>
                        Code: <a href="https://github.com/Moebytes/Waifu2x-Upscaler">https://github.com/Moebytes/Waifu2x-Upscaler</a><br/>
                        Design: <a href="https://www.figma.com/design/KXFlnNiiqjK18WgVIqxaVu/Waifu2x-Upscaler">https://www.figma.com/design/KXFlnNiiqjK18WgVIqxaVu/Waifu2x-Upscaler</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={pixelCompressorLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Pixel Compressor is an app for compressing and resizing images.
                        <br/><br/>
                        Mac: <a href="https://apps.apple.com/us/app/pixel-compressor/id6760260651">https://apps.apple.com/us/app/pixel-compressor/id6760260651</a><br/>
                        Windows: <a href="https://apps.microsoft.com/detail/9p751mm4cn08">https://apps.microsoft.com/detail/9p751mm4cn08</a><br/>
                        Code: <a href="https://github.com/Moebytes/Pixel-Compressor">https://github.com/Moebytes/Pixel-Compressor</a><br/>
                        Design: <a href="https://www.figma.com/design/lTUtTd5bAHSxvg3uTzNWIA/Pixel-Compressor">https://www.figma.com/design/lTUtTd5bAHSxvg3uTzNWIA/Pixel-Compressor</a><br/>
                    </span>
                </div>
                </>
            )
        } else if (activeTab === "audio-plugins") {
            return (
                <>
                <img className="codecontent-image" src={cuteGainLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Cute Gain is a plugin for simple gain and panning adjustments.
                        <br/><br/>
                        Gumroad: <a href="https://moebytes.gumroad.com/l/cute-gain">https://moebytes.gumroad.com/l/cute-gain</a><br/>
                        Code: <a href="https://github.com/Moebytes/Cute-Gain">https://github.com/Moebytes/Cute-Gain</a><br/>
                        Design: <a href="https://www.figma.com/design/B2ZkSdjkJbhSAynBWiNesK/Cute-Gain">https://www.figma.com/design/B2ZkSdjkJbhSAynBWiNesK/Cute-Gain</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={cutePitchLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Cute Pitch is a plugin for pitch and formant shifting.
                        <br/><br/>
                        Gumroad: <a href="https://moebytes.gumroad.com/l/cute-pitch">https://moebytes.gumroad.com/l/cute-pitch</a><br/>
                        Code: <a href="https://github.com/Moebytes/Cute-Pitch">https://github.com/Moebytes/Cute-Pitch</a><br/>
                        Design: <a href="https://www.figma.com/design/WuLkZAoYlmBKa1sHAjo7Iq/Cute-Pitch">https://www.figma.com/design/WuLkZAoYlmBKa1sHAjo7Iq/Cute-Pitch</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={cuteCrushLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Cute Crush is a plugin for sample rate reduction and bitcrushing.
                        <br/><br/>
                        Gumroad: <a href="https://moebytes.gumroad.com/l/cute-crush">https://moebytes.gumroad.com/l/cute-crush</a><br/>
                        Code: <a href="https://github.com/Moebytes/Cute-Crush">https://github.com/Moebytes/Cute-Crush</a><br/>
                        Design: <a href="https://www.figma.com/design/6nkScNIeA7713z3nRbFWUF/Cute-Crush">https://www.figma.com/design/6nkScNIeA7713z3nRbFWUF/Cute-Crush</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={cuteFilterLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Cute Filter is a plugin for filtering high and low frequencies.
                        <br/><br/>
                        Gumroad: <a href="https://moebytes.gumroad.com/l/cute-filter">https://moebytes.gumroad.com/l/cute-filter</a><br/>
                        Code: <a href="https://github.com/Moebytes/Cute-Filter">https://github.com/Moebytes/Cute-Filter</a><br/>
                        Design: <a href="https://www.figma.com/design/bDssWO2ixIN2Owd5liCKIl/Cute-Filter">https://www.figma.com/design/bDssWO2ixIN2Owd5liCKIl/Cute-Filter</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={cuteStopLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Cute Stop is a plugin for tape stop effects.
                        <br/><br/>
                        Gumroad: <a href="https://moebytes.gumroad.com/l/cute-stop">https://moebytes.gumroad.com/l/cute-stop</a><br/>
                        Code: <a href="https://github.com/Moebytes/Cute-Stop">https://github.com/Moebytes/Cute-Stop</a><br/>
                        Design: <a href="https://www.figma.com/design/jOlYQw7VuwKc2q57O1ALn6/Cute-Stop">https://www.figma.com/design/jOlYQw7VuwKc2q57O1ALn6/Cute-Stop</a><br/>
                    </span>
                </div>
                <img className="codecontent-image" src={cuteReverseLogo} draggable={false}/>
                <div className="codecontent-text-container">
                    <span className="codecontent-text">
                        Cute Reverse is a plugin for reversing effects.
                        <br/><br/>
                        Gumroad: <a href="https://moebytes.gumroad.com/l/cute-reverse">https://moebytes.gumroad.com/l/cute-reverse</a><br/>
                        Code: <a href="https://github.com/Moebytes/Cute-Reverse">https://github.com/Moebytes/Cute-Reverse</a><br/>
                        Design: <a href="https://www.figma.com/design/OcWsDiYm55Hmlzvfr0JizV/Cute-Reverse">https://www.figma.com/design/OcWsDiYm55Hmlzvfr0JizV/Cute-Reverse</a><br/>
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