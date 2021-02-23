import { useState, useCallback } from 'react';
import './ItemCard.css';

import Button from 'react-bootstrap/Button';
import { Card, CardGroup } from 'react-bootstrap/';

import ModalAddEditArticle from '../../Modal/Articles/ModalAddEditArticle/ModalAddEditArticle';
import ModalView from '../../Modal/Articles/ModalView/ModalView';
import ModalDelete from '../../Modal/ModalDelete/ModalDelete';

const CardItemArticles = ({
  itemTitle,
  itemBody,
  id,
  deleteItem,
  editItem,
  buttonTitle,
  buttonVariant,
  headertitle,
  modalButtonTitle,
}) => {
  const [titleEditModal, setTitleEditModal] = useState(itemTitle);
  const [bodyEditModal, setBodyEditModal] = useState(itemBody);

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
        <Card.Body className="d-flex flex-column justify-content-between ">
          <Card.Title>{itemTitle} </Card.Title>
          <Card.Text>{itemBody}</Card.Text>
          <Card.Text></Card.Text>
          <Card.Text></Card.Text>
          <div>
            <ModalView body={itemBody} title={itemTitle} />
            <Button variant="outline-dark" onClick={toggleColor}>
              Change color
            </Button>
            <ModalAddEditArticle
              body={bodyEditModal}
              title={titleEditModal}
              id={id}
              editItem={editItem}
              setTitle={setTitleEditModal}
              setBody={setBodyEditModal}
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

export default CardItemArticles;
