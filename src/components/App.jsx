import React from 'react'

import { hashHistory } from 'react-router'

export default class App extends React.Component {

    render() {
        return (
            <div className="window">
                <header className="toolbar taoolbar-header">
                    <h1 className="title">两步验证</h1>

                    <div className="toolbar-actions">
                        <button className="btn btn-default"
                            onClick={() => {
                                hashHistory.push('/settings')
                            }}>
                            <span className="icon icon-home"></span>
                            设置
                        </button>

                        <button className="btn btn-default pull-right"
                            onClick={() => {
                                hashHistory.push('/add')
                            }}>
                            <span className="icon icon-plus"></span>
                            增加
                        </button>
                    </div>
                </header>

                <div className="window-content">
                    {this.props.children}
                </div>

                <footer className="toolbar toolbar-footer">
                    <div className="toolbar-actions">
                        <button type="button" className="btn btn-default pull-right"
                            onClick={() => {
                                electron.ipcRenderer.send('exit');
                            }}>
                            退出
                        </button>
                    </div>
                </footer>
            </div>
        )
    }

}
