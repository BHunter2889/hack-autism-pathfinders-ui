import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
// import history from './utils/history';
import AppContainer from './containers/AppContainer';
// import { MuiThemeProvider } from '@material-ui/core';
// import theme from './themes/LifeBinderTheme';

class RootComponent extends React.Component {
    render() {
        const {store} = this.props;

        return (
            <Provider store={store}>
                {/* <MuiThemeProvider theme={theme} > */}
                    <Router>
                        <AppContainer />
                    </Router>
                {/* </MuiThemeProvider>                 */}
            </Provider>
        );
    }
}

export default RootComponent;
