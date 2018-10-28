import {connect}        from 'react-redux';
import FormsComponent from "../components/FormsComponent";
import {HIDE_MEMBER_MODAL} from "../reducers/IsMemberModalShowing";
import {doGetForms, doGetTeam, doGetUpcomingEvents} from "../actions/api";

const mapStateToProps = (state) => ({
    forms: state.Forms
});

const mapDispatchToProps = (dispatch) => ({
    fetchForms: () => dispatch(doGetForms),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsComponent);
