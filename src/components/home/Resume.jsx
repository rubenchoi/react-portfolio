import React from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Resume = ({ variant = "outline-dark" }) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<>
    <Button variant={variant} onClick={handleShow}>
      Resume
    </Button>
    <Modal show={show} onHide={handleClose} size="lg" fullscreen={true}>
      <Modal.Header closeButton>
        <Modal.Title>Resume</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe src="/resume.pdf" style={{ width: '100%', height: '100%' }}></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>);
};

export default Resume;
