import React, {Component} from 'react';
import Modal from "@material-ui/core/es/Modal/Modal";
import Typography from "@material-ui/core/es/Typography/Typography";

class TeamMemberModalComponent extends Component {
    render() {
        const {show, member, onClose} = this.props;
       // TODO - get this working and properly formatted
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={show}
                onClose={onClose}
            >
                <div>
                    <Typography variant="h6" id="modal-title">
                        {member && member.name}
                    </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </div>
            </Modal>
        );
    }
}

export default TeamMemberModalComponent;
