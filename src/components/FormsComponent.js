import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormCardContainer from '../containers/FormCardContainer';
import { Typography } from '@material-ui/core';

class FormsComponent extends Component {
  constructor(props) {
    super(props);
    props.fetchForms();
  }
  render() {
    console.log("ImmaFormsComponent!")

    const {forms} = this.props;

    if (!forms) {
        return (
            <div>
                <CircularProgress size={50} />
                <div>Loading Forms...</div>
            </div>
        )
    }
    console.log("Forms: ", forms)
    console.log("Category: ", this.props.categoryIdx)
    return (
      <div className="form-card-container">
        {forms.length > 0
          ? forms.map(form => 
          <FormCardContainer form={form} />
          )
          : <Typography gutterBottom variant="h5" component="h2"> No Forms Available Yet </Typography>
        }
      </div>
    );
  }
}

export default FormsComponent;
