export const SHOW_MEMBER_MODAL = "SHOW_MEMBER_MODAL";
export const HIDE_MEMBER_MODAL = "HIDE_MEMBER_MODAL";

export default (state = false, action) => {
    switch (action.type) {
        case SHOW_MEMBER_MODAL:
            return true;
        case HIDE_MEMBER_MODAL:
            return false;
        default:
            return state;
    }
}
