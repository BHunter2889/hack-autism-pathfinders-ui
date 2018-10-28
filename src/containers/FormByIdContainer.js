import {connect}        from 'react-redux';
import FormByIdComponent from "../components/FormByIdComponent";

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id
});

export default connect(mapStateToProps, null)(FormByIdComponent);
