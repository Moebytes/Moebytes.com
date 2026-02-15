import React from "react"
import GabrielPicnic from "../assets/art/GabrielPicnic.jpg"
import GabrielPicnic2 from "../assets/art/GabrielPicnic2.jpg"
import KarenFrame from "../assets/art/KarenFrame.jpg"
import Kisaragi from "../assets/art/Kisaragi.jpg"
import KleeForest from "../assets/art/KleeForest.jpg"
import LlennAndFuka from "../assets/art/LlennAndFuka.jpg"
import Roka from "../assets/art/Roka.jpg"
import UmaruSoda from "../assets/art/UmaruSoda.jpg"
import ArtGrid from "./ArtGrid"
import "./styles/artcontent.less"

const ArtContent: React.FunctionComponent = () => {
    return (
        <div className="artcontent">
            <div className="artcontent-notice-container">
                <span className="artcontent-notice-text">This is my old art. I plan to improve and make better art for you soon.</span>
            </div>
            <div className="artcontent-items-container">
                <ArtGrid img={GabrielPicnic}/>
                <ArtGrid img={GabrielPicnic2}/>
                <ArtGrid img={UmaruSoda}/>
                <ArtGrid img={KleeForest}/>
                <ArtGrid img={LlennAndFuka}/>
                <ArtGrid img={Kisaragi}/>
                <ArtGrid img={Roka}/>
                <ArtGrid img={KarenFrame}/>
            </div>
        </div>
    )
}

export default ArtContent