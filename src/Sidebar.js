import React from "react";
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import {
    ExpandMoreOutlined,
    History,
    Home,
    OndemandVideo,
    Subscriptions,
    ThumbUpAltOutlined,
    VideoLibrary,
    WatchLater,
    Whatshot
} from "@material-ui/icons";

const Sidebar = props => {
    return (
        <div className="sidebar">

            <SidebarRow selected Icon={Home} title="Home" link='/' />
            <SidebarRow Icon={Whatshot} title="Trending" link='/' />
            <SidebarRow Icon={Subscriptions} title="Subscription" link='/' />
            <hr/>
            <SidebarRow Icon={VideoLibrary} title="Library" link='/' />
            <SidebarRow Icon={History} title="History" link='/' />
            <SidebarRow Icon={OndemandVideo} title="Your videos" link='/' />
            <SidebarRow Icon={WatchLater} title="Watch Later" link='/' />
            <SidebarRow Icon={ThumbUpAltOutlined} title="Liked videos" link='/' />
            <SidebarRow Icon={ExpandMoreOutlined} title="Show more" link='/' />
            <hr/>
        </div>
    )
};

export default Sidebar