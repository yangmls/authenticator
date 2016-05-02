import SettingsForm from '../components/SettingsForm';

import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { setPassword } from '../actions';

const mapStateToProps = (state) => {
    return {
        password: state.settings.password
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

        onSubmit(password) {
            dispatch(setPassword(password))
            hashHistory.push('/')
        },

        onCancel() {
            hashHistory.push('/')
        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
