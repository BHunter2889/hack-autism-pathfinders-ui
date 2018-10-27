import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class FormsComponent extends Component {
  render() {

    const {forms} = this.props;

    if (!forms) {
        return (
            <div>
                <CircularProgress size={50} />
                <div>Loading Forms...</div>
            </div>
        )
    }

    return (
      <div>
        Show Forms Here....

      </div>
    );
  }
}

export default FormsComponent;
