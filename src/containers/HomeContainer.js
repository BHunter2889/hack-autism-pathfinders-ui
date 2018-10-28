import {connect}        from 'react-redux';
import HomeComponent   from '../components/HomeComponent';
import {HIDE_MEMBER_MODAL} from "../reducers/IsMemberModalShowing";
import {events} from "../eventTestData";

const mapStateToProps = (state) => ({
    team: state.Team,
    events: state.UpcomingEvents,
    // events: events,  -for local testing
    show: state.IsMemberModalShowing,
    member: state.MemberModalDetails,
    screenHeight: state.ScreenDimensions.height
});
const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch({type: HIDE_MEMBER_MODAL})
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
