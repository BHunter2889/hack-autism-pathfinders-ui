import {connect}        from 'react-redux';
import AppComponent   from '../components/AppComponent';
import {doGetContacts, doGetDocs, doGetForms, doGetTeam, doGetUpcomingEvents} from "../actions/api";
import {SCREEN_RESIZE} from "../reducers/ScreenDimensions";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    fetchDocs: () => dispatch(doGetDocs),
    fetchForms: () => dispatch(doGetForms),
    fetchTeam: () => dispatch(doGetTeam),
    fetchContacts: () => dispatch(doGetContacts),
    fetchUpcomingEvents: () => dispatch(doGetUpcomingEvents),
    updateDimensions: (dimensions) => dispatch({type: SCREEN_RESIZE, dimensions})
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
