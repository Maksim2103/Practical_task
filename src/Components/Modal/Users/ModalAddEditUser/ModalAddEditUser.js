import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

const ModalAddEditUser = ({
  id,
  buttonTitle,
  buttonVariant,
  headertitle,
  modalButtonTitle,
  name,
  email,
  phone,
  setName,
  setEmail,
  setPhone,
  addItem,
  editItem,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const hahdleOnChange = (method) => (e) => {
    method(e.target.value);
  };

  const addUserModal = (id, name, email, phone) => {
    addItem(id, name, email, phone);
    handleClose();
  };

  const editUserModal = (id, name, email, phone) => {
    editItem(id, name, email, phone);
    handleClose();
  };

  const handleOnClickButton = (e) => {
    e.preventDefault();
    const action = e.target.value;
    switch (action) {
      case 'Edit':
        return editUserModal(id, name, email, phone);
      case 'Create':
        return addUserModal(id, name, email, phone);
      default:
        break;
    }
  };

  return (
    <>
      <Button variant={buttonVariant} onClick={handleShow}>
        {buttonTitle}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{headertitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder={name}
                defaultValue={name}
                onChange={hahdleOnChange(setName)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder={email}
                defaultValue={email}
                onChange={hahdleOnChange(setEmail)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder={phone}
                defaultValue={phone}
                onChange={hahdleOnChange(setPhone)}
              />
            </Form.Group>
            <Button
              type="submit"
              as="input"
              variant="primary"
              value={modalButtonTitle}
              onClick={handleOnClickButton}
            />
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAddEditUser;
