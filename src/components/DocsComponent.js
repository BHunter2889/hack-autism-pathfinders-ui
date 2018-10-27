import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class DocsComponent extends Component {
  render() {

    const {docs} = this.props;

    if (!docs) {
        return (
            <div>
                <CircularProgress size={50} />
                <div>Loading Docs...</div>
            </div>
        )
    }

    return (
      <div>
        Show Docs Here....

      </div>
    );
  }
}

export default DocsComponent;
