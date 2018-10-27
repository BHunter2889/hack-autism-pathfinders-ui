import {connect}        from 'react-redux';
import DocsComponent from "../components/DocsComponent";

const mapStateToProps = (state) => ({
    docs: state.Docs
});

export default connect(mapStateToProps, null)(DocsComponent);
