import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ContactsContainer from "../containers/ContactsContainer";
import DocsContainer from "../containers/DocsContainer";
import FormsContainer from "../containers/FormsContainer";
import ComingSoonComponent from "./ComingSoonComponent";
import HomeContainer from '../containers/HomeContainer';

export const ROUTE_HOME = '/home';
export const ROUTE_DOCS = '/docs';
export const ROUTE_FORMS = '/forms';
export const ROUTE_CONTACTS = '/contacts';
export const ROUTE_CALENDAR = '/calendar';
export const ROUTE_FAVORITES = '/favorites';

export default () => (
    <Router>
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
);