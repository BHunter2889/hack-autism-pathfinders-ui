import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormCardContainer from '../containers/FormCardContainer';
import { Typography } from '@material-ui/core';

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
        {forms.length > 0
          ? forms.map(form => <FormCardContainer form={form} />)
          : <Typography gutterBottom variant="h5" component="h2"> No Forms Available Yet </Typography>
        }
      </div>
    );
  }
}

export default FormsComponent;
