import './index.css';
import React                            from 'react';
import ReactDOM                         from 'react-dom';
import registerServiceWorker            from './registerServiceWorker';
import RootComponent                    from "./RootComponent";
import {composeWithDevTools}            from 'redux-devtools-extension/developmentOnly';
import {applyMiddleware, createStore}   from 'redux';
import thunk                            from 'redux-thunk';
import reducers                         from './reducers';
import {MuiThemeProvider}                 from '@material-ui/core/styles';
import theme                            from './themes/LifeBinderTheme';

const store = createStore(reducers(), composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render((
<MuiThemeProvider theme={theme}>
                    <RootComponent store={store} />
</MuiThemeProvider>), 
                document.getElementById('root'));
registerServiceWorker();
