import React from "react";
import "./ChannelRow.css"
import {Avatar} from "@material-ui/core";
import {CheckCircleOutlineOutlined} from "@material-ui/icons";

const ChannelRow = ({image, channel, verified, subs, noOfVideos, description}) => {
    return (
        <div className="channel-row">
            <Avatar className="channel-row__logo" src={image} alt={channel}/>
            <div className="channel-row__text">
                <p className="channel-row__channel">{channel} {verified && <CheckCircleOutlineOutlined />}</p>
                <p>{subs} subscribers ▪ {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow