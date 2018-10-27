import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class ContactsComponent extends Component {
  render() {

    const {contacts} = this.props;

    if (!contacts) {
        return (
            <div>
                <CircularProgress size={50} />
                <div>Loading Contacts...</div>
            </div>
        )
    }

    return (
      <div>
        Show Contacts Here....

      </div>
    );
  }
}

export default ContactsComponent;
