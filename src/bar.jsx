import './style.less';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import Dashboard from './containers/Dashboard'
import KeyForm from './containers/KeyForm'
import SettingsForm from './containers/SettingsForm'

import reducers from './reducers'

import { getToken } from './helpers'

let state = JSON.parse(localStorage.getItem('state') || '{}')

const store = createStore(reducers, state)

store.subscribe(() => {
    let state = store.getState()
    localStorage.setItem('state', JSON.stringify(state))
});

render(
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="add" component={KeyForm} />
            <Route path="settings" component={SettingsForm} />
        </Route>
    </Router>
    </Provider>,
    document.getElementById('app')
);

electron.ipcRenderer.on('key', (event, message) => {
    let state = store.getState();
    let key = state.keys[message];

    if (!key) {
        return
    }

    let token = getToken(state.keys[message].key)
    electron.ipcRenderer.send('copy', token)
});

electron.ipcRenderer.on('keyPassword', (event, message) => {
    let state = store.getState();
    let key = state.keys[message];

    if (!key) {
        return
    }

    if (!state.settings) {
        return
    }

    if (!state.settings.password) {
        return
    }

    let password = state.settings.password
    let token = getToken(state.keys[message].key)
    electron.ipcRenderer.send('copy', password + token)
});

electron.ipcRenderer.on('password', (event, message) => {
    let state = store.getState();

    if (!state.settings) {
        return
    }

    if (!state.settings.password) {
        return
    }

    let password = state.settings.password
    electron.ipcRenderer.send('copy', password)
});
