import React from 'react';

export default class SettingsForm extends React.Component {

    render() {
        return (
            <form style={{padding: '10px'}} onSubmit={e => {
                    e.preventDefault()
                    this.props.onSubmit(this.refs.password.value)
                }}>
                <div className="form-group">
                    <label>密码</label>
                    <input type="password"
                        className="form-control"
                        defaultValue={this.props.password}
                        ref="password" />
                </div>

                <div className="form-actions">
                    <button onClick={this.props.onCancel} type="button"
                        className="btn btn-form btn-default">取消</button>
                    <button type="submit" className="btn btn-form btn-primary">保存</button>
                </div>
            </form>
        );
    }

}
