import React from "react"
import star from "../assets/svg/star.svg"
import "./styles/homecontent.less"

const PrivacyContent: React.FunctionComponent = () => {
    return (
        <div className="homecontent">
            <div className="homecontent-header-container">
                <img className="homecontent-header-icon" src={star} draggable={false}/>
                <span className="homecontent-header-text">Privacy Policy</span>
            </div>
            <div className="homecontent-text-container">
                <span className="homecontent-text">
                    Last Updated: March 9, 2026<br/><br/>

                    This privacy policy describes the information that Moebytes ("I", "me", "my") collects when you use my software and applications ("apps").<br/><br/>

                    <span className="homecontent-text-alt">Collected Information</span><br/>
                    Please scroll down and find the specific app you want to inquire about in the list. If you don't find one of my apps 
                    here, it may provide its own privacy policy.<br/><br/>

                    <span className="homecontent-text-alt">Tune Player</span><br/>
                    This app doesn't collect user information. It may send HTTP requests to fetch a remote file on 
                    request. Any data exchanged with those websites is managed by that website's privacy policy.<br/><br/>

                    <span className="homecontent-text-alt">Pic Display</span><br/>
                    This app doesn't collect user information. It may send HTTP requests to fetch a remote file on 
                    request. Any data exchanged with those websites is managed by that website's privacy policy.<br/><br/>

                    <span className="homecontent-text-alt">Frame Player</span><br/>
                    This app doesn't collect user information. It may send HTTP requests to fetch a remote file on 
                    request. Any data exchanged with those websites is managed by that website's privacy policy.<br/><br/>

                    <span className="homecontent-text-alt">Waifu2x Upscaler</span><br/>
                    This app doesn't collect user information.<br/><br/>

                    <span className="homecontent-text-alt">Pixel Compressor</span><br/>
                    This app doesn't collect user information.<br/><br/>

                    <span className="homecontent-text-alt">Third Party Services</span><br/>
                    Some apps allow users to access remote content on external websites. I am not responsible for the 
                    privacy practices of third party services.<br/><br/>

                    <span className="homecontent-text-alt">Legal Requirements</span><br/>
                    I may disclose information necessary to comply with applicable laws and regulations if required by the law.<br/><br/>

                    <span className="homecontent-text-alt">Changes to this policy</span><br/>
                    I can make changes to this policy at any time, reflected by its "last updated" date. Changes to this policy are effective immediately on publication.<br/><br/>
                </span>
            </div>
        </div>
    )
}

export default PrivacyContent
