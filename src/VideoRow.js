import React from "react";
import "./VideoRow.css"

const VideoRow = ({views, subs, description, timestamp, channel, title, image}) => {
    return (
        <div className="video-row">
            <img src={image} alt={title}/>
            <div className="video-row__text">
                <p className="video-row__title">{title}</p>
                <p className="video-row__headline">
                    {channel} ▪ <span className="video-row__subs"><span className="video-row__subs-number">{subs}</span> Subscribers</span> {views} views ▪ {timestamp}
                </p>
                <p className="video-row__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow