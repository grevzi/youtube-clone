import React from "react";
import './VideoCard.css'
import {Avatar} from "@material-ui/core";

const VideoCard = ({ image, title, channel, views, timestamp, channelImage }) => {
    return (
        <div className="video-card">
            <img className="video-card__thumbnail" src={image} alt={title} />
            <div className="video-card__info">
                <Avatar className="video-card__avatar" src={channelImage} alt={channel} />
                <div className="video-card__text">
                    <div className="video-card__title">{title}</div>
                    <p>{channel}</p>
                    <p>{views} ▪ {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard