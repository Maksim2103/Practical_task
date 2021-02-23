import { useState, useMemo } from 'react';

import Button from 'react-bootstrap/Button';
import ModalAddEditArticle from '../../Modal/Articles/ModalAddEditArticle/ModalAddEditArticle';

const HeaderItemArticle = ({
  addItem,
  buttonTitle,
  buttonVariant,
  headertitle,
  modalButtonTitle,
  toggleViewMode,
  isStatusCard,
}) => {
  const [titleAddModal, setTitleAddModal] = useState('Enter title here');
  const [bodyAddModal, setBodyAddModal] = useState('Enter text here');

  const idAddModal = new Date().getTime();
  const userIdAddModal = useMemo(() => {
    return Math.floor(Math.random() * 100);
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-between mb-2">
      <div>
        <h4>Article List</h4>
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
        <ModalAddEditArticle
          addItem={addItem}
          setTitle={setTitleAddModal}
          setBody={setBodyAddModal}
          title={titleAddModal}
          body={bodyAddModal}
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

export default HeaderItemArticle;
