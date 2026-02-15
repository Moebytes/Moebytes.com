import React from "react"
import star from "../assets/svg/star.svg"
import "./styles/homecontent.less"

const HomeContent: React.FunctionComponent = () => {
    return (
        <div className="homecontent">
            <div className="homecontent-header-container">
                <img className="homecontent-header-icon" src={star} draggable={false}/>
                <span className="homecontent-header-text">About Me</span>
            </div>
            <div className="homecontent-text-container">
                <span className="homecontent-text">
                    I am a programmer from the United States with a B.S. degree in Computer Science and 
                    1 year of experience. In my free time, I make software and tools to enhance my life, 
                    as well as create things in relation to my passions and interests. 
                    <br/><br/>
                    What is "moe"? Basically it means that I love cute things. As a word of caution, 
                    you are going to see a lot of moe things here. Why would you come to my website 
                    not expecting moe!?
                    <br/><br/>
                    Below is a list of tools I am familiar with, but it is not an exhaustive list 
                    of everything I have ever used. 
                </span>
            </div>
            <div className="homecontent-header-container">
                <img className="homecontent-header-icon" src={star} draggable={false}/>
                <span className="homecontent-header-text">Design</span>
            </div>
            <div className="homecontent-text-container">
                <span className="homecontent-text">
                    Figma, Adobe Illustrator, Adobe Photoshop
                </span>
            </div>
            <div className="homecontent-header-container">
                <img className="homecontent-header-icon" src={star} draggable={false}/>
                <span className="homecontent-header-text">Web Frontend</span>
            </div>
            <div className="homecontent-text-container">
                <span className="homecontent-text">
                    TypeScript, React, Redux, HTML/CSS, SCSS/LESS
                </span>
            </div>
            <div className="homecontent-header-container">
                <img className="homecontent-header-icon" src={star} draggable={false}/>
                <span className="homecontent-header-text">Web Backend</span>
            </div>
            <div className="homecontent-text-container">
                <span className="homecontent-text">
                    Node.js, Express, PostgreSQL, Redis, Python, Next.js
                </span>
            </div>
            <div className="homecontent-header-container">
                <img className="homecontent-header-icon" src={star} draggable={false}/>
                <span className="homecontent-header-text">Desktop</span>
            </div>
            <div className="homecontent-text-container">
                <span className="homecontent-text">
                    TypeScript, Electron, React
                </span>
            </div>
            <div className="homecontent-header-container">
                <img className="homecontent-header-icon" src={star} draggable={false}/>
                <span className="homecontent-header-text">Mobile</span>
            </div>
            <div className="homecontent-text-container">
                <span className="homecontent-text">
                    TypeScript, React Native, Kotlin, Swift
                </span>
            </div>
            <div className="homecontent-header-container">
                <img className="homecontent-header-icon" src={star} draggable={false}/>
                <span className="homecontent-header-text">Discord Bots</span>
            </div>
            <div className="homecontent-text-container">
                <span className="homecontent-text">
                    TypeScript, Node.js, Discord.js
                </span>
            </div>
            <div className="homecontent-header-container">
                <img className="homecontent-header-icon" src={star} draggable={false}/>
                <span className="homecontent-header-text">Audio Plugins</span>
            </div>
            <div className="homecontent-text-container">
                <span className="homecontent-text">
                    JUCE, C++, TypeScript, React
                </span>
            </div>
            <div className="homecontent-header-container">
                <img className="homecontent-header-icon" src={star} draggable={false}/>
                <span className="homecontent-header-text">Game Mods</span>
            </div>
            <div className="homecontent-text-container">
                <span className="homecontent-text">
                    C++, Objective-C
                </span>
            </div>
            <div className="homecontent-text-container">
                <span className="homecontent-text">
                    Most of my work is done with TypeScript but I am adaptable to learning different languages, 
                    including but not limited to Python and C++. 
                </span>
            </div>
            <div className="homecontent-header-container">
                <img className="homecontent-header-icon" src={star} draggable={false}/>
                <span className="homecontent-header-text">Social Accounts</span>
            </div>
            <div className="homecontent-text-container">
                <span className="homecontent-text">
                    GitHub: <a href="https://github.com/Moebytes">https://github.com/Moebytes</a><br/>
                    Npm: <a href="https://www.npmjs.com/~moebytes">https://www.npmjs.com/~moebytes</a><br/>
                    Figma: <a href="https://www.figma.com/@moebytes">https://www.figma.com/@moebytes</a>
                </span>
            </div>
        </div>
    )
}

export default HomeContent