import * as actions from '../actions';

const settings = (state = {}, action) => {
    switch (action.type) {
        case actions.SET_PASSWORD:
            return {
                password: action.password
            }
        default:
            return state;
    }
};

export default settings;
