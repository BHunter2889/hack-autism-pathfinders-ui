import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import TeamMemberProfileComponent from "./TeamMemberProfileComponent";

class HomeComponent extends Component {
  render() {

    const {team, upcomingEvents} = this.props;

    return (
      <div>
        Chewie, we're home....

        <div className="team-dashboard-container">
            {!team ?
                <div>
                    <CircularProgress size={50} />
                    <div> Loading Team... </div>
                </div>
                :
                <div>
                    My team members will be here when loaded...
                    <TeamMemberProfileComponent />
                </div>
            }
        </div>
        <Divider/>
        <div className="upcoming-events-container">
            {!upcomingEvents ?
                <div>
                    <CircularProgress size={50} />
                    <div> Loading Upcoming Events... </div>
                </div>
                :
                <div>
                    Event goes here
                </div>
            }
        </div>


      </div>
    );
  }
}

export default HomeComponent;
