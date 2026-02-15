import React, {useRef} from "react"
import {useArtSelector, useArtActions} from "../store"
import "./styles/artgrid.less"

interface Props {
    img: string
}

const ArtGrid: React.FunctionComponent<Props> = (props) => {
    const {setPreviewImg} = useArtActions()
    const ref = useRef<HTMLImageElement>(null)

    const imageAnimation = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const width = rect?.width
        const height = rect?.height
        const x = event.clientX - rect.x
        const y = event.clientY - rect.y
        const translateX = ((x / width) - 0.5) * 3
        const translateY = ((y / height) - 0.5) * 3
        ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) scale(1.02)`
    }

    const cancelImageAnimation = () => {
        if (!ref.current) return
        ref.current.style.transform = "scale(1)"
    }

    const openPreview = () => {
        setPreviewImg(props.img)
    }

    return (
        <div className="artgrid" onMouseMove={(event) => imageAnimation(event)} onMouseLeave={() => cancelImageAnimation()} onClick={openPreview}>
            <img ref={ref} className="artgrid-img" src={props.img} draggable={false}/>
        </div>
    )
}

export default ArtGrid