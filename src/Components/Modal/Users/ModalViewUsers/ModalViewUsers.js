import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalViewUsers = ({ name, email, phone }) => {
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
          <Modal.Title>Users info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalViewUsers;
