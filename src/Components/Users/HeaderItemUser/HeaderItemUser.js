import { useState, useMemo } from 'react';

import Button from 'react-bootstrap/Button';
import ModalAddEditUser from '../../Modal/Users/ModalAddEditUser/ModalAddEditUser';

const HeaderItemUser = ({
  addItem,
  buttonTitle,
  buttonVariant,
  headertitle,
  modalButtonTitle,
  toggleViewMode,
  isStatusCard,
}) => {
  const [nameAddModal, setNameAddModal] = useState('Enter name here');
  const [emailAddModal, setEmailAddModal] = useState('Enter email here');
  const [phoneAddModal, setPhoneAddModal] = useState('Enter phone here');

  const idAddModal = new Date().getTime();
  const userIdAddModal = useMemo(() => {
    return Math.floor(Math.random() * 100);
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-between mb-2">
      <div>
        <h4>Users List</h4>
      </div>
      <div className="d-flex">
        <Button
          className="mr-2"
          variant="primary"
          size="sm"
          onClick={toggleViewMode}
        >
          {isStatusCard ? 'Make small card' : 'Make big card'}
        </Button>
        <ModalAddEditUser
          name={nameAddModal}
          email={emailAddModal}
          phone={phoneAddModal}
          setName={setNameAddModal}
          setEmail={setEmailAddModal}
          setPhone={setPhoneAddModal}
          addItem={addItem}
          userId={userIdAddModal}
          id={idAddModal}
          buttonTitle={buttonTitle}
          buttonVariant={buttonVariant}
          headertitle={headertitle}
          modalButtonTitle={modalButtonTitle}
        />
      </div>
    </div>
  );
};

export default HeaderItemUser;
