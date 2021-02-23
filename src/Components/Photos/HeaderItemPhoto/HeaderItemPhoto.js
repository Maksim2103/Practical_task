import { useState, useMemo } from 'react';

import Button from 'react-bootstrap/Button';
import ModalAddEditPhoto from '../../Modal/Photos/ModalAddEditPhoto/ModalAddEditPhoto';

const HeaderItemPhoto = ({
  addItem,
  buttonTitle,
  buttonVariant,
  headertitle,
  modalButtonTitle,
  toggleViewMode,
  isStatusCard,
}) => {
  const [titleAddModal, setTitleAddModal] = useState('Enter title here');
  const [itemUrlAddModal, setUrlAddModal] = useState('Enter url here');

  const idAddModal = new Date().getTime();
  const userIdAddModal = useMemo(() => {
    return Math.floor(Math.random() * 100);
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-between mb-2">
      <div>
        <h4>Photos List</h4>
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
        <ModalAddEditPhoto
          addItem={addItem}
          title={titleAddModal}
          itemUrl={itemUrlAddModal}
          setTitle={setTitleAddModal}
          setUrl={setUrlAddModal}
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

export default HeaderItemPhoto;
