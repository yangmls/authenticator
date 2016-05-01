import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';

import { removeKey } from '../actions';

const mapStateToProps = (state) => {
    return {
        keys: state.keys
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete(id) {
            dispatch(removeKey(id))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
