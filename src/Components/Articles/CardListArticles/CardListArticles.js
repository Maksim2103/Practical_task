import './articles.css';

import { useState, useMemo, useCallback } from 'react';

import CardItemArticles from '../CardItemArticles/CardItemArticles';
import ButtonFooter from '../../ButtonFooter/ButtonFooter';
import HeaderItemArticle from '../../Articles/HeaderItemArticle/HeaderItemArticle';

const COUNT_CARDS_PER_PAGE = 3;

const CardListArticles = ({ data, deleteItem, addItem, editItem }) => {
  const [paramPage, setParamPage] = useState(COUNT_CARDS_PER_PAGE);
  const [isStatusCard, setIsStatusCard] = useState(false);

  const sliceData = useMemo(() => data.slice(0, paramPage), [data, paramPage]);

  const isVisibleBtn = useMemo(() => data.length > sliceData.length, [
    data,
    sliceData,
  ]);

  const handleBtnShowMe = useCallback(() => {
    setParamPage(paramPage + 3);
  }, [paramPage]);

  const toggleViewMode = () => {
    setIsStatusCard(!isStatusCard);
  };

  const buttonsProps = {
    edit: { title: 'Edit', header: 'Edit article', variant: 'outline-dark' },
    add: { title: 'Add article', header: 'Add article', variant: 'primary' },
    modalButtonEdit: { title: 'Edit' },
    modalButtonAdd: { title: 'Create' },
  };

  return (
    <div>
      <div className="container-fluid  w-75">
        <HeaderItemArticle
          addItem={addItem}
          buttonTitle={buttonsProps.add.title}
          buttonVariant={buttonsProps.add.variant}
          headertitle={buttonsProps.add.header}
          modalButtonTitle={buttonsProps.modalButtonAdd.title}
          isStatusCard={isStatusCard}
          toggleViewMode={toggleViewMode}
        />
      </div>
      <div className="container-fluid d-flex flex-wrap justify-content-around w-75">
        {sliceData.map((el) => (
          <div
            key={el.id}
            className={!isStatusCard ? 'box-body p-2 ' : 'box-body w-50 p-2'}
          >
            <CardItemArticles
              itemTitle={el.title}
              itemBody={el.body}
              id={el.id}
              deleteItem={deleteItem}
              editItem={editItem}
              buttonTitle={buttonsProps.edit.title}
              buttonVariant={buttonsProps.edit.variant}
              headertitle={buttonsProps.edit.header}
              modalButtonTitle={buttonsProps.modalButtonEdit.title}
            />
          </div>
        ))}
      </div>

      {isVisibleBtn && <ButtonFooter handleShowMe={handleBtnShowMe} />}
    </div>
  );
};

export default CardListArticles;
