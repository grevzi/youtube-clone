import React from "react";
import './SidebarRow.css'
import {Link} from "react-router-dom";

const SidebarRow = ({selected, title, Icon, link}) => {
    return (
        <Link to={link} className={`sidebar-row ${selected && 'is-selected'}`}>
            <Icon className="sidebar-row__icon" />
            <p className="sidebar-row__title">{title}</p>
        </Link>
    )
}

export default SidebarRow