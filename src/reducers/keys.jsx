import * as actions from '../actions';

const keys = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_KEY:
            return [
                ...state,
                {
                    id: state.length + 1,
                    key: action.key,
                    comment: action.comment
                }
            ];
        case actions.REMOVE_KEY:
            return state.filter(model => model.id !== action.id)
        default:
            return state;
    }
};

export default keys;
