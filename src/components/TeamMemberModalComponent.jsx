import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Modal} from "react-bootstrap";


class SimpleModal extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const {show, member, onClose, container } = this.props;

        return (
            <div>
                <Modal
                    show={show}
                    onHide={onClose}
                    container={container}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Contained Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
                        ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={onClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default SimpleModal;
