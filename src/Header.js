import React, {useState} from "react";
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, Button, Input} from "@material-ui/core";
import {Apps, Notifications, Search, VideoCall} from "@material-ui/icons";
import {useHistory} from 'react-router-dom'

import './Header.css'
import {Link} from "react-router-dom";

const Header = props => {
    const [inputSearch, setInputSearch] = useState('')
    const history = useHistory()

    const handleSearch = e => {
        e.preventDefault()

        return history.push(`/search/${inputSearch.toLowerCase()}`)
    }

    return (
        <div className="header">
            <div>

                <MenuIcon/>
                <Link to={'/'} onClick={() => setInputSearch('')}>
                    <img className="header__logo"
                         src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="logo"/>
                </Link>
            </div>

            <form className="header__input" onSubmit={handleSearch}>
                <input
                    name="search"
                    placeholder="Search..."
                    value={inputSearch}
                    onChange={e => setInputSearch(e.target.value)}
                />
                <Button type="submit" className="header__input-button">
                    <Search className="header__input-icon"/>
                </Button>
            </form>

            <div className="header__icons">
                <VideoCall/>
                <Apps/>
                <Notifications/>
                <Avatar src="./avatar.jpg" alt="avatar"/>
            </div>
        </div>
    )
}

export default Header