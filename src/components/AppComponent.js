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
import DocsContainer from "../containers/DocsContainer";
import ComingSoonComponent from "./ComingSoonComponent";
import BinderComponent from './BinderComponent';
import FormByIdContainer from "../containers/FormByIdContainer";
import CalendarContainer from "../containers/CalendarContainer";
import ContactsContainer from "../containers/ContactsContainer";

export const ROUTE_HOME = '/home';
export const ROUTE_DOCS = '/docs';
export const ROUTE_FORMS = '/forms';
export const ROUTE_CONTACTS = '/contacts';
export const ROUTE_CALENDAR = '/calendar';
export const ROUTE_FAVORITES = '/favorites';

export const ROUTE_FORM_FROM_TEMPLATE = `/newFromTemplate`;

export const ROUTE_VIEW_FORM = `/form/:id`;
export const ROUTE_FORM_EDIT = `${ROUTE_VIEW_FORM}/edit`;

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
    homeBoard: {
        backgroundColor: "deepskyblue"
    },
    medBoard: {
        backgroundColor: "orange"
    },
    teamBoard: {
        backgroundColor: "blueviolet"
    }
});

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        // TODO - uncomment these when we hook up the api calls
        props.fetchDocs();
        props.fetchForms();
        props.fetchTeam();
        props.fetchContacts();
        props.fetchUpcomingEvents();
        //
        // this.updateDimensions = this.updateDimensions.bind(this);
        // this.height = window.innerHeight;
        // this.isTall = this.height > 800;
        // props.updateDimensions({width: window.innerWidth, height: window.innerHeight});
    }

    // updateDimensions() {
    //     const {updateDimensions} = this.props;
    //     this.height = window.innerHeight;
    //     if ((this.isTall && this.height < 800) ||
    //         (!this.isTall && this.height > 800)) {
    //         updateDimensions({width: window.innerWidth, height: window.innerHeight});
    //     }
    //     this.lastHeight = this.height;
    // }
    // componentDidMount() {
    //     window.addEventListener("resize", this.updateDimensions);
    // }
    // componentWillUnmount() {
    //     window.removeEventListener("resize", this.updateDimensions);
    // }

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
            <div className={classes.root} style={{width: "100vw"}}>
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
                </Drawer>
                <main className={classes.content} style={{width: "100%"}}>
                    <div className={classes.toolbar}/>
                    <div className="app-body">
                        <Router history={history}>
                            <Switch>
                                <Route path={ROUTE_HOME} component={HomeContainer}/>
                                <Route path={ROUTE_CONTACTS} component={ContactsContainer}/>
                                <Route path={ROUTE_DOCS} component={DocsContainer}/>
                                <Route path={ROUTE_FORM_EDIT} component={FormByIdContainer}/>
                                <Route path={`${ROUTE_FORM_FROM_TEMPLATE}/:id`} component={FormByIdContainer}/>
                                <Route path={ROUTE_VIEW_FORM} component={ComingSoonComponent}/>
                                <Route path={ROUTE_FORMS} component={BinderComponent}/>
                                <Route path={ROUTE_CALENDAR} component={CalendarContainer}/>
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

AppComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AppComponent);
