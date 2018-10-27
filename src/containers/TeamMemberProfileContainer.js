import {connect}        from 'react-redux';
import TeamMemberProfileComponent from "../components/TeamMemberProfileComponent";
import {SHOW_MEMBER_MODAL} from "../reducers/IsMemberModalShowing";
import {SET_MEMBER_MODAL_DETAILS} from "../reducers/MemberModalDetails";

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
    showTeamMemberModal: (member) => {
        dispatch({type: SET_MEMBER_MODAL_DETAILS, member});
        dispatch({type: SHOW_MEMBER_MODAL});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberProfileComponent);
