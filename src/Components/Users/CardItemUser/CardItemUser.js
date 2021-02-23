import { useState, useCallback } from 'react';

import Button from 'react-bootstrap/Button';
import { Card, CardGroup } from 'react-bootstrap/';
import ModalViewUsers from '../../Modal/Users/ModalViewUsers/ModalViewUsers';
import ModalDelete from '../../Modal/ModalDelete/ModalDelete';
import ModalAddEditUser from '../../Modal/Users/ModalAddEditUser/ModalAddEditUser';

const CardItemUser = ({ name, email, phone, deleteItem, editItem, id }) => {
  const [currentColorClass, setCurrentColorClass] = useState('item-body');
  const [nameEditModal, setNameEditModal] = useState(name);
  const [emailEditModal, setEmailEditModal] = useState(email);
  const [phoneEditModal, setPhoneEditModal] = useState(phone);

  const toggleColor = useCallback(() => {
    const listClasses = {
      'item-body': 'bg-info',
      'bg-info': 'bg-light',
      'bg-light': 'bg-success',
      'bg-success': 'bg-warning',
      'bg-warning': 'bg-primary',
      'bg-primary': 'item-body',
    };
    setCurrentColorClass(listClasses[currentColorClass]);
  }, [currentColorClass, setCurrentColorClass]);

  const buttonsProps = {
    edit: { title: 'Edit', header: 'Edit user', variant: 'outline-dark' },
    add: { title: 'Add user', header: 'Add user', variant: 'primary' },
    modalButtonEdit: { title: 'Edit' },
    modalButtonAdd: { title: 'Create' },
  };

  return (
    <CardGroup>
      <Card border="dark" className={`card text-darks ${currentColorClass} `}>
        <Card.Body className="d-flex flex-column justify-content-between ">
          <Card.Title> Users Page </Card.Title>
          <Card.Text>Name: {name} </Card.Text>
          <Card.Text>Email: {email}</Card.Text>
          <Card.Text>Phone: {phone}</Card.Text>
          <div>
            <ModalViewUsers name={name} email={email} phone={phone} />

            <Button variant="outline-dark" onClick={toggleColor}>
              Change color
            </Button>
            <ModalAddEditUser
              name={nameEditModal}
              email={emailEditModal}
              phone={phoneEditModal}
              id={id}
              editItem={editItem}
              buttonTitle={buttonsProps.edit.title}
              buttonVariant={buttonsProps.edit.variant}
              setName={setNameEditModal}
              setEmail={setEmailEditModal}
              setPhone={setPhoneEditModal}
              headertitle={buttonsProps.edit.header}
              modalButtonTitle={buttonsProps.modalButtonEdit.title}
            />
            <ModalDelete deleteItem={deleteItem} id={id} />
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default CardItemUser;
