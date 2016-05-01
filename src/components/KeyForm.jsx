import React from 'react';

export default class KeyForm extends React.Component {

    render() {
        return (
            <form style={{padding: '10px'}} onSubmit={e => {
                    e.preventDefault()
                    this.props.onSubmit(this.refs.key.value, this.refs.comment.value)
                }}>
                <div className="form-group">
                    <label>私钥</label>
                    <input type="text"
                        className="form-control"
                        ref="key" />
                </div>

                <div className="form-group">
                    <label>备注</label>
                    <input type="text"
                        className="form-control"
                        ref="comment" />
                </div>

                <div className="form-actions">
                    <button onClick={this.props.onCancel} type="button"
                        className="btn btn-form btn-default">取消</button>
                    <button type="submit" className="btn btn-form btn-primary">提交</button>
                </div>
            </form>
        );
    }

}
