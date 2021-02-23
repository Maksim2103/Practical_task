import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

const ModalAddEditPhoto = ({
  userId,
  id,
  itemUrl,
  title,
  setTitle,
  setUrl,
  buttonTitle,
  buttonVariant,
  headertitle,
  modalButtonTitle,
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

  const addPhotoModal = (id, title, url) => {
    addItem(id, title, url);
    handleClose();
  };

  const editPhotoModal = (id, title, url) => {
    editItem(id, title, url);
    handleClose();
  };

  const handleOnClickButton = (e) => {
    e.preventDefault();
    const action = e.target.value;
    switch (action) {
      case 'Edit':
        return editPhotoModal(id, title, itemUrl);
      case 'Create':
        return addPhotoModal(id, title, itemUrl);
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
              <Form.Label>Title:</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder={title}
                defaultValue={title}
                onChange={hahdleOnChange(setTitle)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Image url:</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder={itemUrl}
                defaultValue={itemUrl}
                onChange={hahdleOnChange(setUrl)}
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

export default ModalAddEditPhoto;
