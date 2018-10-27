export const SET_MY_DOCS = "SET_MY_DOCS";

export default (state = null, action) => {
    switch (action.type) {
        case SET_MY_DOCS:
            return action.docs;
        default:
            return state;
    }
}
