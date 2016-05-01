import React from 'react'

import { hashHistory } from 'react-router'

export default class App extends React.Component {

    render() {
        return (
            <div className="window">
                <header className="toolbar taoolbar-header">
                    <h1 className="title">两步验证</h1>
                </header>

                <div className="window-content">
                    {this.props.children}
                </div>

                <footer className="toolbar toolbar-footer">
                    <div className="toolbar-actions">
                        <button type="button" className="btn btn-default"
                            onClick={() => {
                                electron.ipcRenderer.send('exit');
                            }}>
                            退出
                        </button>

                        <button type="button" className="btn btn-primary pull-right"
                            onClick={() => {
                                hashHistory.push('/add')
                            }}>
                            增加
                        </button>
                    </div>
                </footer>
            </div>
        )
    }

}
