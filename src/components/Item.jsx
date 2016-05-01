import React from 'react';
import moment from 'moment';

import { getToken } from '../helpers';

export default class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = {token: getToken(props.model.key)};
    }

    render() {

        return (
            <li className="list-group-item">
                <button className="key-button btn btn-negative"
                    onClick={() => this.props.onDelete(this.props.model.id)}>
                    <span style={{color: '#fff'}} className="icon icon-cancel"></span>
                </button>

                <div className="media-body">
                    <strong>{this.state.token}</strong>
                    {(() => {
                        if (this.props.model.comment) {
                            return '（' + this.props.model.comment +'）';
                        }

                        return '';
                    })()}
                    <p>
                        {(() => {
                            if (this.props.model.id > 3) {
                                return '无快捷键绑定';
                            }

                            return '快捷键：control + ' + this.props.model.id;
                        })()}
                    </p>
                </div>
            </li>
        );
    }

    componentDidMount() {
        const next = () => {
            var now = moment().unix();
            var n = moment().startOf('minute').unix() + 60;
            var left = n - now;

            setTimeout(() => {
                this.setState({
                    token: getToken(this.props.model.key)
                });
                next();
            }, left * 1000);
        }

        next();
    }

}
