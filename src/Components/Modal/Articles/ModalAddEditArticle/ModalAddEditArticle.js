import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

const ModalAddEdit = ({
  addItem,
  editItem,
  setTitle,
  setBody,
  title,
  body,
  userId,
  id,
  buttonTitle,
  buttonVariant,
  headertitle,
  modalButtonTitle,
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

  const addArticleModal = (userId, id, title, body) => {
    addItem(userId, id, title, body);
    handleClose();
  };

  const editArticlesModal = (id, title, body) => {
    editItem(id, title, body);
    handleClose();
  };

  const handleOnClickButton = (e) => {
    e.preventDefault();
    const action = e.target.value;
    switch (action) {
      case 'Edit':
        return editArticlesModal(id, title, body);
      case 'Create':
        return addArticleModal(userId, id, title, body);
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
                rows={3}
                placeholder={title}
                defaultValue={title}
                onChange={hahdleOnChange(setTitle)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Text:</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                placeholder={body}
                defaultValue={body}
                onChange={hahdleOnChange(setBody)}
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

export default ModalAddEdit;
