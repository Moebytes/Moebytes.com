import React from "react"
import img from "../assets/images/404.png"
import "./styles/404image.less"

const $404Image: React.FunctionComponent = () => {
    return (
        <div className="f404-img-container">
            <img className="f404-img" src={img} draggable={false}/>
        </div>
    )
}

export default $404Image