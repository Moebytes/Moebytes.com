import React from "react"
import Agemasu from "../assets/music/Agemasu.mp3"
import Arigatou from "../assets/music/Arigatou.mp3"
import DefineRemix from "../assets/music/DefineRemix.mp3"
import Hai from "../assets/music/Hai.mp3"
import Konnichiwa from "../assets/music/Konnichiwa.mp3"
import Kudasai from "../assets/music/Kudasai.mp3"
import Moonlight from "../assets/music/Moonlight.mp3"
import Rainfall from "../assets/music/Rainfall.mp3"
import Snowflake from "../assets/music/Snowflake.mp3"
import SquareDreams from "../assets/music/SquareDreams.mp3"
import Starlight from "../assets/music/Starlight.mp3"
import Starstruck from "../assets/music/Starstruck.mp3"
import Xylophone from "../assets/music/Xylophone.mp3"
import MusicGrid from "./MusicGrid"
import "./styles/musiccontent.less"

const MusicContent: React.FunctionComponent = () => {
    return (
        <div className="musiccontent">
            <div className="musiccontent-notice-container">
                <span className="musiccontent-notice-text">This is my old music. I plan to improve and make better music for you soon.</span>
            </div>
            <div className="musiccontent-items-container">
                <MusicGrid audio={Agemasu}/>
                <MusicGrid audio={Hai}/>
                <MusicGrid audio={SquareDreams}/>
                <MusicGrid audio={Xylophone}/>
                <MusicGrid audio={Arigatou}/>
                <MusicGrid audio={Starlight}/>
                <MusicGrid audio={Rainfall}/>
                <MusicGrid audio={DefineRemix}/>
                <MusicGrid audio={Konnichiwa}/>
                <MusicGrid audio={Moonlight}/>
                <MusicGrid audio={Kudasai}/>
                <MusicGrid audio={Starstruck}/>
                <MusicGrid audio={Snowflake}/>
            </div>
        </div>
    )
}

export default MusicContent