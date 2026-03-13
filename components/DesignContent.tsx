import React from "react"
import {useLayoutSelector} from "../store"
import moepictures from "../assets/design/moepictures.png"
import moepicturesApp from "../assets/design/moepictures-app.png"
import kisaragi from "../assets/design/kisaragi.png"
import tunePlayer from "../assets/design/tune-player.png"
import picDisplay from "../assets/design/pic-display.png"
import framePlayer from "../assets/design/frame-player.png"
import "./styles/designcontent.less"

const DesignContent: React.FunctionComponent = () => {
    const {mobile} = useLayoutSelector()

    const openMoepictures = () => {
        window.open("https://www.figma.com/design/f7fQmrcMwfKOGYUnHnXZ0B/Moepictures-Website", "_blank")
    }

    const openMoepicturesApp = () => {
        window.open("https://www.figma.com/design/iB9H1DBk2qVhloD4nD1RGF/Moepictures-App", "_blank")
    }

    const openTunePlayer = () => {
        window.open("https://www.figma.com/design/CTEs64SQjKg7M1SXzGx0Kh/Tune-Player", "_blank")
    }

    const openPicDisplay = () => {
        window.open("https://www.figma.com/design/kqGaBzYxe93zSPxDPz6wRa/Pic-Display", "_blank")
    }

    const openFramePlayer = () => {
        window.open("https://www.figma.com/design/PpYPQAYojONPWedMbDRL8t/Frame-Player", "_blank")
    }

    const openKisaragi = () => {
        window.open("https://www.figma.com/design/FOhUu52kqqjUObKzRoNcP9/Kisaragi-Site", "_blank")
    }

    return (
        <div className="design-content">
            <img className="design-content-img" src={tunePlayer} draggable={false} style={{cursor: "pointer"}} onClick={openTunePlayer}/>
            <img className="design-content-img" src={picDisplay} draggable={false} style={{cursor: "pointer"}} onClick={openPicDisplay}/>
            <img className="design-content-img" src={framePlayer} draggable={false} style={{cursor: "pointer"}} onClick={openFramePlayer}/>
            <img className="design-content-img" src={moepictures} draggable={false} style={{cursor: "pointer"}} onClick={openMoepictures}/>
            <img className="design-content-img" src={moepicturesApp} draggable={false} style={{cursor: "pointer", height: mobile ? "700px" : "1000px"}} onClick={openMoepicturesApp}/>
            <img className="design-content-img" src={kisaragi} draggable={false} style={{cursor: "pointer"}} onClick={openKisaragi}/>
        </div>
    )
}

export default DesignContent