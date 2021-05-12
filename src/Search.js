import React from "react";
import Sidebar from "./Sidebar";
import "./Search.css"
import {TuneOutlined} from "@material-ui/icons";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const Search = props => {
    return (
        <div className="app__page">
            <Sidebar/>

            <div className="search-page">
                <div className="search-page__filter">
                    <TuneOutlined />
                    <div className="search-page__filter-title">
                        FILTER
                    </div>
                </div>
                <hr/>

                <ChannelRow
                    image="https://yt3.ggpht.com/ytc/AAUvwnj_flFm-0-wz9BxGhMjitpoSj0Hj-Enr-puRS1PHvA=s176-c-k-c0x00ffffff-no-rj-mo"
                    channel="Roman Loiko"
                    verified
                    subs="659K"
                    noOfVideos={382}
                    description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
                />
                <hr/>

                <VideoRow
                    title="Become a Web Developer in 10 minutes | 2021"
                    views="2.3M Views"
                    subs="659K"
                    timestamp="3 days ago"
                    channel="Roman Loiko"
                    image="https://i.ytimg.com/vi/r5iFrxi9-hY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCAOygzDoEAiQUBpqXKnqgKMDdmNw"
                    description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
                />

                <VideoRow
                    title="Netflix Clone - React Tutorial - Styled Components - Firebase (Firestore & Auth)"
                    views="456K Views"
                    subs="659K"
                    timestamp="10 days ago"
                    channel="Roman Loiko"
                    image="https://i.ytimg.com/vi/x_EEwGe-a9o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRELY9Sjsa0MZSdYTXpr7fPytd4w"
                    description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
                />

                <VideoRow
                    title="Build Disney+ with React JS (Firebase + Styled Components + Redux)"
                    views="456K Views"
                    subs="659K"
                    timestamp="10 days ago"
                    channel="Roman Loiko"
                    image="https://i.ytimg.com/vi/R_OERlafbmw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVdpo-fmfGTDoRDcGk_yIlFXEKJg"
                    description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
                />


            </div>

        </div>
    )
}

export default Search