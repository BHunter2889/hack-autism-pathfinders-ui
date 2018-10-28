import {connect}        from 'react-redux';
import FormByIdComponent from "../components/FormByIdComponent";
import ViewFormByIdComponent from "../components/ViewFormByIdComponent";

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    data: state.FormData
});

export default connect(mapStateToProps, null)(ViewFormByIdComponent);
