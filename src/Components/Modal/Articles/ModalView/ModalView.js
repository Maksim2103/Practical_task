import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalView = ({ body, title }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        View
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Articles info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{title}</h4>
          <p>{body}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalView;
