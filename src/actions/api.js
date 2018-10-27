import {SET_MY_FORMS}       from "../reducers/Forms";
import {SET_MY_DOCS}        from "../reducers/Docs";
import {SET_MY_TEAM}        from "../reducers/Team";
import {SET_MY_CONTACTS}    from "../reducers/Contacts";
import {SET_UPCOMING_EVENTS} from "../reducers/UpcomingEvents";

const GET_FORMS_URL = "www.google.com";
const GET_DOCS_URL = "www.google.com";
const GET_TEAM_URL = "www.google.com";
const GET_CONTACTS_URL = "www.google.com";
const GET_UPCOMING_EVENTS_URL = "www.google.com";

export const doGetContacts = (dispatch) => {
    fetch(GET_CONTACTS_URL)
        .then((res) => {
            dispatch({type: SET_MY_CONTACTS, contacts: res.body})
        })
        .catch((err) => {
            // handle error
        })
};

export const doGetTeam = (dispatch) => {
    fetch(GET_TEAM_URL)
        .then((res) => {
            dispatch({type: SET_MY_TEAM, team: res.body})
        })
        .catch((err) => {
            // handle error
        })
};

export const doGetUpcomingEvents = (dispatch) => {
    fetch(GET_UPCOMING_EVENTS_URL)
        .then((res) => {
            dispatch({type: SET_UPCOMING_EVENTS, upcomingEvents: res.body})
        })
        .catch((err) => {
            // handle error
        })
};

export const doGetDocs = (dispatch) => {
    fetch(GET_DOCS_URL)
        .then((res) => {
            dispatch({type: SET_MY_DOCS, docs: res.body})
        })
        .catch((err) => {
            // handle error
        })
};

export const doGetForms = (dispatch) => {
    fetch(GET_FORMS_URL)
        .then((res) => {
            dispatch({type: SET_MY_FORMS, forms: res.body})
        })
        .catch((err) => {
            // handle error
        })
};