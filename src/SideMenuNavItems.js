// This file is shared across the demos.

import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import NotesIcon from '@material-ui/icons/Notes';
import StarIcon from '@material-ui/icons/Star';
import PeopleIcon from '@material-ui/icons/People';
import FolderShared from '@material-ui/icons/FolderShared';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import {Link} from "react-router-dom";
import {ROUTE_CALENDAR, ROUTE_CONTACTS, ROUTE_DOCS, ROUTE_FAVORITES, ROUTE_FORMS, ROUTE_HOME} from "./RootComponent";


export const getSideMenuNavItems = () => (
    <div className="menu-items">
        <Link to={ROUTE_HOME}>
            <ListItem button>
                <ListItemIcon>
                    <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItem>
        </Link>

        <Link to={ROUTE_CONTACTS}>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="My Contacts"/>
            </ListItem>
        </Link>

        <Link to={ROUTE_DOCS}>
            <ListItem button>
                <ListItemIcon>
                    <FolderShared/>
                </ListItemIcon>
                <ListItemText primary="My Documents"/>
            </ListItem>
        </Link>

        <Link to={ROUTE_FORMS}>
            <ListItem button>
                <ListItemIcon>
                    <NotesIcon/>
                </ListItemIcon>
                <ListItemText primary="My Forms"/>
            </ListItem>
        </Link>

        <Link to={ROUTE_CALENDAR}>
            <ListItem button>
                <ListItemIcon>
                    <CalendarIcon/>
                </ListItemIcon>
                <ListItemText primary="My Calendar"/>
            </ListItem>
        </Link>

        <Link to={ROUTE_FAVORITES}>
            <ListItem button>
                <ListItemIcon>
                    <StarIcon/>
                </ListItemIcon>
                <ListItemText primary="Favorites"/>
            </ListItem>
        </Link>
    </div>
);