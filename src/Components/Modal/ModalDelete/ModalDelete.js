import { useState, useCallback } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDelete = ({ deleteItem, id }) => {
  const [show, setShow] = useState(false);

  const handleClose = useCallback(() => {
    setShow(false);
  }, [setShow]);
  const handleShow = useCallback(() => {
    setShow(true);
  }, [setShow]);

  const deleteItemModal = useCallback(() => {
    deleteItem(id);
    handleClose();
  }, [id, deleteItem, handleClose]);

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>"Do you really want to delete this card?" </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteItemModal}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDelete;
