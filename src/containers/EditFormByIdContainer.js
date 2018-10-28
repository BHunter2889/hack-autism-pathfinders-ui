import {connect}        from 'react-redux';
import FormByIdComponent from "../components/FormByIdComponent";
import ViewFormByIdComponent from "../components/ViewFormByIdComponent";
import EditFormByIdComponent from "../components/EditFormByIdComponent";
import {SET_FORM_DATA} from "../reducers/FormData";

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    data: state.FormData
});


const mapDispatchToProps = (dispatch) => ({
    saveData: (data) => dispatch({type: SET_FORM_DATA, data})
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFormByIdComponent);
