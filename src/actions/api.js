import {SET_MY_FORMS}       from "../reducers/Forms";
import {SET_MY_DOCS}        from "../reducers/Docs";
import {SET_MY_TEAM}        from "../reducers/Team";
import {SET_MY_CONTACTS}    from "../reducers/Contacts";
import {SET_UPCOMING_EVENTS} from "../reducers/UpcomingEvents";

const GET_FORMS_URL = "/api/forms";
const GET_DOCS_URL = "/api/docs";
const GET_TEAM_URL = "/api/team";
const GET_CONTACTS_URL = "/api/contacts";
const GET_UPCOMING_EVENTS_URL = "api/events";

const getObjectFromStreamRes = (res) => JSON.parse(res.body.json());

export const doGetContacts = (dispatch) => {
    fetch(GET_CONTACTS_URL)
        .then(res => res.json())
        .then(json => {
            console.log("the object:", json);
            dispatch({type: SET_MY_CONTACTS, contacts: json})
        })
        .catch((err) => {
            // handle error
        })
};

export const doGetTeam = (dispatch) => {
    fetch(GET_TEAM_URL)
        .then(res => res.json())
        .then(json => {
            console.log("the object:", json);
            dispatch({type: SET_MY_TEAM, team: json})
        })
        .catch((err) => {
            // handle error
        })
};

export const doGetUpcomingEvents = (dispatch) => {
    fetch(GET_UPCOMING_EVENTS_URL)
        .then(res => res.json())
        .then(json => {
            console.log("the object:", json);
            dispatch({type: SET_UPCOMING_EVENTS, upcomingEvents: json})
        })
        .catch((err) => {
            // handle error
        })
};

export const doGetDocs = (dispatch) => {
    fetch(GET_DOCS_URL)
        .then(res => res.json())
        .then(json => {
            console.log("the object:", json);
            dispatch({type: SET_MY_DOCS, docs: json})
        })
        .catch((err) => {
            // handle error
        })
};

export const doGetForms = (dispatch) => {
    fetch(GET_FORMS_URL)
        .then(res => res.json())
        .then(json => {
            console.log("the object:", json);
            dispatch({type: SET_MY_FORMS, forms: json})
        })
        .catch((err) => {
            // handle error
        })
};