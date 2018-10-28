import {connect}        from 'react-redux';
import FormByIdComponent from "../components/FormByIdComponent";
import {SET_FORM_DATA} from "../reducers/FormData";

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id
});

const mapDispatchToProps = (dispatch) => ({
    saveData: (data) => dispatch({type: SET_FORM_DATA, data})
});

export default connect(mapStateToProps, mapDispatchToProps)(FormByIdComponent);
