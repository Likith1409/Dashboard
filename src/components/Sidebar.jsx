import React, { useState } from 'react';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './bar.css'
import { Avatar } from '@mui/material';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <DashboardCustomizeRoundedIcon />
        },
        {
            path: "/Notification",
            name: "Notification",
            icon: <PersonSearchOutlinedIcon />
        },
        {
            path: "/Members",
            name: "Members",
            icon: <Groups2RoundedIcon />
        },
        {
            path: "/Suppliers",
            name: "College/Company",
            icon: <BackupTableIcon />
        }
    ];

    return (
        <div className="bar">
        <div className="container">
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Synxa</h1>
                    <div className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none", fontSize:"small" }} className="link_text">{item.name}</div>
                    </NavLink>
                ))}
                <div className="profile">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <div style={{ display: isOpen ? "block" : "none" }} className="profile_text">John Doe</div>
                </div>
            </div>
            <main className={`main-content ${isOpen ? 'shifted' : ''}`}>{children}</main>
        </div>
     </div>
    );
};

export default Sidebar;
