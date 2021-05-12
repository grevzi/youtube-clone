import React from "react";
import './RecommendedVideos.css'
import VideoCard from "./VideoCard";

const RecommendedVideos = props => {
    return (
        <div className="recommended-videos">
            <p className="recommended-videos__title">Recommended</p>
            <div className="recommended-videos__videos">
                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2021"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnj_flFm-0-wz9BxGhMjitpoSj0Hj-Enr-puRS1PHvA=s88-c-k-c0x00ffffff-no-rj"
                    channel="Roman Loiko"
                    image="https://i.ytimg.com/vi/r5iFrxi9-hY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCAOygzDoEAiQUBpqXKnqgKMDdmNw"
                />

                <VideoCard
                    title="Build Disney+ with React JS (Firebase + Styled Components + Redux)"
                    views="456K Views"
                    subs="659K"
                    timestamp="10 days ago"
                    image="https://i.ytimg.com/vi/R_OERlafbmw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVdpo-fmfGTDoRDcGk_yIlFXEKJg"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnj_flFm-0-wz9BxGhMjitpoSj0Hj-Enr-puRS1PHvA=s88-c-k-c0x00ffffff-no-rj"
                    channel="Roman Loiko"
                />
            </div>
        </div>
    )
}

export default RecommendedVideos