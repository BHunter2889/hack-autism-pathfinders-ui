import {connect}        from 'react-redux';
import AppComponent   from '../components/AppComponent';
import {doGetContacts, doGetDocs, doGetForms, doGetTeam, doGetUpcomingEvents} from "../actions/api";
import {SCREEN_RESIZE} from "../reducers/ScreenDimensions";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
    fetchDocs: () => dispatch(doGetDocs),
    fetchForms: () => dispatch(doGetForms),
    fetchContacts: () => dispatch(doGetContacts),
    fetchTeam: () => dispatch(doGetTeam),
    fetchUpcomingEvents: () => dispatch(doGetUpcomingEvents),
    updateDimensions: (dimensions) => dispatch({type: SCREEN_RESIZE, dimensions})
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
