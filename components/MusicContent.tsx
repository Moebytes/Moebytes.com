import React from "react"
import Agemasu from "../assets/music/audio/Agemasu.mp3"
import AgemasuCover from "../assets/music/covers/Agemasu.png"
import Arigatou from "../assets/music/audio/Arigatou.mp3"
import ArigatouCover from "../assets/music/covers/Arigatou.png"
import DefineRemix from "../assets/music/audio/DefineRemix.mp3"
import DefineCover from "../assets/music/covers/Define.png"
import Hai from "../assets/music/audio/Hai.mp3"
import HaiCover from "../assets/music/covers/Hai.png"
import Icicle from "../assets/music/audio/Icicle.mp3"
import IcicleCover from "../assets/music/covers/Icicle.png"
import Konnichiwa from "../assets/music/audio/Konnichiwa.mp3"
import KonnichiwaCover from "../assets/music/covers/Konnichiwa.png"
import Kudasai from "../assets/music/audio/Kudasai.mp3"
import KudasaiCover from "../assets/music/covers/Kudasai.png"
import Moonlight from "../assets/music/audio/Moonlight.mp3"
import MoonlightCover from "../assets/music/covers/Moonlight.png"
import Rainfall from "../assets/music/audio/Rainfall.mp3"
import RainfallCover from "../assets/music/covers/Rainfall.png"
import Snowflake from "../assets/music/audio/Snowflake.mp3"
import SnowflakeCover from "../assets/music/covers/Snowflake.png"
import SquareDreams from "../assets/music/audio/SquareDreams.mp3"
import SquareDreamsCover from "../assets/music/covers/SquareDreams.png"
import Starlight from "../assets/music/audio/Starlight.mp3"
import StarlightCover from "../assets/music/covers/Starlight.png"
import Starstruck from "../assets/music/audio/Starstruck.mp3"
import StarstruckCover from "../assets/music/covers/Starstruck.png"
import Xylophone from "../assets/music/audio/Xylophone.mp3"
import XylophoneCover from "../assets/music/covers/Xylophone.png"
import MusicGrid from "./MusicGrid"
import "./styles/musiccontent.less"

const MusicContent: React.FunctionComponent = () => {
    return (
        <div className="musiccontent">
            <div className="musiccontent-notice-container">
                <span className="musiccontent-notice-text">This is my old music. I plan to improve and make better music for you soon.</span>
            </div>
            <div className="musiccontent-items-container">
                <MusicGrid audio={Hai} cover={HaiCover}/>
                <MusicGrid audio={SquareDreams} cover={SquareDreamsCover}/>
                <MusicGrid audio={Xylophone} cover={XylophoneCover}/>
                <MusicGrid audio={Arigatou} cover={ArigatouCover}/>
                <MusicGrid audio={Starlight} cover={StarlightCover}/>
                <MusicGrid audio={Rainfall} cover={RainfallCover}/>
                <MusicGrid audio={DefineRemix} cover={DefineCover}/>
                <MusicGrid audio={Konnichiwa} cover={KonnichiwaCover}/>
                <MusicGrid audio={Icicle} cover={IcicleCover}/>
                <MusicGrid audio={Moonlight} cover={MoonlightCover}/>
                <MusicGrid audio={Kudasai} cover={KudasaiCover}/>
                <MusicGrid audio={Starstruck} cover={StarstruckCover}/>
                <MusicGrid audio={Snowflake} cover={SnowflakeCover}/>
                <MusicGrid audio={Agemasu} cover={AgemasuCover}/>
            </div>
        </div>
    )
}

export default MusicContent