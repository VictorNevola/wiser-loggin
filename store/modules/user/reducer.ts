export default function user(state = [], action) {

    switch (action.type) {
        case "SING_UP_SUCCESS":
            return action.users
        default:
            return state;
    }
}