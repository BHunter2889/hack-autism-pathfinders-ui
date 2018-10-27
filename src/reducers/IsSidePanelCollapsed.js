export const TOGGLE_SIDE_PANEL = "TOGGLE_SIDE_PANEL";

export default (state = true, action) => {
    switch (action.type) {
        case TOGGLE_SIDE_PANEL:
            return !state;
        default:
            return state;
    }
}
