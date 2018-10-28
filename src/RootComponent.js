import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom'
import history from './utils/history';
import AppContainer from './containers/AppContainer';
import {withTheme} from '@material-ui/core/styles';
// import { MuiThemeProvider } from '@material-ui/core';
// import theme from './themes/LifeBinderTheme';

class RootComponent extends React.Component {
    render() {
        const {store} = this.props;
        // console.log("rendering root with props: ", this.props);
        
        return (
            <Provider store={store}>
                {/* <MuiThemeProvider theme={theme} > */}
                    <Router history={history}>
                        <AppContainer />
                    </Router>
                {/* </MuiThemeProvider>                 */}
            </Provider>
        );
    }
}

export default withTheme()(RootComponent);
