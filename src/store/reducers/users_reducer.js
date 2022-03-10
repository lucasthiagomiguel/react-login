import { GET_USERS } from '../actions/types';

export default (state = {}, actions) => {
    switch (actions.type) {
        case GET_USERS:
            console.log(actions.payload.users);
            return {
                ...state,
                users: actions.payload.users
            }
        default:
            return state;
    }
}