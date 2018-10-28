export const SET_FORM_DATA = "SET_FORM_DATA";

export default (state = null, action) => {
    switch (action.type) {
        case SET_FORM_DATA:
            return action.data;
        default:
            return state;
    }
}
