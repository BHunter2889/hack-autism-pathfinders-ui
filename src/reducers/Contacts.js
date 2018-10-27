export const SET_MY_CONTACTS = "SET_MY_CONTACTS";

export default (state = null, action) => {
    switch (action.type) {
        case SET_MY_CONTACTS:
            return action.contacts;
        default:
            return state;
    }
}
