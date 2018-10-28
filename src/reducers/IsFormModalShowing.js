export const SHOW_FORM_MODAL = "SHOW_FORM_MODAL";
export const HIDE_FORM_MODAL = "HIDE_FORM_MODAL";

export default (state = false, action) => {
    switch (action.type) {
        case SHOW_FORM_MODAL:
            return true;
        case HIDE_FORM_MODAL:
            return false;
        default:
            return state;
    }
}
