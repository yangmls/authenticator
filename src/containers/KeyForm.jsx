import KeyForm from '../components/KeyForm';

import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { addKey } from '../actions';

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {

        onSubmit(key, comment) {
            dispatch(addKey(key, comment))
            hashHistory.push('/')
        },

        onCancel() {
            hashHistory.push('/')
        }
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyForm);
