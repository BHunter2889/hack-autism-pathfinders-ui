import React, {Component} from 'react';
import Modal from "@material-ui/core/es/Modal/Modal";

class TeamMemberModalComponent extends Component {
    render() {
        const {open, member, onClose} = this.props;

        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={onClose}
            >
                <div>
                    {member.name}
                </div>
            </Modal>
        );
    }
}

export default TeamMemberModalComponent;
