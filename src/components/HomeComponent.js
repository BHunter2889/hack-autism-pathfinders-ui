import React, { Component } from 'react';
import '../App.css';
import CircularProgress from '@material-ui/core/CircularProgress';

class HomeComponent extends Component {
  render() {

    const {team} = this.props;

    return (
      <div className="App">
        Chewie, we're home.

        <div>
          Team will go here:
            {team ? "team has loaded" :
                <CircularProgress size={50} />
            }
        </div>


      </div>
    );
  }
}

export default HomeComponent;
