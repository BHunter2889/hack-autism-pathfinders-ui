import {connect}        from 'react-redux';
import ContactsComponent from "../components/ContactsComponent";

const mapStateToProps = (state) => ({
    contacts: state.Contacts
});

export default connect(mapStateToProps, null)(ContactsComponent);
