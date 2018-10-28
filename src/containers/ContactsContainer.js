import {connect}        from 'react-redux';
import ContactsComponent from "../components/ContactsComponent";
import {contacts} from "../testData";
import {doGetContacts, doGetDocs, doGetForms, doGetTeam, doGetUpcomingEvents} from "../actions/api";
import {SCREEN_RESIZE} from "../reducers/ScreenDimensions";

const mapStateToProps = (state) => ({
    // contacts: state.Contacts,
    contacts: contacts //local testing
});

const mapDispatchToProps = (dispatch) => ({
    fetchContacts: () => dispatch(doGetContacts)
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactsComponent);
