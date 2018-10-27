export const SET_MY_TEAM = "SET_MY_TEAM";

export default (state = null, action) => {
    switch (action.type) {
        case SET_MY_TEAM:
            return action.team;
        default:
            return state;
    }
}
