import {connect}        from 'react-redux';
import FormsComponent from "../components/FormsComponent";

const mapStateToProps = (state) => ({
    forms: state.Forms
});

export default connect(mapStateToProps, null)(FormsComponent);
