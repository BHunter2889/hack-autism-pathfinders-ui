import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import TeamMemberProfileContainer from "../containers/TeamMemberProfileContainer";
import TeamMemberModalContainer from "../containers/TeamMemberModalContainer";

class HomeComponent extends Component {
  render() {

    const {upcomingEvents} = this.props;

    const team = [
        {
            name: "Beau",
            imgUrl: "https://media.licdn.com/dms/image/C4E03AQHmST5cxGP1UQ/profile-displayphoto-shrink_100_100/0?e=1545868800&v=beta&t=NAYTKw76_EKqs_Y4JlG2zP2myB0WzRPMCgWzUtVwXAU",
            phoneNumber: "302-750-3719",
            email: "beauHerndon@gmail.com",
            fax: "302-479-0369",
            description: "Nerd",
            address: "4354A Maryland Ave, Saint Louis MO 63108"
        },
        {
            name: "Beau",
            phoneNumber: "302-750-3719",
            email: "beauHerndon@gmail.com",
            fax: "302-479-0369",
            description: "Nerd",
            address: "4354A Maryland Ave, Saint Louis MO 63108"
        },
        {
            name: "Beau",
            imgUrl: "https://i.dailymail.co.uk/i/pix/2017/09/05/10/43ED20A700000578-4853460-What_happened_On_Tuesday_Beau_Ryan_took_to_Instagram_to_showcase-a-70_1504605472199.jpg",
            phoneNumber: "302-750-3719",
            email: "beauHerndon@gmail.com",
            fax: "302-479-0369",
            description: "Nerd",
            address: "4354A Maryland Ave, Saint Louis MO 63108"
        }
    ];

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
                    {team.map((member) => (<TeamMemberProfileContainer member={member}/>))}
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
        <TeamMemberModalContainer />
      </div>
    );
  }
}

export default HomeComponent;
