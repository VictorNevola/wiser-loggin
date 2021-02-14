export default function user(state = [], action) {
    switch (action.type) {
        case "SING_UP_SUCCESS":
            return action.user;
        case "OPEN_MODAL_REGISTER": 
            console.log(action)
            return action.modalOpen;
        default:
            return null;
    }
}