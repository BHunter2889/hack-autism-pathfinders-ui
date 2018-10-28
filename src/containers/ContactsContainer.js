import {connect}        from 'react-redux';
import ContactsComponent from "../components/ContactsComponent";
import {contacts} from "../testData";

const mapStateToProps = (state) => ({
    // contacts: state.Contacts,
    contacts: contacts //local testing
});

export default connect(mapStateToProps, null)(ContactsComponent);
