import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from "@material-ui/core/es/Chip/Chip";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import VideoCall from '@material-ui/icons/VideoCall';
import Phone from '@material-ui/icons/Phone';
import Message from '@material-ui/icons/Message';
import Pin from '@material-ui/icons/PinDrop';
import Email from '@material-ui/icons/Email';
import Card from "@material-ui/core/es/Card/Card";

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
      <div style={{height: "90vh", width: "100%", textAlign: "center"}}>
          <div style={{margin:"auto", display: "inline-block", textAlign: "left"}}>
          {
              contacts.map(contact => (
                  <Card style={{margin: "20px", padding: "10px", width: "40%", display:"inline-block", maxWidth: "400px", minWidth: "300px", textAlign: "center"}}>
                      <div className="contact-profile-thumbnail">
                          <button className="btn-floating waves-effect waves-light contact-circle-mini">
                              <img
                                  aria-label="Click to view this team member"
                                  alt="Team Member Profile Button"
                                  style={{width: "100%"}}
                                  src={contact.imgUrl}
                              />
                          </button>
                          <h3>{contact.name}</h3>
                      </div>
                      <div>
                          <Chip
                              avatar={<Avatar><VideoCall/></Avatar>}
                              label="Video Call"
                              style={{fontSize: 14, margin: "5px"}}
                              onClick={() => {/*noop*/
                              }}
                          />
                          {contact.numbers && contact.numbers.length > 0 &&
                            contact.numbers.map(number => (
                                <Chip
                                    avatar={<Avatar><Phone/></Avatar>}
                                    label={`Mobile: ${number}`}
                                    style={{fontSize: 14, margin: "5px"}}
                                    onClick={() => {/*noop*/
                                    }}
                                />
                            ))
                          }
                          <Chip
                              avatar={<Avatar><Pin/></Avatar>}
                              label={`Address ${contact.address}`}
                              style={{fontSize: 14, margin: "5px"}}
                              onClick={() => {/*noop*/
                              }}
                          />

                      </div>
                  </Card>
              ))
          }
          </div>

      </div>
    );
  }
}

export default ContactsComponent;
