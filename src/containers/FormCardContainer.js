import {connect}        from 'react-redux';
import FormCardComponent from "../components/FormCardComponent";
import {SHOW_FORM_MODAL} from "../reducers/IsFormModalShowing";
import {LOAD_FORM_INTO_VIEW} from "../reducers/Forms";

const mapStateToProps = (state, ownProps) => ({
    ...ownProps
});
const mapDispatchToProps = (dispatch) => ({
    showFormModal: (form) => {
        dispatch({type: LOAD_FORM_INTO_VIEW, form})
        dispatch({type: SHOW_FORM_MODAL});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FormCardComponent);
