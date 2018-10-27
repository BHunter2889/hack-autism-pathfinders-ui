export const SET_MY_FORMS = "SET_MY_FORMS";

export default (state = null, action) => {
    switch (action.type) {
        case SET_MY_FORMS:
            return action.forms;
        default:
            return state;
    }
}
