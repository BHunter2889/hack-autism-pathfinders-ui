import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import TeamMemberProfileContainer from "../containers/TeamMemberProfileContainer";
import {Modal} from "react-bootstrap";
import Chip from "@material-ui/core/es/Chip/Chip";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import VideoCall from '@material-ui/icons/VideoCall';
import Phone from '@material-ui/icons/Phone';
import Message from '@material-ui/icons/Message';
import Fax from '@material-ui/icons/LocalPrintshop';
import Email from '@material-ui/icons/Email';
import AddPerson from '@material-ui/icons/PersonAdd';
import {ROUTE_FORMS} from "./AppComponent";
import history from "../utils/history"

const team = [
    {
        name: "Beau",
        imgUrl: "https://media.licdn.com/dms/image/C4E03AQHmST5cxGP1UQ/profile-displayphoto-shrink_100_100/0?e=1545868800&v=beta&t=NAYTKw76_EKqs_Y4JlG2zP2myB0WzRPMCgWzUtVwXAU",
        phoneNumber: "302-750-3719",
        email: "beauHerndon@gmail.com",
        fax: "302-479-0369",
        description: "Call in case of technological emergency.",
        address: "4354A Maryland Ave, Saint Louis MO 63108"
    },
    {
        name: "John Doe",
        phoneNumber: "302-750-3719",
        email: "beauHerndon@gmail.com",
        fax: "302-479-0369",
        description: "Here's a very descriptive description for this person",
        address: "4354A Maryland Ave, Saint Louis MO 63108"
    },
    {
        name: "Gonzo",
        imgUrl: "https://vignette.wikia.nocookie.net/muppetmania/images/0/0f/The_Great_Gonzo_muppets_master_replicas_gonzo_.jpg/revision/latest?cb=20130329213136",
        phoneNumber: "302-750-3719",
        email: "beauHerndon@gmail.com",
        fax: "302-479-0369",
        description: "Plastic surgeon.",
        address: "4354A Maryland Ave, Saint Louis MO 63108"
    }
];

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditingTeam: false
        };
    }

    render() {

        const {upcomingEvents, show, onClose, member, screenHeight} = this.props;
        const {isEditingTeam} = this.state;

        return (
            <div>
                <h1> My Team</h1>
                <button className="btn btn-link" style={{marginTop: "-10px"}}
                        onClick={() => this.setState({isEditingTeam: !isEditingTeam})}>
                    {isEditingTeam ? "(finish editing)" : "(edit team)"}
                </button>

                <div className="team-dashboard-container">
                    {!team ?
                        <div>
                            <CircularProgress size={50}/>
                            <div> Loading Team...</div>
                        </div>
                        :
                        <div style={{width: "100%"}}>
                            {team.map((member) => <TeamMemberProfileContainer showRemoval={isEditingTeam}
                                                                              member={member}/>)}
                        </div>
                    }
                    {isEditingTeam &&
                    <div className="team-member-profile-thumbnail">
                        <button className="btn-floating waves-effect waves-light profile-image-circle-mini"
                                onClick={() => history.push(ROUTE_FORMS)}>
                            <AddPerson style={{fontSize: "100px"}}/>
                        </button>
                        <h4>Add To Team</h4>
                    </div>
                    }
                </div>
                {screenHeight && screenHeight > 700 &&
                    <div>
                        <Divider/>
                        <div className="upcoming-events-container">
                            {!upcomingEvents ?
                                <div>
                                    <CircularProgress size={50}/>
                                    <div> Loading Upcoming Events...</div>
                                </div>
                                :
                                <div>
                                    Event goes here
                                </div>
                            }
                        </div>
                    </div>
                }
                <Modal
                    show={show}
                    onHide={onClose}
                    aria-labelledby="contained-modal-title"
                    container={this}
                    style={{marginTop: "100px"}}
                >
                    <Modal.Body style={{textAlign: "center"}}>
                        <TeamMemberProfileContainer member={member}/>
                        <div style={{width: "100%"}}>
                            <Chip
                                avatar={<Avatar><VideoCall/></Avatar>}
                                label="Video Call"
                                style={{fontSize: 14}}
                                onClick={() => {/*noop*/
                                }}
                            />&nbsp;&nbsp;
                            <Chip
                                avatar={<Avatar><Phone/></Avatar>}
                                label={`Call`}
                                style={{fontSize: 14}}
                                onClick={() => {/*noop*/
                                }}
                            />&nbsp;&nbsp;
                            <Chip
                                avatar={<Avatar><Message/></Avatar>}
                                label="SMS"
                                style={{fontSize: 14}}
                                onClick={() => {/*noop*/
                                }}
                            />&nbsp;&nbsp;
                            <Chip
                                avatar={<Avatar><Fax/></Avatar>}
                                label="Fax"
                                style={{fontSize: 14}}
                                onClick={() => {/*noop*/
                                }}
                            />&nbsp;&nbsp;
                            <Chip
                                avatar={<Avatar><Email/></Avatar>}
                                label="Email"
                                style={{fontSize: 14}}
                                onClick={() => {/*noop*/
                                }}
                            />

                        </div>
                        <Divider inset style={{margin: "10px"}}/>
                        <p>{member && member.description}</p>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default HomeComponent;
