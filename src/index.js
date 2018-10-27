import './styles/index.css';
import React                            from 'react';
import ReactDOM                         from 'react-dom';
import registerServiceWorker            from './registerServiceWorker';
import RootComponent                    from "./RootComponent";
import {composeWithDevTools}            from 'redux-devtools-extension/developmentOnly';
import {applyMiddleware, createStore}   from 'redux';
import thunk                            from 'redux-thunk';
import reducers                         from './reducers';

const store = createStore(reducers(), composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<RootComponent store={store} />, document.getElementById('root'));
registerServiceWorker();
