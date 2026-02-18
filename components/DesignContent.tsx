import React from "react"
import {useLayoutSelector} from "../store"
import moepictures from "../assets/design/moepictures.png"
import moepicturesApp from "../assets/design/moepictures-app.png"
import kisaragi from "../assets/design/kisaragi.png"
import tunePlayer from "../assets/design/tune-player.png"
import picViewer from "../assets/design/pic-viewer.png"
import motionPlayer from "../assets/design/motion-player.png"
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

    const openPicViewer = () => {
        window.open("https://www.figma.com/design/kqGaBzYxe93zSPxDPz6wRa/Pic-Viewer", "_blank")
    }

    const openMotionPlayer = () => {
        window.open("https://www.figma.com/design/PpYPQAYojONPWedMbDRL8t/Motion-Player", "_blank")
    }

    return (
        <div className="design-content">
            <img className="design-content-img" src={tunePlayer} draggable={false} style={{cursor: "pointer"}} onClick={openTunePlayer}/>
            <img className="design-content-img" src={picViewer} draggable={false} style={{cursor: "pointer"}} onClick={openPicViewer}/>
            <img className="design-content-img" src={motionPlayer} draggable={false} style={{cursor: "pointer"}} onClick={openMotionPlayer}/>
            <img className="design-content-img" src={moepictures} draggable={false} style={{cursor: "pointer"}} onClick={openMoepictures}/>
            <img className="design-content-img" src={moepicturesApp} draggable={false} style={{cursor: "pointer", height: mobile ? "700px" : "1000px"}} onClick={openMoepicturesApp}/>
            <img className="design-content-img" src={kisaragi} draggable={false}/>
        </div>
    )
}

export default DesignContent