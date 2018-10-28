// This file is shared across the demos.

import React, {Component} from 'react';
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import NotesIcon from '@material-ui/icons/Notes';
import StarIcon from '@material-ui/icons/Star';
import PeopleIcon from '@material-ui/icons/People';
import FolderShared from '@material-ui/icons/FolderShared';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import history from './utils/history';
// import {Link} from "react-router-dom";
import {ROUTE_CALENDAR, ROUTE_CONTACTS, ROUTE_DOCS, ROUTE_FAVORITES, ROUTE_FORMS, ROUTE_HOME} from "./components/AppComponent";
import { withTheme } from '@material-ui/core';


class SideMenuNavItems extends Component { 
    render() {
    // <div className="menu-items">
     return(
        <List>
            <ListItem button onClick={ () => history.push(ROUTE_HOME)}>
                <ListItemIcon>
                    <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItem>
            <ListItem button onClick={ () => history.push(ROUTE_CONTACTS)}>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="My Contacts"/>
            </ListItem>
            <ListItem button onClick={ () => history.push(ROUTE_DOCS)}>
                <ListItemIcon>
                    <FolderShared/>
                </ListItemIcon>
                <ListItemText primary="My Documents"/>
            </ListItem>
            <ListItem button onClick={ () => history.push(ROUTE_FORMS)}>
                <ListItemIcon>
                    <NotesIcon/>
                </ListItemIcon>
                <ListItemText primary="My Forms"/>
            </ListItem>
            <ListItem button onClick={ () => history.push(ROUTE_CALENDAR)}>
                <ListItemIcon>
                    <CalendarIcon/>
                </ListItemIcon>
                <ListItemText primary="My Calendar"/>
            </ListItem>
            <ListItem button onClick={ () => history.push(ROUTE_FAVORITES)}>
                <ListItemIcon>
                    <StarIcon/>
                </ListItemIcon>
                <ListItemText primary="Favorites"/>
            </ListItem>
        </List>
    )};
}

export default withTheme()(SideMenuNavItems);