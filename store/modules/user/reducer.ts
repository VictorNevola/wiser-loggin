export default function user(state = [], action) {
    switch (action.type) {
        case "SING_UP_SUCCESS":
            return action.user
        default:
            return null;
    }
}