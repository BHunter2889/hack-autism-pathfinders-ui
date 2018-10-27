export const SET_MEMBER_MODAL_DETAILS = "SET_MEMBER_MODAL_DETAILS";

export default (state = null, action) => {
    switch (action.type) {
        case SET_MEMBER_MODAL_DETAILS:
            return action.member;
        default:
            return state;
    }
}
