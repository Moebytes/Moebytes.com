import React from "react"
import {useArtSelector, useArtActions} from "../store"
import "./styles/artpreview.less"

const ArtPreview: React.FunctionComponent = () => {
    const {previewImg} = useArtSelector()
    const {setPreviewImg} = useArtActions()

    const close = () => {
        setPreviewImg("")
    }

    if (!previewImg) return null

    return (
        <div className="artpreview" onClick={close}>
            <svg viewBox="0 0 180 180" className="artpreview-close"><path d="M5 5 L175 175 M175 5 L5 175"></path></svg>
            <img className="artpreview-img" src={previewImg} draggable={false}/>
        </div>
    )
}

export default ArtPreview