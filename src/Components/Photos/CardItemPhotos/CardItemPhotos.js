import { useState, useCallback } from 'react';
import './ItemCard.css';

import Button from 'react-bootstrap/Button';
import { Card, CardGroup } from 'react-bootstrap/';

import ModalViewPhoto from '../../Modal/Photos/ModalViewPhoto/ModalViewPhoto';
import ModalDelete from '../../Modal/ModalDelete/ModalDelete';
import ModalAddEditPhoto from '../../Modal/Photos/ModalAddEditPhoto/ModalAddEditPhoto';

const CardItemPhotos = ({
  itemTitle,
  itemUrl,
  id,
  deleteItem,
  editItem,
  buttonTitle,
  buttonVariant,
  headertitle,
  modalButtonTitle,
}) => {
  const [titleEditModal, setTitleEditModal] = useState(itemTitle);
  const [, setItemUrlEditModal] = useState(itemUrl);

  const [currentColorClass, setCurrentColorClass] = useState('item-body');

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

  return (
    <CardGroup>
      <Card className={`card text-darks ${currentColorClass} `}>
        <Card.Img variant="top" src={itemUrl} />
        <Card.Body className="d-flex flex-column justify-content-between ">
          <Card.Title>{itemTitle} </Card.Title>
          <div>
            <ModalViewPhoto itemUrl={itemUrl} title={itemTitle} />
            <Button variant="outline-dark" onClick={toggleColor}>
              Change color
            </Button>
            <ModalAddEditPhoto
              itemUrl={itemUrl}
              title={titleEditModal}
              id={id}
              editItem={editItem}
              setTitle={setTitleEditModal}
              setUrl={setItemUrlEditModal}
              buttonTitle={buttonTitle}
              buttonVariant={buttonVariant}
              headertitle={headertitle}
              modalButtonTitle={modalButtonTitle}
            />
            <ModalDelete deleteItem={deleteItem} id={id} />
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default CardItemPhotos;
