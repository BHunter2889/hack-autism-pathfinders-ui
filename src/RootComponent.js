import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom'
import history from './utils/history';
import AppContainer from './containers/AppContainer';

class RootComponent extends React.Component {
    render() {
        const {store} = this.props;

        return (
            <Provider store={store}>
                <Router history={history}>
                    <AppContainer />
                </Router>
            </Provider>
        );
    }
}

export default RootComponent;
