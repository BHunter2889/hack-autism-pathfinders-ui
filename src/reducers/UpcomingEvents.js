export const SET_UPCOMING_EVENTS = "SET_UPCOMING_EVENTS";

export default (state = null, action) => {
    switch (action.type) {
        case SET_UPCOMING_EVENTS:
            return action.upcomingEvents;
        default:
            return state;
    }
}
