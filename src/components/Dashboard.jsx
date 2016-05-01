import React from 'react';

import Item from './Item';

export default class Dashboard extends React.Component {

    render() {
        return (
            <ul className="list-group">
                { this.props.keys.map((key) => <Item key={key.id} model={key} onDelete={this.props.onDelete}></Item>) }
            </ul>
        );
    }

}
