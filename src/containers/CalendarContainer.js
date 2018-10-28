import {connect}        from 'react-redux';
import HomeComponent   from '../components/HomeComponent';
import {HIDE_MEMBER_MODAL} from "../reducers/IsMemberModalShowing";
import {events} from "../testData";
import CalendarComponent from "../components/CalendarComponent";

const mapStateToProps = (state) => ({
    // events: state.UpcomingEvents
    events: events  //-for local testing
});
const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch({type: HIDE_MEMBER_MODAL})
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarComponent);
