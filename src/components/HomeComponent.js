import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class HomeComponent extends Component {
  render() {

    const {team} = this.props;

    return (
      <div>
        Chewie, we're home....

        <div>
            {team ? "team has loaded" :
                <div>
                    <CircularProgress size={50} />
                    <div> Loading Team... </div>
                </div>
            }
        </div>


      </div>
    );
  }
}

export default HomeComponent;
