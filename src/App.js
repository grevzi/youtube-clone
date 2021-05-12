import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

const Home = lazy(() => import('./Home'))
const Search = lazy(() => import('./Search'))

function App() {
    return (
        <div className="app">
            <Router>
                <Header />

                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/search/:searchTerm" component={Search}/>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
