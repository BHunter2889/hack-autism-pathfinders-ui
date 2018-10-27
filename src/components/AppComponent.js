import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route, Router, Switch} from 'react-router-dom'
import history from '../utils/history';
import HomeContainer from '../containers/HomeContainer';

import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {getSideMenuNavItems} from '../SideMenuNavItems';
import ContactsContainer from "../containers/ContactsContainer";
import DocsContainer from "../containers/DocsContainer";
import FormsContainer from "../containers/FormsContainer";
import ComingSoonComponent from "./ComingSoonComponent";

export const ROUTE_HOME = '/home';
export const ROUTE_DOCS = '/docs';
export const ROUTE_FORMS = '/forms';
export const ROUTE_CONTACTS = '/contacts';
export const ROUTE_CALENDAR = '/calendar';
export const ROUTE_FAVORITES = '/favorites';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        // padding: theme.spacing.unit * 3,
    },
});

class RootComponent extends React.Component {
    constructor(props) {
        super(props);
        // TODO - uncomment these when we hook up the api calls
        props.fetchDocs();
        props.fetchForms();
        props.fetchTeam();
        props.fetchContacts();

        // Basic Fetch Test:
        // console.log("Trying to hit stuff");
        // fetch('/stuff')
        //     .then((res) => {
        //         console.log("the response:", res);
        //     })
        //     .catch((err) => {
        //         console.log("ohh no! error:", err);
        //     })
    }

    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes, theme} = this.props;

        return (
            <div className={classes.root}>
                <AppBar
                    position="absolute"
                    className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                >
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, this.state.open && classes.hide)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>
                            LifeBinder
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        Logo could go here?
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>{getSideMenuNavItems()}</List>
                    {/*<Divider/>*/}
                    {/*<List>{otherMailFolderListItems}</List>*/}
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <div className="app-body">
                        <Router history={history}>
                            <Switch>
                                <Route path={ROUTE_HOME} component={HomeContainer}/>
                                <Route path={ROUTE_CONTACTS} component={ContactsContainer}/>
                                <Route path={ROUTE_DOCS} component={DocsContainer}/>
                                <Route path={ROUTE_FORMS} component={FormsContainer}/>
                                <Route path={ROUTE_CALENDAR} component={ComingSoonComponent}/>
                                <Route path={ROUTE_FAVORITES} component={ComingSoonComponent}/>
                                <Redirect to={ROUTE_HOME}/>
                            </Switch>
                        </Router>
                    </div>
                </main>
            </div>
        );
    }
}

RootComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(RootComponent);
