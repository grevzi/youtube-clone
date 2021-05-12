import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";

const Home = props => {
    return (
        <div className="app__page">
            <Sidebar/>
            <RecommendedVideos/>
        </div>
    )
}

export default Home