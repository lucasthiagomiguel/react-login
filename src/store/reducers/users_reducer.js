import { GET_USERS } from '../actions/types';

export default (state = {}, actions) => {
    switch (actions.type) {
        case GET_USERS:
            console.log(actions.payload);
            return {
                ...state,
                users: actions.payload
            }
        default:
            return state;
    }
}