import {connect}        from 'react-redux';
import {HIDE_MEMBER_MODAL} from "../reducers/IsMemberModalShowing";
import TeamMemberModalComponent from "../components/TeamMemberModalComponent";

const mapStateToProps = (state) => ({
    show: state.IsMemberModalShowing,
    member: state.MemberModalDetails
});
const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch({type: HIDE_MEMBER_MODAL})
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberModalComponent);
