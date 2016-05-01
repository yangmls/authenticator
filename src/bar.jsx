import './style.less';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import Dashboard from './containers/Dashboard'
import KeyForm from './containers/KeyForm'

import reducers from './reducers'

import { getToken } from './helpers'

let state = JSON.parse(localStorage.getItem('state') || '{}')

const store = createStore(reducers, state)

store.subscribe(() => {
    state = store.getState()
    localStorage.setItem('state', JSON.stringify(state))
});

render(
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="add" component={KeyForm} />
        </Route>
    </Router>
    </Provider>,
    document.getElementById('app')
);

electron.ipcRenderer.on('key', (event, message) => {
    state = store.getState();
    let key = state.keys[message];

    if (!key) {
        return
    }

    let token = getToken(state.keys[message].key)
    electron.ipcRenderer.send('copy', token)
});
