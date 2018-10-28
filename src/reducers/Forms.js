export const SET_MY_FORMS = "SET_MY_FORMS";
export const LOAD_FORM_INTO_VIEW = "LOAD_FORM_INTO_VIEW";

export default (state = null, action) => {
    switch (action.type) {
        case SET_MY_FORMS:
            return action.forms;
        case LOAD_FORM_INTO_VIEW:
            return action.form;
        default:
            return state;
    }
}
