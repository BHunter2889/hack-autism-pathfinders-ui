import {connect}        from 'react-redux';
import AppComponent   from '../components/AppComponent';
import {doGetContacts, doGetDocs, doGetForms, doGetTeam} from "../actions/api";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    fetchDocs: () => dispatch(doGetDocs),
    fetchForms: () => dispatch(doGetForms),
    fetchTeam: () => dispatch(doGetTeam),
    fetchContacts: () => dispatch(doGetContacts),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
