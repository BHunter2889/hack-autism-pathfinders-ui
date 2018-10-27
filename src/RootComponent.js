import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Redirect, Route, Router, Switch} from 'react-router-dom'
import history from './utils/history';
import Home from './components/Home';

const ROUTE_HOME = "/home";

const RootComponent = ({store}) => (
    <div>
        <Provider store={store}>
            <div className="app">
                <div className="container">
                    <Router history={history}>
                        <Switch>
                            <Route path={ROUTE_HOME} component={Home}/>
                            <Redirect to={ROUTE_HOME} />
                        </Switch>
                    </Router>
                </div>
            </div>
        </Provider>
    </div>
);

RootComponent.displayName = 'RootComponent';

RootComponent.propTypes = {
    store: PropTypes.object.isRequired
};

export default RootComponent;
